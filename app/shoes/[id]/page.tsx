import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Star, X } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { RatingBar } from "@/components/cards/rating-bar";
import { shoes, getShoe } from "@/data/shoes";

export function generateStaticParams() {
  return shoes.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const s = getShoe(id);
  if (!s) return {};
  return {
    title: `${s.brand} ${s.name} — Flora`,
    description: s.review,
  };
}

export default async function ShoeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const shoe = getShoe(id);
  if (!shoe) notFound();

  const r = shoe.ratings;

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <Link
          href="/shoes"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-950"
        >
          <ArrowLeft className="h-4 w-4" />
          All reviews
        </Link>

        <div className="mt-6 grid lg:grid-cols-2 gap-8">
          <div
            className={`relative aspect-square rounded-[2rem] bg-gradient-to-br ${shoe.image.tone} overflow-hidden`}
          >
            {shoe.image.src && (
              <Image
                src={shoe.image.src}
                alt={`${shoe.brand} ${shoe.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-contain p-10"
              />
            )}
            <span className="absolute top-5 left-5 z-10 text-[10px] font-semibold uppercase tracking-widest bg-white/85 backdrop-blur px-2.5 py-1 rounded-full">
              {shoe.category}
            </span>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              {shoe.brand}
            </p>
            <h1 className="mt-1 text-4xl sm:text-5xl font-semibold tracking-tight">
              {shoe.name}
            </h1>
            <p className="mt-2 text-neutral-600">{shoe.colorway}</p>

            <div className="mt-5 flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Star className="h-5 w-5 fill-flora-500 text-flora-500" />
                <span className="text-2xl font-semibold tabular-nums">
                  {shoe.overall.toFixed(1)}
                </span>
                <span className="text-sm text-neutral-500">
                  ({shoe.reviews.toLocaleString()} reviews)
                </span>
              </div>
              <span className="text-sm text-neutral-500">·</span>
              <span className="text-sm">
                <span className="font-semibold">{shoe.distanceUsed}</span> miles
                logged
              </span>
              <span className="text-sm text-neutral-500">·</span>
              <span className="text-sm font-semibold">${shoe.price}</span>
            </div>

            <div className="mt-7 rounded-3xl bg-neutral-50 border border-neutral-100 p-6 space-y-4">
              <h2 className="text-sm font-semibold">Performance</h2>
              <RatingBar label="Comfort" value={r.comfort} />
              <RatingBar label="Speed" value={r.speed} />
              <RatingBar label="Durability" value={r.durability} />
              <RatingBar label="Stability" value={r.stability} />
              <RatingBar label="Race-day score" value={r.raceDay} />
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border">
              {shoe.wouldBuyAgain ? (
                <>
                  <Check className="h-4 w-4 text-flora-600" />
                  <span>Reviewer would buy again</span>
                </>
              ) : (
                <>
                  <X className="h-4 w-4 text-rose-500" />
                  <span>Reviewer would not buy again</span>
                </>
              )}
            </div>
          </div>
        </div>

        <section className="mt-14 rounded-[2rem] bg-white border border-neutral-100 p-6 sm:p-10">
          <div className="flex items-center gap-3">
            <div
              className={`relative h-10 w-10 rounded-full ring-2 ring-white shadow overflow-hidden ${shoe.reviewer.tone}`}
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold">{shoe.reviewer.name}</p>
              <p className="text-xs text-neutral-500">@{shoe.reviewer.username}</p>
            </div>
          </div>
          <p className="mt-5 text-lg leading-relaxed text-neutral-800">
            “{shoe.review}”
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
