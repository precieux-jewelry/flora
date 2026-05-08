import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ExploreFeed } from "@/components/feed/explore-feed";

export const metadata = {
  title: "Explore — Flora",
  description: "What runners are wearing, racing in, and reviewing right now.",
};

export default function ExplorePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <header className="mb-8">
          <p className="text-xs font-semibold tracking-widest text-flora-600 uppercase">
            Explore
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
            What runners are sharing today.
          </h1>
          <p className="mt-2 text-neutral-600 max-w-xl">
            Scroll the feed. Filter by run type. Save the kits you’d steal.
          </p>
        </header>
        <ExploreFeed />
      </main>
      <Footer />
    </>
  );
}
