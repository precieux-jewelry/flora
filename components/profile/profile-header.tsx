"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import type { ProfileFull } from "@/data/profiles";
import { cn } from "@/lib/utils";
import { unsplash } from "@/lib/img";

export function ProfileHeader({ p }: { p: ProfileFull }) {
  return (
    <section>
      <div className={`relative h-44 sm:h-56 rounded-3xl bg-gradient-to-br ${p.coverTone} overflow-hidden`}>
        {p.coverId && (
          <Image
            src={unsplash(p.coverId, { w: 1600, h: 600 })}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <div className="-mt-12 sm:-mt-16 px-2 sm:px-4 flex flex-col sm:flex-row sm:items-end gap-5">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={cn(
            "relative h-24 w-24 sm:h-32 sm:w-32 rounded-full ring-4 ring-white shadow-xl overflow-hidden",
            p.avatarTone,
          )}
        >
          {p.avatarId && (
            <Image
              src={unsplash(p.avatarId, { w: 256, h: 256 })}
              alt={p.name}
              fill
              sizes="128px"
              priority
              className="object-cover"
            />
          )}
        </motion.div>

        <div className="flex-1 sm:pb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">{p.name}</h1>
            {p.pronouns && (
              <span className="text-xs text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">
                {p.pronouns}
              </span>
            )}
            <span className="inline-flex items-center gap-1 text-xs font-semibold bg-flora-100 text-flora-700 px-2.5 py-1 rounded-full">
              <Sparkles className="h-3 w-3" />
              {p.level}
            </span>
          </div>
          <p className="text-sm text-neutral-500">@{p.username}</p>
          <p className="mt-2 text-sm text-neutral-700 max-w-xl">{p.bio}</p>
          <p className="mt-2 inline-flex items-center gap-1 text-xs text-neutral-500">
            <MapPin className="h-3.5 w-3.5" />
            {p.location}
          </p>
        </div>

        <div className="flex w-full sm:w-auto sm:pb-3 gap-2">
          <button className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-neutral-950 text-white text-sm font-semibold hover:bg-neutral-800 transition">
            Follow
          </button>
          <button className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-white border border-neutral-200 text-sm font-medium hover:bg-neutral-50 transition">
            Message
          </button>
        </div>
      </div>

      <dl className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <Stat label="Weekly mi" value={p.weeklyMileage.toString()} accent />
        <Stat label="Total mi" value={p.totalMiles.toLocaleString()} />
        <Stat label="Races" value={p.racesCompleted.toString()} />
        <Stat label="Favorite" value={p.favoriteDistance} />
        <Stat label="Go-to shoe" value={p.favoriteShoe} small />
      </dl>
    </section>
  );
}

function Stat({
  label,
  value,
  accent,
  small,
}: {
  label: string;
  value: string;
  accent?: boolean;
  small?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl p-4 border",
        accent
          ? "bg-flora-100/60 border-flora-200"
          : "bg-neutral-50 border-neutral-100",
      )}
    >
      <dt className="text-[10px] uppercase tracking-widest text-neutral-500">
        {label}
      </dt>
      <dd
        className={cn(
          "mt-1 font-semibold tracking-tight",
          small ? "text-base" : "text-xl",
        )}
      >
        {value}
      </dd>
    </div>
  );
}
