import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CircleDollarSign,
  Recycle,
  ScanLine,
  Sparkles,
  Tag,
  Upload,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Outfit Scanner — Flora",
  description:
    "Snap your run kit. Flora identifies every piece and finds new + used listings — including gear runners are reselling.",
};

const detected = [
  { id: 1, label: "Nike Vaporfly 3", category: "Shoes", price: "$260", used: "$140" },
  { id: 2, label: "Tracksmith Harrier Mesh", category: "Top", price: "$78", used: "$32" },
  { id: 3, label: "Bandit Stride 5\"", category: "Shorts", price: "$58", used: "$24" },
  { id: 4, label: "Goodr Carl's Inferno", category: "Sunglasses", price: "$25", used: "$12" },
];

const flow = [
  {
    n: "01",
    title: "Snap or upload",
    body: "Take a fit pic — race day, sunrise long run, anything. Upload from camera roll or take a fresh photo.",
    icon: Camera,
  },
  {
    n: "02",
    title: "Flora scans the fit",
    body: "Our scanner identifies every piece: shoes, top, shorts, jacket, socks, fuel — even the watch.",
    icon: ScanLine,
  },
  {
    n: "03",
    title: "Shop new + used",
    body: "See retail listings AND used pairs from runners reselling. Skip the markup, find the exact size.",
    icon: Tag,
  },
];

export default function ScannerPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-flora-100 text-flora-700 px-3 py-1 text-xs font-semibold">
              <Sparkles className="h-3 w-3" />
              Coming soon · under development
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
              Outfit Scanner.{" "}
              <span className="bg-gradient-to-r from-flora-500 to-flora-700 bg-clip-text text-transparent">
                See it, scan it, shop it.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-neutral-600">
              Snap a photo of any runner’s outfit and we’ll tell you what they’re wearing and where to buy it new or used.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                href="/#waitlist"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-950 text-white font-medium hover:bg-neutral-800 transition"
              >
                Get early access
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#flow"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-neutral-200 font-medium hover:bg-neutral-50 transition"
              >
                How it works
              </Link>
            </div>
            <p className="mt-5 text-xs text-neutral-500">
              No price markups. No paid placements. Sellers ship direct to runners.
            </p>
          </div>

          {/* SCAN MOCK */}
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-flora-200/50 to-transparent blur-2xl" />
            <div className="relative rounded-[2rem] border border-neutral-200 bg-white shadow-2xl overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/run-marathon.jpg"
                  alt="Scanning a runner's race-day fit"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority
                  className="object-cover"
                />
                {/* Scan overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-4 border border-flora-400/80 rounded-2xl" />
                  <div className="absolute inset-x-4 top-1/3 h-px bg-flora-400 shadow-[0_0_12px_2px] shadow-flora-400/50" />
                </div>
                {/* Detection pins */}
                {[
                  { top: "12%", left: "32%", label: "Top" },
                  { top: "44%", left: "44%", label: "Shorts" },
                  { top: "78%", left: "30%", label: "Shoes" },
                ].map((p) => (
                  <div
                    key={p.label}
                    style={{ top: p.top, left: p.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                  >
                    <span className="block h-3 w-3 rounded-full bg-flora-500 ring-4 ring-flora-500/30 animate-pulse" />
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-widest bg-neutral-950/85 text-white px-2 py-0.5 rounded-full">
                      {p.label}
                    </span>
                  </div>
                ))}
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest bg-white/90 px-2 py-1 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-flora-500 animate-pulse" />
                  Scanning…
                </span>
              </div>

              <div className="p-4 grid grid-cols-2 gap-2">
                {detected.slice(0, 4).map((d) => (
                  <div
                    key={d.id}
                    className="rounded-xl bg-neutral-50 border border-neutral-100 px-3 py-2"
                  >
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                      {d.category}
                    </p>
                    <p className="text-xs font-semibold truncate">{d.label}</p>
                    <p className="text-[11px] text-neutral-600 mt-1">
                      <span className="line-through text-neutral-400 mr-1">
                        {d.price}
                      </span>
                      <span className="font-semibold text-flora-700">
                        used {d.used}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FLOW */}
        <section id="flow" className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-flora-600 uppercase">
              How it’ll work
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              Three taps from a fit pic to your size.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {flow.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.n}
                  className="rounded-3xl bg-neutral-50 border border-neutral-100 p-7"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-flora-600" />
                    <span className="text-flora-600 font-semibold">{s.n}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 text-sm leading-relaxed">
                    {s.body}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* RESELL CTA */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-14">
          <div className="rounded-[2rem] bg-neutral-950 text-white p-8 sm:p-14 grid md:grid-cols-2 gap-10 items-center overflow-hidden relative">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-flora-500/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-flora-700/20 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-flora-500/15 text-flora-300 px-3 py-1 text-xs font-semibold">
                <Recycle className="h-3 w-3" />
                Resell your old kit
              </div>
              <h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
                Most runners have $400+ of unworn gear.
              </h3>
              <p className="mt-3 text-neutral-300 max-w-md">
                List your retired Vaporflys, the singlet that didn’t fit, the
                race kit you only wore once. Other runners will see your size
                and buy it. Easy listing, runner-to-runner.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                {[
                  "Snap a photo, set your price",
                  "Buyers see exact size + miles run",
                  "Ship direct, no marketplace fees on launch month",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-flora-400" />
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href="/#waitlist"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-flora-500 text-neutral-950 px-5 py-3 text-sm font-semibold hover:bg-flora-400 transition"
              >
                Join the seller waitlist
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative grid gap-3">
              {[
                { item: "Nike Vaporfly 2 · M9", miles: "82 mi", price: "$120", was: "$250" },
                { item: "Tracksmith Van Cortlandt singlet · M", miles: "Worn 3×", price: "$28", was: "$70" },
                { item: "Salomon ADV Skin 5 vest · S", miles: "1 race", price: "$95", was: "$165" },
              ].map((l) => (
                <div
                  key={l.item}
                  className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-flora-300">
                      Listed by a runner
                    </span>
                    <span className="text-xs text-neutral-400">{l.miles}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold">{l.item}</p>
                  <p className="mt-1 text-sm text-neutral-300">
                    <span className="font-semibold text-flora-300">
                      {l.price}
                    </span>{" "}
                    <span className="line-through text-neutral-500 ml-1">
                      {l.was}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20 grid sm:grid-cols-3 gap-4">
          {[
            {
              icon: CircleDollarSign,
              title: "Cheaper than retail",
              body: "Used Vaporflys with 80 miles run for half the price of new.",
            },
            {
              icon: Upload,
              title: "Built for runners",
              body: "Listings show miles run, race history, and stride wear.",
            },
            {
              icon: Recycle,
              title: "Less waste",
              body: "Most racing shoes go in a closet after one race. Pass them on.",
            },
          ].map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="rounded-2xl border border-neutral-100 bg-white p-5"
              >
                <Icon className="h-5 w-5 text-flora-600" />
                <p className="mt-3 text-sm font-semibold">{b.title}</p>
                <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                  {b.body}
                </p>
              </div>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
