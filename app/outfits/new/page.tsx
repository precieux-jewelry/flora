import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AddOutfitForm } from "@/components/forms/add-outfit-form";

export const metadata = {
  title: "Post an outfit — Flora",
};

export default function NewOutfitPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-5 sm:px-8 py-10">
        <Link
          href="/outfits"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-950"
        >
          <ArrowLeft className="h-4 w-4" />
          All outfits
        </Link>

        <header className="mt-6 mb-8">
          <p className="text-xs font-semibold tracking-widest text-flora-600 uppercase">
            New outfit
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
            Post the kit. Help a runner.
          </h1>
          <p className="mt-2 text-neutral-600">
            Photo, caption, and the gear list. Be specific — “Tracksmith Harrier
            Mesh” &gt; “tank.”
          </p>
        </header>

        <AddOutfitForm />
      </main>
      <Footer />
    </>
  );
}
