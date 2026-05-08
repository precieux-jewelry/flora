"use client";

import { motion } from "framer-motion";
import { Bookmark, Heart, MessageCircle, MoreHorizontal, Share2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { FeedPost } from "@/data/feed";

export function FeedCard({ post, index = 0 }: { post: FeedPost; index?: number }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const likeCount = post.likes + (liked ? 1 : 0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="rounded-3xl bg-white border border-neutral-100 overflow-hidden hover:shadow-lg transition-shadow"
    >
      <header className="flex items-center gap-3 px-5 py-4">
        <div className={cn("h-10 w-10 rounded-full ring-2 ring-white shadow", post.user.avatarTone)} />
        <div className="leading-tight flex-1 min-w-0">
          <p className="text-sm font-semibold truncate">{post.user.name}</p>
          <p className="text-xs text-neutral-500 truncate">
            @{post.user.username} · {post.postedAgo}
          </p>
        </div>
        <button className="p-2 -mr-2 text-neutral-400 hover:text-neutral-700">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </header>

      <div className="px-5 pb-3 flex items-center gap-2 flex-wrap">
        <span className="text-[10px] font-semibold uppercase tracking-widest bg-flora-100 text-flora-700 px-2.5 py-1 rounded-full">
          {post.runLabel}
        </span>
        <span className="text-xs text-neutral-600">
          <span className="font-semibold text-neutral-950">{post.distance}</span> · {post.pace}
        </span>
        <span className="ml-auto text-xs text-neutral-500">
          <span className="font-medium text-neutral-700">{post.shoe.brand}</span>{" "}
          {post.shoe.name}
        </span>
      </div>

      <div className={cn("relative bg-gradient-to-br", post.photoTone, post.photoH)}>
        <span className="absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-widest bg-white/80 backdrop-blur px-2 py-1 rounded-full">
          Outfit
        </span>
      </div>

      <div className="px-5 py-4 space-y-3">
        <p className="text-sm text-neutral-800 leading-relaxed">{post.caption}</p>

        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-full"
            >
              #{t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 pt-1 text-neutral-600">
          <button
            onClick={() => setLiked((v) => !v)}
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-neutral-100 transition",
              liked && "text-flora-700",
            )}
          >
            <Heart className={cn("h-4 w-4", liked && "fill-flora-500 text-flora-500")} />
            <span className="text-sm">{likeCount.toLocaleString()}</span>
          </button>
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-neutral-100 transition">
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm">{post.comments}</span>
          </button>
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-neutral-100 transition">
            <Share2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => setSaved((v) => !v)}
            className={cn(
              "ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-neutral-100 transition",
              saved && "text-flora-700",
            )}
            aria-label="Save post"
          >
            <Bookmark className={cn("h-4 w-4", saved && "fill-flora-500 text-flora-500")} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
