import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { FeaturedShoes } from "@/components/landing/featured-shoes";
import { TrendingOutfits } from "@/components/landing/trending-outfits";
import { Waitlist } from "@/components/landing/waitlist";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturedShoes />
        <TrendingOutfits />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
