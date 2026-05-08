import Link from "next/link";
import { Plus } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ShoeCard } from "@/components/cards/shoe-card";
import { shoes } from "@/data/shoes";

export const metadata = {
  title: "Shoe reviews — Flora",
  description: "Real runners reviewing real shoes.",
};

export default function ShoesPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold tracking-widest text-flora-600 uppercase">
              Shoe reviews
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
              Every pair, mile-tested.
            </h1>
            <p className="mt-2 text-neutral-600 max-w-xl">
              Reviews from runners who logged the miles, raced the races, and
              kept the receipts.
            </p>
          </div>

          <Link
            href="/shoes/new"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-950 text-white text-sm font-semibold hover:bg-neutral-800 transition"
          >
            <Plus className="h-4 w-4" />
            Add review
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shoes.map((s, i) => (
            <ShoeCard key={s.id} shoe={s} index={i} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
