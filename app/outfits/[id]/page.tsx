import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bookmark, Cloud, Heart, Share2 } from "lucide-react";
import { unsplash } from "@/lib/img";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { outfits, getOutfit } from "@/data/outfits";

export function generateStaticParams() {
  return outfits.map((o) => ({ id: o.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const o = getOutfit(id);
  if (!o) return {};
  return { title: `${o.caption.slice(0, 60)} — Flora` };
}

const labels: Record<string, string> = {
  shoes: "Shoes",
  shorts: "Shorts / tights",
  top: "Top / sports bra",
  jacket: "Jacket",
  socks: "Socks",
  accessories: "Accessories",
  fuel: "Fuel",
};

export default async function OutfitDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const o = getOutfit(id);
  if (!o) notFound();

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <Link
          href="/outfits"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-950"
        >
          <ArrowLeft className="h-4 w-4" />
          All outfits
        </Link>

        <div className="mt-6 grid lg:grid-cols-2 gap-8">
          <div className={`relative aspect-[4/5] rounded-[2rem] bg-gradient-to-br ${o.photoTone} overflow-hidden`}>
            {o.photoSrc && (
              <Image
                src={o.photoSrc}
                alt={o.caption}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            )}
            <span className="absolute top-5 left-5 z-10 text-[10px] font-semibold uppercase tracking-widest bg-white/85 backdrop-blur px-2.5 py-1 rounded-full">
              {o.runType.replace("-", " ")}
            </span>
          </div>

          <div>
            <Link
              href={`/u/${o.user.username}`}
              className="inline-flex items-center gap-3 group"
            >
              <div className={`relative h-11 w-11 rounded-full ring-2 ring-white shadow overflow-hidden ${o.user.tone}`}>
                {o.user.avatarId && (
                  <Image
                    src={unsplash(o.user.avatarId, { w: 88, h: 88 })}
                    alt={o.user.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                )}
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold group-hover:underline">
                  {o.user.name}
                </p>
                <p className="text-xs text-neutral-500">@{o.user.username}</p>
              </div>
            </Link>

            <p className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
              {o.caption}
            </p>

            <div className="mt-4 flex items-center gap-4 text-sm text-neutral-600">
              <span className="inline-flex items-center gap-1.5">
                <Cloud className="h-4 w-4" />
                {o.weather}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Heart className="h-4 w-4" />
                {o.likes.toLocaleString()}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Bookmark className="h-4 w-4" />
                {o.saves.toLocaleString()}
              </span>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="px-5 py-2.5 rounded-full bg-neutral-950 text-white text-sm font-semibold hover:bg-neutral-800">
                Save outfit
              </button>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 text-sm font-medium hover:bg-neutral-50">
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>

            <dl className="mt-8 rounded-3xl bg-neutral-50 border border-neutral-100 p-6 divide-y divide-neutral-200/70">
              {Object.entries(o.gear).map(([k, v]) =>
                v ? (
                  <div key={k} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 py-3 first:pt-0 last:pb-0">
                    <dt className="text-xs sm:text-sm text-neutral-500 sm:w-32 shrink-0 uppercase sm:normal-case tracking-widest sm:tracking-normal">
                      {labels[k] ?? k}
                    </dt>
                    <dd className="text-sm font-medium sm:text-right">{v}</dd>
                  </div>
                ) : null,
              )}
            </dl>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
