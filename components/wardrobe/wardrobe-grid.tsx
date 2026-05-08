"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { CalendarDays, MapPin, Star, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { raceFilters, wardrobeKits, type RaceCategory } from "@/data/wardrobe";

type FilterId = RaceCategory | "all";

const categoryColor: Record<RaceCategory, string> = {
  "5K": "bg-rose-100 text-rose-700",
  "10K": "bg-orange-100 text-orange-700",
  "Half marathon": "bg-flora-100 text-flora-700",
  "Full marathon": "bg-amber-100 text-amber-700",
  "Ultra": "bg-emerald-100 text-emerald-700",
  "Training": "bg-stone-100 text-stone-700",
  "Speed work": "bg-yellow-100 text-yellow-700",
};

export function WardrobeGrid() {
  const [active, setActive] = useState<FilterId>("all");

  const visible = useMemo(
    () =>
      active === "all"
        ? wardrobeKits
        : wardrobeKits.filter((k) => k.category === active),
    [active],
  );

  return (
    <div>
      {/* Filter chips */}
      <div className="-mx-5 sm:-mx-8 sticky top-16 z-30 bg-white/85 backdrop-blur border-b border-[var(--color-border)]">
        <div className="px-5 sm:px-8 py-3 flex gap-2 overflow-x-auto no-scrollbar">
          {raceFilters.map((f) => {
            const isActive = active === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={cn(
                  "shrink-0 px-4 py-2 rounded-full text-sm font-medium transition border",
                  isActive
                    ? "bg-neutral-950 text-white border-neutral-950"
                    : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400",
                )}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        {visible.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-neutral-200 p-12 text-center">
            <p className="text-sm font-semibold">Nothing logged here yet.</p>
            <p className="text-sm text-neutral-500 mt-1">
              Add your first {active === "all" ? "kit" : active} fit when we launch.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((k, i) => (
              <motion.article
                key={k.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group rounded-3xl border border-neutral-100 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={k.photoSrc}
                    alt={k.raceName}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                  <span
                    className={cn(
                      "absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-full",
                      categoryColor[k.category],
                    )}
                  >
                    {k.category}
                  </span>
                  {k.pr && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest bg-flora-500 text-neutral-950 px-2 py-1 rounded-full">
                      <Trophy className="h-3 w-3" />
                      PR
                    </span>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-lg font-semibold tracking-tight leading-tight drop-shadow">
                      {k.raceName}
                    </p>
                    <div className="mt-1 flex items-center gap-2 text-[11px] text-white/85">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" />
                        {k.date}
                      </span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {k.city}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      {k.finishTime && (
                        <p className="font-semibold tabular-nums tracking-tight">
                          {k.finishTime}
                          <span className="ml-2 text-xs font-normal text-neutral-500">
                            {k.pace}
                          </span>
                        </p>
                      )}
                      {!k.finishTime && k.pace && (
                        <p className="font-semibold tabular-nums tracking-tight">
                          {k.pace}
                        </p>
                      )}
                      <p className="text-xs text-neutral-500">
                        {k.miles} mi · {k.weather}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1 text-xs text-neutral-600">
                      <Star className="h-3.5 w-3.5 fill-flora-500 text-flora-500" />
                      Hero: {k.hero.item.split(" ").slice(0, 2).join(" ")}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-neutral-50 border border-neutral-100 p-3">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
                      What I wore
                    </p>
                    <p className="text-sm text-neutral-800 leading-relaxed">
                      {k.gear.join(" · ")}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-600 italic">
                    “{k.notes}”
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
