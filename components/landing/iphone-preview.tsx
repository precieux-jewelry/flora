"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Bookmark } from "lucide-react";
import { unsplash } from "@/lib/img";

export function IPhonePreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-flora-200/60 to-transparent blur-2xl" />

      <div className="relative w-[290px] h-[600px] rounded-[3rem] bg-neutral-950 p-3 shadow-2xl shadow-amber-900/20">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-28 rounded-full bg-neutral-950 z-10" />

        <div className="relative h-full w-full rounded-[2.4rem] bg-white overflow-hidden">
          <div className="px-5 pt-7 pb-3 flex items-center justify-between border-b border-neutral-100">
            <span className="text-xs font-semibold tracking-widest">FLORA</span>
            <span className="h-2 w-2 rounded-full bg-flora-500" />
          </div>

          <div className="px-4 pt-4 space-y-3 overflow-hidden">
            <FeedCard
              who="Maya"
              run="Long run · 14 mi"
              shoe="Nike Vaporfly 3"
              tone="from-amber-100 to-amber-50"
              avatarId="1494790108377-be9c29b29330"
              photoSrc="/images/iphone-pink-bed.jpg"
              delay={0}
            />
            <FeedCard
              who="Jordan"
              run="Race day · Boston"
              shoe="Adidas Adios Pro 4"
              tone="from-yellow-100 to-yellow-50"
              avatarId="1500648767791-00dcc994a43e"
              photoSrc="/images/scanner-boston-flatlay.jpg"
              delay={0.15}
            />
            <FeedCard
              who="Sasha"
              run="Tempo · 6 mi"
              shoe="Hoka Mach X"
              tone="from-stone-100 to-stone-50"
              avatarId="1438761681033-6461ffad8d80"
              photoSrc="/images/trending-lets-go-running.jpg"
              delay={0.3}
            />
          </div>

          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>
    </div>
  );
}

function FeedCard({
  who,
  run,
  shoe,
  tone,
  avatarId,
  photoSrc,
  delay,
}: {
  who: string;
  run: string;
  shoe: string;
  tone: string;
  avatarId: string;
  photoSrc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 + delay }}
      className="rounded-2xl border border-neutral-100 bg-white overflow-hidden"
    >
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="relative h-7 w-7 rounded-full bg-neutral-200 overflow-hidden">
          <Image src={unsplash(avatarId, { w: 56, h: 56 })} alt={who} fill sizes="28px" className="object-cover" />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold">{who}</p>
          <p className="text-[10px] text-neutral-500">{run}</p>
        </div>
      </div>
      <div className={`relative h-28 bg-gradient-to-br ${tone} overflow-hidden`}>
        <Image src={photoSrc} alt={shoe} fill sizes="280px" className="object-cover" />
      </div>
      <div className="px-3 py-2">
        <p className="text-[11px] font-medium">{shoe}</p>
        <div className="mt-1.5 flex items-center gap-3 text-neutral-500">
          <Heart className="h-3.5 w-3.5" />
          <MessageCircle className="h-3.5 w-3.5" />
          <Bookmark className="h-3.5 w-3.5 ml-auto" />
        </div>
      </div>
    </motion.div>
  );
}
