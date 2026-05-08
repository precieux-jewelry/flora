/**
 * Curated running photography library.
 *
 * Every image in `runImages` has been visually verified to depict running
 * (a runner, race scene, or running-shoe close-up). Avatar Unsplash IDs are
 * verified-portrait photos and are kept inline at call sites.
 *
 * The Unsplash CDN helper is kept for the (clean, portrait) avatar IDs only —
 * all running content is served from /public/images for stability + speed.
 */

export const runImages = {
  marathon: "/images/run-marathon.jpg",      // marathon street race crowd
  tying: "/images/run-tying.jpg",            // runner tying shoes, urban
  country: "/images/run-country.jpg",        // man running country road
  cold: "/images/run-cold.jpg",              // runner cold-weather kit
  track: "/images/run-track.jpg",            // aerial of runners on track
  sunset: "/images/run-sunset.jpg",          // silhouette runners at sunset
  adidas: "/images/run-adidas.jpg",          // mid-stride Adidas shoes
  nikeRed: "/images/shoe-nike-red.jpg",      // red Nike running shoe close-up
  splash: "/images/shoe-splash.jpg",         // running shoes splashing water
} as const;

export type RunImage = keyof typeof runImages;

export function unsplash(
  id: string,
  opts: { w?: number; h?: number; q?: number; fit?: "crop" | "max" } = {},
) {
  const { w = 1200, h, q = 75, fit = "crop" } = opts;
  const params = new URLSearchParams({
    auto: "format",
    fit,
    w: String(w),
    q: String(q),
  });
  if (h) params.set("h", String(h));
  return `https://images.unsplash.com/photo-${id}?${params.toString()}`;
}
