import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = { title: "My Wardrobe — Flora" };

export default function WardrobePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-5 sm:px-8 py-16 text-center">
        <p className="text-xs font-semibold tracking-widest text-flora-600 uppercase">
          Coming soon
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
          My Wardrobe
        </h1>
        <p className="mt-3 text-neutral-600">
          Your saved kits, gear rotation, and the fits you’ve worn for every
          run. We’re building this out next — tell us where it should point.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-1.5 text-sm text-neutral-700 hover:text-neutral-950"
        >
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </main>
      <Footer />
    </>
  );
}
