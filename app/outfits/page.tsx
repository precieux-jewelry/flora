import Link from "next/link";
import { Plus } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { OutfitTile } from "@/components/cards/outfit-tile";
import { outfits } from "@/data/outfits";

export const metadata = {
  title: "Outfit discovery — Flora",
  description: "What runners are actually wearing.",
};

export default function OutfitsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold tracking-widest text-flora-600 uppercase">
              Outfits
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
              Outfits, on the move.
            </h1>
            <p className="mt-2 text-neutral-600 max-w-xl">
              Race-day fits, sunrise kits, and the layers that actually worked.
              Save the ones you’d steal.
            </p>
          </div>

          <Link
            href="/outfits/new"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-950 text-white text-sm font-semibold hover:bg-neutral-800 transition"
          >
            <Plus className="h-4 w-4" />
            Post outfit
          </Link>
        </div>

        <div className="mt-10 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {outfits.map((o, i) => (
            <OutfitTile key={o.id} o={o} index={i} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
