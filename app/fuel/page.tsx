import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { fuelBrands, fuelCategories } from "@/data/fuel";

export const metadata = {
  title: "Food Fuel — Flora",
  description:
    "Reviewed running fuel from real runners. Gels, bars, drink mix, electrolytes — what actually works on race day.",
};

export default function FuelPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-flora-100 text-flora-700 px-3 py-1 text-xs font-semibold">
            <Sparkles className="h-3 w-3" />
            Coming soon · seeding the brand list
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl leading-[1.05]">
            Food fuel,{" "}
            <span className="bg-gradient-to-r from-flora-500 to-flora-700 bg-clip-text text-transparent">
              honestly reviewed.
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-neutral-600">
            Gels, chews, drink mix, real-food bars — what actually goes down at
            mile 22. Reviews coming from real marathoners, ultra-runners, and
            5K beginners.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link
              href="#brands"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-950 text-white font-medium hover:bg-neutral-800 transition"
            >
              Browse the brands
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="#waitlist"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-neutral-200 font-medium hover:bg-neutral-50 transition"
            >
              Get the launch email
            </Link>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-12">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              Browse by category
            </h2>
            <p className="text-xs text-neutral-500">
              {fuelBrands.length} brands tracked · more weekly
            </p>
          </div>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
            {fuelCategories.map((c) => (
              <div
                key={c.id}
                className="rounded-2xl border border-neutral-100 bg-white p-4 hover:border-flora-300 hover:shadow-sm transition"
              >
                <div className="text-2xl">{c.emoji}</div>
                <p className="mt-2 text-sm font-semibold tracking-tight">
                  {c.label}
                </p>
                <p className="text-[11px] text-neutral-500 leading-snug mt-0.5">
                  {c.blurb}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED BRANDS GRID */}
        <section id="brands" className="max-w-6xl mx-auto px-5 sm:px-8 pb-16">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
            <div>
              <p className="text-xs font-semibold tracking-widest text-flora-600 uppercase">
                Featured brands
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
                The fuel you’ll see at the start line.
              </h2>
            </div>
            <span className="text-xs text-neutral-500 inline-flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-flora-600" />
              Reviews unlock at launch
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fuelBrands.map((b) => (
              <article
                key={b.id}
                className="group relative rounded-3xl border border-neutral-100 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <div className={`relative h-40 bg-gradient-to-br ${b.tone}`}>
                  <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-widest bg-white/85 backdrop-blur px-2 py-1 rounded-full">
                    {b.category}
                  </span>
                  <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-widest bg-neutral-950/85 text-white px-2 py-1 rounded-full">
                    Reviews soon
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl sm:text-6xl font-black tracking-tighter text-neutral-900/15 uppercase">
                      {b.name}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[11px] text-neutral-500 uppercase tracking-widest">
                    {b.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight">
                    {b.name}
                  </h3>
                  <p className="text-sm text-neutral-500">{b.hero}</p>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="inline-flex items-center gap-1.5 text-neutral-600">
                      <Star className="h-4 w-4 fill-flora-500 text-flora-500" />
                      <span className="text-neutral-500">
                        {b.reviews.toLocaleString()} runners waiting
                      </span>
                    </span>
                    <span className="text-xs font-medium text-neutral-400">
                      {b.bestFor}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FUEL STORIES TEASER */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-16">
          <div className="rounded-[2rem] bg-neutral-50 border border-neutral-100 p-8 sm:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-flora-600 uppercase">
                What’s coming
              </p>
              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                Real fuel plans from real races.
              </h3>
              <p className="mt-3 text-neutral-600 max-w-md">
                Every featured runner shares the gels, the timing, the bottles,
                and what they ate the night before. No PR sponsorships. Just
                what works at mile 22.
              </p>
            </div>
            <ul className="grid gap-3">
              {[
                { who: "Maya · Berlin marathon", plan: "Maurten Gel 100 ×4 + caf gel at 30K" },
                { who: "Theo · 50K trail", plan: "Spring Awesome Sauce + Tailwind every 30 min" },
                { who: "Aria · Half marathon", plan: "Honey Stinger waffle + LMNT pre-race" },
              ].map((p) => (
                <li
                  key={p.who}
                  className="rounded-2xl bg-white border border-neutral-100 p-4"
                >
                  <p className="text-sm font-semibold">{p.who}</p>
                  <p className="text-sm text-neutral-600 mt-0.5">{p.plan}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section
          id="waitlist"
          className="max-w-6xl mx-auto px-5 sm:px-8 pb-20"
        >
          <div className="rounded-[2rem] bg-neutral-950 text-white p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Be the first to read the fuel reviews.
            </h3>
            <p className="mt-3 text-neutral-300 max-w-lg mx-auto">
              We’re testing every brand on this page with real runners over the
              next few weeks. Get the reviews + a giveaway when we launch.
            </p>
            <Link
              href="/#waitlist"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-flora-500 text-neutral-950 font-semibold hover:bg-flora-400 transition"
            >
              Join the waitlist
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
