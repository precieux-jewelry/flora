"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { ShoeReviewItem } from "@/data/shoes";

export function ShoeCard({ shoe, index = 0 }: { shoe: ShoeReviewItem; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <Link
        href={`/shoes/${shoe.id}`}
        className="group block rounded-3xl border border-neutral-100 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all"
      >
        <div className={`relative h-52 bg-gradient-to-br ${shoe.image.tone}`}>
          <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-widest bg-white/85 backdrop-blur px-2 py-1 rounded-full">
            {shoe.category}
          </span>
          <span className="absolute top-3 right-3 text-xs font-semibold bg-neutral-950 text-white px-2.5 py-1 rounded-full">
            ${shoe.price}
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-black tracking-tighter text-neutral-900/10 group-hover:scale-105 transition-transform">
              {shoe.image.mark}
            </span>
          </div>
        </div>

        <div className="p-5">
          <p className="text-[11px] text-neutral-500 uppercase tracking-widest">
            {shoe.brand}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight">{shoe.name}</h3>
          <p className="text-sm text-neutral-500">{shoe.colorway}</p>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 fill-flora-500 text-flora-500" />
              <span className="font-semibold">{shoe.overall.toFixed(1)}</span>
              <span className="text-neutral-500">({shoe.reviews.toLocaleString()})</span>
            </div>
            <span className="text-xs font-medium text-flora-700 group-hover:underline">
              Read review →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
