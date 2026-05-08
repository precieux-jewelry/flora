import Link from "next/link";
import { Plus, Sparkles, Target, Trophy } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WardrobeGrid } from "@/components/wardrobe/wardrobe-grid";
import { wardrobeKits } from "@/data/wardrobe";

export const metadata = {
  title: "My Wardrobe — Flora",
  description:
    "Your race-day fit archive. Log every kit you wore — 5K to ultra to Tuesday tempo — and look back at what worked.",
};

const totalMiles = Math.round(
  wardrobeKits.reduce((acc, k) => acc + k.miles, 0),
);
const totalRaces = wardrobeKits.filter((k) =>
  ["5K", "10K", "Half marathon", "Full marathon", "Ultra"].includes(
    k.category,
  ),
).length;
const totalPrs = wardrobeKits.filter((k) => k.pr).length;

export default function WardrobePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-flora-100 text-flora-700 px-3 py-1 text-xs font-semibold">
            <Sparkles className="h-3 w-3" />
            Coming soon · under development
          </div>
          <div className="mt-5 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
                My{" "}
                <span className="bg-gradient-to-r from-flora-500 to-flora-700 bg-clip-text text-transparent">
                  Wardrobe.
                </span>
              </h1>
              <p className="mt-3 max-w-xl text-neutral-600">
                Your race-day fit archive. Post the kits you wore at every 10K,
                half, full, ultra, and tempo Tuesday. Look back at what worked
                — and steal from your past self when you’re standing in front
                of the closet at 5am.
              </p>
            </div>

            <Link
              href="#new"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-950 text-white text-sm font-semibold hover:bg-neutral-800 transition"
            >
              <Plus className="h-4 w-4" />
              Add to wardrobe
            </Link>
          </div>
        </section>

        {/* STATS */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-10">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Stat label="Kits logged" value={wardrobeKits.length.toString()} accent />
            <Stat label="Races" value={totalRaces.toString()} icon={<Target className="h-4 w-4 text-flora-600" />} />
            <Stat label="Total miles" value={totalMiles.toLocaleString()} />
            <Stat label="PRs" value={totalPrs.toString()} icon={<Trophy className="h-4 w-4 text-flora-600" />} />
          </dl>
        </section>

        {/* WARDROBE GRID */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-14">
          <WardrobeGrid />
        </section>

        {/* ADD KIT (mock) */}
        <section
          id="new"
          className="max-w-6xl mx-auto px-5 sm:px-8 pb-20"
        >
          <div className="rounded-[2rem] bg-neutral-950 text-white p-8 sm:p-12 grid md:grid-cols-2 gap-8 items-center overflow-hidden relative">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-flora-500/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-flora-700/20 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-semibold tracking-widest text-flora-300 uppercase">
                When we launch
              </p>
              <h3 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
                One tap to log a fit.
              </h3>
              <p className="mt-3 text-neutral-300 max-w-md">
                Drop a race-day photo, pick the distance, tag the gear. Flora
                builds you a private fit archive you can flip through every
                taper week.
              </p>
              <Link
                href="/#waitlist"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-flora-500 text-neutral-950 px-5 py-3 text-sm font-semibold hover:bg-flora-400 transition"
              >
                Get early access
              </Link>
            </div>

            <div className="relative space-y-3">
              {[
                { label: "Race or session", value: "Half marathon" },
                { label: "Date", value: "Sep 16, 2025" },
                { label: "Shoes", value: "Saucony Endorphin Pro 4" },
                { label: "Top", value: "Bandit Strike Singlet" },
                { label: "Photo", value: "race-day-fit.jpg ·  ✓" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center justify-between gap-4"
                >
                  <span className="text-xs uppercase tracking-widest text-neutral-400">
                    {row.label}
                  </span>
                  <span className="text-sm font-medium text-right truncate">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Stat({
  label,
  value,
  accent,
  icon,
}: {
  label: string;
  value: string;
  accent?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={
        "rounded-2xl p-4 border " +
        (accent
          ? "bg-flora-100/60 border-flora-200"
          : "bg-neutral-50 border-neutral-100")
      }
    >
      <dt className="text-[10px] uppercase tracking-widest text-neutral-500 inline-flex items-center gap-1.5">
        {icon}
        {label}
      </dt>
      <dd className="mt-1 text-2xl font-semibold tabular-nums tracking-tight">
        {value}
      </dd>
    </div>
  );
}
