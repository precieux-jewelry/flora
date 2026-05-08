import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import { unsplash } from "@/lib/img";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileSection } from "@/components/profile/section";
import { RotationGrid } from "@/components/profile/rotation-grid";
import { BadgesStrip } from "@/components/profile/badges-strip";
import { profiles, getProfile, getReviewedShoe } from "@/data/profiles";

export function generateStaticParams() {
  return profiles.map((p) => ({ username: p.username }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const p = getProfile(username);
  if (!p) return {};
  return {
    title: `${p.name} (@${p.username}) — Flora`,
    description: p.bio,
  };
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const p = getProfile(username);
  if (!p) notFound();

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
        <ProfileHeader p={p} />

        <ProfileSection
          title="Achievements"
          hint={`${p.badges.length} badges earned`}
        >
          <BadgesStrip badges={p.badges} />
        </ProfileSection>

        <ProfileSection
          title="Shoe rotation"
          hint="Active pairs and the miles they've taken"
          action={
            <Link
              href="/shoes"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-950"
            >
              All shoes →
            </Link>
          }
        >
          <RotationGrid rotation={p.rotation} />
        </ProfileSection>

        <ProfileSection
          title="Outfit posts"
          hint="What was worn, what worked"
          action={
            <span className="text-xs text-neutral-500">
              {p.outfitTones.length} posts
            </span>
          }
        >
          <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
            {p.outfitTones.map((o) => (
              <div
                key={o.id}
                className="mb-4 break-inside-avoid rounded-2xl overflow-hidden border border-neutral-100 bg-white"
              >
                <div className={`${o.h} bg-gradient-to-br ${o.tone}`} />
                <div className="p-3">
                  <p className="text-sm">{o.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </ProfileSection>

        <ProfileSection title="Reviews" hint="Honest takes from real miles">
          <div className="grid gap-4 sm:grid-cols-2">
            {p.reviews.map((r) => {
              const shoe = getReviewedShoe(r.shoeId);
              if (!shoe) return null;
              return (
                <Link
                  key={r.shoeId}
                  href={`/shoes/${shoe.id}`}
                  className="rounded-3xl border border-neutral-100 bg-white p-5 hover:shadow-md transition flex gap-4"
                >
                  <div
                    className={`relative shrink-0 h-20 w-20 rounded-2xl bg-gradient-to-br ${shoe.image.tone} overflow-hidden`}
                  >
                    {shoe.image.photoId && (
                      <Image
                        src={unsplash(shoe.image.photoId, { w: 200, h: 200 })}
                        alt={shoe.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] uppercase tracking-widest text-neutral-500">
                      {shoe.brand}
                    </p>
                    <p className="font-semibold tracking-tight truncate">
                      {shoe.name}
                    </p>
                    <div className="mt-1 flex items-center gap-1 text-xs">
                      <Star className="h-3.5 w-3.5 fill-flora-500 text-flora-500" />
                      <span className="font-semibold">
                        {shoe.overall.toFixed(1)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-neutral-700 line-clamp-2">
                      “{r.snippet}”
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </ProfileSection>

        <ProfileSection title="Saved gear" hint="Wishlist + things to try">
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
            {p.saved.map((s) => (
              <div
                key={s.id}
                className="rounded-2xl border border-neutral-100 overflow-hidden bg-white"
              >
                <div className={`h-28 bg-gradient-to-br ${s.tone}`} />
                <div className="p-3">
                  <p className="text-sm font-medium truncate">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </ProfileSection>
      </main>
      <Footer />
    </>
  );
}
