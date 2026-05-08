import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AddReviewForm } from "@/components/forms/add-review-form";

export const metadata = {
  title: "Add a shoe review — Flora",
};

export default function NewReviewPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-5 sm:px-8 py-10">
        <Link
          href="/shoes"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-950"
        >
          <ArrowLeft className="h-4 w-4" />
          All reviews
        </Link>

        <header className="mt-6 mb-8">
          <p className="text-xs font-semibold tracking-widest text-flora-600 uppercase">
            New review
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
            Tell runners how they ran.
          </h1>
          <p className="mt-2 text-neutral-600">
            Be honest. Be specific. Help the next runner pick the right pair.
          </p>
        </header>

        <AddReviewForm />
      </main>
      <Footer />
    </>
  );
}
