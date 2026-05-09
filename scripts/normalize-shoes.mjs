// Normalize the four featured-shoe product photos so they share the same
// square frame and consistent shoe scale across all cards.
//
// Run: `node scripts/normalize-shoes.mjs`

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "public", "images");

const TARGET = 1400; // px, square
const SHOE_RATIO = 0.82; // shoe should occupy ~82% of the frame
const BG = "#0a0a0a"; // card background (dark, matches site tone)

async function normalize(srcFile, opts = {}) {
  const src = path.join(root, srcFile);
  const dst = src.replace(/\.\w+$/, ".png");
  const tmp = dst + ".tmp.png";

  // First: read and flatten so we have an opaque image to trim from.
  let img = sharp(src).flatten({ background: opts.sourceBg || "#ffffff" });

  // Trim source background (white OR black depending on the original).
  if (opts.trim) {
    img = img.trim({ background: opts.sourceBg || "#ffffff", threshold: 30 });
  }

  const buf = await img.toBuffer();
  const meta = await sharp(buf).metadata();
  const longest = Math.max(meta.width, meta.height);
  const scale = (TARGET * SHOE_RATIO) / longest;
  const newW = Math.round(meta.width * scale);
  const newH = Math.round(meta.height * scale);

  await sharp(buf)
    .resize(newW, newH)
    .extend({
      top: Math.round((TARGET - newH) / 2),
      bottom: TARGET - newH - Math.round((TARGET - newH) / 2),
      left: Math.round((TARGET - newW) / 2),
      right: TARGET - newW - Math.round((TARGET - newW) / 2),
      background: BG,
    })
    .flatten({ background: BG })
    .png({ quality: 90 })
    .toFile(tmp);

  await sharp(tmp).toFile(dst);

  const fs = await import("fs/promises");
  await fs.unlink(tmp);
  if (src !== dst) await fs.unlink(src).catch(() => {});

  console.log(`✓ ${srcFile}  →  shoe ${newW}×${newH} centered on ${TARGET}×${TARGET} (bg ${BG})`);
}

async function main() {
  // Source images live in ~/Desktop/running shoes (originals).
  // We copy + normalize each onto a 1400x1400 dark square.
  const fs = await import("fs/promises");
  const SRC_DIR = "/Users/risedeskguest/Desktop/running shoes";

  const sources = [
    { src: "nikeviolet.png",  dst: "shoe-nike-vaporfly-4.png", bg: "#ffffff" },
    { src: "hoka.png",        dst: "shoe-hoka-clifton-10.png", bg: "#ffffff" },
    { src: "asiccorall.png",  dst: "shoe-asics-nimbus-27.png", bg: "#ffffff" },
    { src: "onivory.webp",    dst: "shoe-on-cloudmonster-3.png", bg: "#000000" },
  ];

  for (const s of sources) {
    const dest = path.join(root, s.src);
    await fs.copyFile(path.join(SRC_DIR, s.src), dest).catch(() => {});
    await normalize(s.src, { trim: true, sourceBg: s.bg });
    // Rename if the produced filename differs from the desired one.
    const produced = dest.replace(/\.\w+$/, ".png");
    const desired = path.join(root, s.dst);
    if (produced !== desired) {
      await fs.rename(produced, desired);
      console.log(`  → renamed to ${s.dst}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
