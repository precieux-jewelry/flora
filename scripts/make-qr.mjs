// Generate a Flora-branded QR code that points at the production site.
// Run: `node scripts/make-qr.mjs`

import QRCode from "qrcode";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const URL = "https://flora-beta-two.vercel.app";
const SIZE = 1200;
const MARGIN = 4;
const ICON_RATIO = 0.18; // logo overlay = 18% of QR width

const FLORA_DARK = "#0a0a0a";
const FLORA_BG = "#ffffff";

async function main() {
  // Render the QR with high error correction so the centre logo doesn't break it.
  const qrPng = await QRCode.toBuffer(URL, {
    errorCorrectionLevel: "H",
    margin: MARGIN,
    color: { dark: FLORA_DARK, light: FLORA_BG },
    width: SIZE,
  });

  // Composite the Flora "Fa" icon in the centre.
  const iconSize = Math.round(SIZE * ICON_RATIO);
  const iconPath = path.join(root, "public", "flora-icon.png");
  const icon = await sharp(iconPath)
    .resize(iconSize, iconSize, { fit: "contain" })
    .toBuffer();

  // Soft white halo behind the icon so it reads cleanly.
  const halo = Math.round(iconSize * 1.1);
  const haloRound = Math.round(halo * 0.22);
  const haloSvg = Buffer.from(
    `<svg width="${halo}" height="${halo}" xmlns="http://www.w3.org/2000/svg">
       <rect x="0" y="0" width="${halo}" height="${halo}" rx="${haloRound}" ry="${haloRound}" fill="white"/>
     </svg>`,
  );

  const out = await sharp(qrPng)
    .composite([
      {
        input: haloSvg,
        gravity: "center",
      },
      {
        input: icon,
        gravity: "center",
      },
    ])
    .png({ quality: 95 })
    .toBuffer();

  // Write the QR-only file (clean) AND a branded version with caption.
  const qrCleanPath = path.join(root, "public", "flora-qr.png");
  await sharp(out).toFile(qrCleanPath);

  // Branded poster: yellow band + caption underneath the QR.
  const posterW = SIZE + 240;
  const posterH = SIZE + 320;
  const captionSvg = Buffer.from(
    `<svg width="${posterW}" height="${posterH}" xmlns="http://www.w3.org/2000/svg">
       <rect width="100%" height="100%" fill="#ffffff"/>
       <text x="50%" y="${SIZE + 200}" text-anchor="middle"
             font-family="Helvetica, Arial, sans-serif" font-size="56" font-weight="700" fill="#0a0a0a"
             letter-spacing="6">FLORA</text>
       <text x="50%" y="${SIZE + 268}" text-anchor="middle"
             font-family="Helvetica, Arial, sans-serif" font-size="32" font-weight="400" fill="#525252">
         Scan to join the running fit check community
       </text>
     </svg>`,
  );

  const posterBuf = await sharp({
    create: {
      width: posterW,
      height: posterH,
      channels: 3,
      background: "#ffffff",
    },
  })
    .composite([
      { input: captionSvg, top: 0, left: 0 },
      { input: out, top: 120, left: Math.round((posterW - SIZE) / 2) },
    ])
    .png({ quality: 95 })
    .toBuffer();

  const posterPath = path.join(root, "public", "flora-qr-poster.png");
  await sharp(posterBuf).toFile(posterPath);

  console.log(`✓ ${qrCleanPath}     (raw QR — embed anywhere)`);
  console.log(`✓ ${posterPath}      (poster — print/share)`);
  console.log(`  → URL encoded: ${URL}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
