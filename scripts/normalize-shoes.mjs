// Normalize the four featured-shoe product photos so they share the same
// square frame and white background — keeping shoe scale consistent across cards.
//
// Run: `node scripts/normalize-shoes.mjs`

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "public", "images");

const TARGET = 1400; // px, square
const SHOE_RATIO = 0.82; // shoe should occupy ~82% of the frame

async function normalize(file, opts = {}) {
  const src = path.join(root, file);
  const tmp = src + ".tmp.png";

  let img = sharp(src).flatten({ background: "#ffffff" });

  // Trim any uniform background (white or near-white) so we get just the shoe.
  if (opts.trim) {
    img = img.trim({ background: opts.trimBg || "#ffffff", threshold: 30 });
  }

  // Re-fit shoe into a target-sized square at the desired ratio.
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
      background: "#ffffff",
    })
    .png({ quality: 90 })
    .toFile(tmp);

  // Replace original
  await sharp(tmp).toFile(src.replace(/\.\w+$/, ".png"));

  // Cleanup
  const fs = await import("fs/promises");
  await fs.unlink(tmp);
  if (!src.endsWith(".png")) await fs.unlink(src).catch(() => {});

  console.log(`✓ ${file}  →  shoe ${newW}×${newH} centered on ${TARGET}×${TARGET}`);
}

async function main() {
  // Cloudmonster has a black background — flatten removes it; trim drops the
  // remaining black border before we re-frame.
  await normalize("shoe-on-cloudmonster-3.webp", {
    trim: true,
    trimBg: "#000000",
  });

  // The three new product PNGs have white-ish backgrounds — trim to crop the
  // shoe out, then re-pad to a uniform square.
  await normalize("shoe-nike-vaporfly-4.png", { trim: true });
  await normalize("shoe-hoka-clifton-10.png", { trim: true });
  await normalize("shoe-asics-nimbus-27.png", { trim: true });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
