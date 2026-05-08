/**
 * Build a sized Unsplash CDN URL for a given photo ID.
 * All photos used here come from unsplash.com (free-to-use license).
 */
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
