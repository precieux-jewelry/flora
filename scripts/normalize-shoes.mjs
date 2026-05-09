// Normalize the four featured-shoe product photos so they share the same
// square frame and consistent shoe scale across all cards.
//
// Pipeline (per source file):
//   1. Open source → flatten (transparent → source bg)
//   2. Trim aggressively (kill the bg)
//   3. Resize so the longest side = SHOE_RATIO * TARGET
//   4. Extend with BG (dark) on all sides to a TARGET × TARGET square
//
// Run: `node scripts/normalize-shoes.mjs`

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "public", "images");

const TARGET = 1400;
const SHOE_RATIO = 0.82;
const BG = { r: 10, g: 10, b: 10 }; // #0a0a0a

async function normalize(srcFile, opts = {}) {
  const src = path.join(root, srcFile);
  const dst = src.replace(/\.\w+$/, ".png");
  const sourceBg = opts.sourceBg || "#ffffff";

  // 1. Flatten the source onto its known background, materialize.
  const flattened = await sharp(src)
    .flatten({ background: sourceBg })
    .toBuffer();

  // 2. Trim that background away — high threshold to nuke anti-aliased borders.
  const trimmed = await sharp(flattened)
    .trim({ background: sourceBg, threshold: 60 })
    .toBuffer();

  const tmeta = await sharp(trimmed).metadata();

  // 3. Compute target shoe size & pads.
  const longest = Math.max(tmeta.width, tmeta.height);
  const scale = (TARGET * SHOE_RATIO) / longest;
  const newW = Math.round(tmeta.width * scale);
  const newH = Math.round(tmeta.height * scale);
  const top = Math.round((TARGET - newH) / 2);
  const left = Math.round((TARGET - newW) / 2);

  // 4. Resize → extend with BG → flatten (paranoid) → write.
  const resized = await sharp(trimmed).resize(newW, newH).toBuffer();
  await sharp(resized)
    .extend({
      top,
      bottom: TARGET - newH - top,
      left,
      right: TARGET - newW - left,
      background: BG,
    })
    .flatten({ background: BG })
    .png({ quality: 90 })
    .toFile(dst);

  if (src !== dst) await fs.unlink(src).catch(() => {});

  console.log(
    `✓ ${srcFile}  trimmed→${tmeta.width}×${tmeta.height}  shoe→${newW}×${newH} on ${TARGET}²`,
  );
}

async function main() {
  const SRC_DIR = "/Users/risedeskguest/Desktop/running shoes";
  const sources = [
    { src: "nikeviolet.png", dst: "shoe-nike-vaporfly-4.png", bg: "#ffffff" },
    { src: "hoka.png", dst: "shoe-hoka-clifton-10.png", bg: "#ffffff" },
    { src: "asiccorall.png", dst: "shoe-asics-nimbus-27.png", bg: "#ffffff" },
    { src: "onivory.webp", dst: "shoe-on-cloudmonster-3.png", bg: "#000000" },
  ];

  for (const s of sources) {
    const dest = path.join(root, s.src);
    await fs.copyFile(path.join(SRC_DIR, s.src), dest).catch(() => {});
    await normalize(s.src, { sourceBg: s.bg });
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
