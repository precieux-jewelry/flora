"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bookmark, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import type { OutfitDetail } from "@/data/outfits";

export function OutfitTile({ o, index = 0 }: { o: OutfitDetail; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="mb-4 break-inside-avoid"
    >
      <Link
        href={`/outfits/${o.id}`}
        className="group block rounded-2xl overflow-hidden border border-neutral-100 bg-white relative"
      >
        <div className={cn("relative bg-gradient-to-br", o.photoTone, o.h)}>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/15" />
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition flex gap-1.5">
            <button
              onClick={(e) => e.preventDefault()}
              className="h-9 w-9 rounded-full bg-white/95 flex items-center justify-center hover:bg-white shadow"
            >
              <Bookmark className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => e.preventDefault()}
              className="h-9 w-9 rounded-full bg-white/95 flex items-center justify-center hover:bg-white shadow"
            >
              <Heart className="h-4 w-4" />
            </button>
          </div>
          <span className="absolute bottom-2 left-2 text-[10px] font-semibold uppercase tracking-widest bg-white/85 backdrop-blur px-2 py-0.5 rounded-full">
            {o.runType.replace("-", " ")}
          </span>
        </div>

        <div className="p-3 flex items-center gap-2">
          <div className={cn("h-7 w-7 rounded-full shrink-0", o.user.tone)} />
          <div className="leading-tight min-w-0 flex-1">
            <p className="text-xs font-semibold truncate">{o.user.name}</p>
            <p className="text-[11px] text-neutral-500 truncate">{o.caption}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
