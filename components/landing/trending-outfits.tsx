"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { trendingOutfits } from "@/data/landing";

const tones = [
  "from-amber-200 to-amber-50",
  "from-stone-200 to-stone-50",
  "from-rose-100 to-stone-50",
  "from-yellow-200 to-amber-50",
  "from-neutral-200 to-neutral-50",
  "from-orange-100 to-amber-50",
];

export function TrendingOutfits() {
  return (
    <section id="outfits" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-widest text-flora-600 uppercase">
            Trending outfits
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            What runners are wearing this week.
          </h2>
        </div>
        <Link
          href="/outfits"
          className="text-sm font-medium text-neutral-600 hover:text-neutral-950"
        >
          Explore the grid →
        </Link>
      </div>

      <div className="mt-10 columns-2 md:columns-3 gap-4 [column-fill:_balance]">
        {trendingOutfits.map((o, i) => (
          <motion.div
            key={o.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="mb-4 break-inside-avoid rounded-2xl overflow-hidden border border-neutral-100 bg-white"
          >
            <div className={`relative ${o.h} bg-gradient-to-br ${tones[i % tones.length]} overflow-hidden`}>
              <Image
                src={o.photoSrc}
                alt={o.caption}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <p className="text-sm font-medium">{o.who}</p>
              <p className="text-xs text-neutral-500">{o.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
