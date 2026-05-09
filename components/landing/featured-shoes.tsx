"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { featuredShoes } from "@/data/landing";

export function FeaturedShoes() {
  return (
    <section id="shoes" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-widest text-flora-600 uppercase">
            Featured reviews
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Shoes runners are obsessed with.
          </h2>
        </div>
        <Link
          href="/shoes"
          className="text-sm font-medium text-neutral-600 hover:text-neutral-950"
        >
          See all reviews →
        </Link>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredShoes.map((s, i) => (
          <motion.article
            key={s.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative rounded-3xl border border-neutral-100 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <Link href={`/shoes/${s.id}`} className="block">
            <div className={`relative h-48 bg-gradient-to-br ${s.bg} overflow-hidden`}>
              <Image
                src={s.photoSrc}
                alt={`${s.brand} ${s.name}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform"
              />
              <span className="absolute top-3 left-3 z-10 text-[10px] font-semibold uppercase tracking-widest bg-white/85 backdrop-blur px-2 py-1 rounded-full">
                {s.tag}
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs text-neutral-500 uppercase tracking-widest">
                {s.brand}
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight">
                {s.name}
              </h3>
              <p className="text-sm text-neutral-500">{s.color}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-flora-500 text-flora-500" />
                  <span className="font-semibold">{s.rating}</span>
                  <span className="text-neutral-500">({s.reviews})</span>
                </div>
                <span className="text-xs font-medium text-flora-700 group-hover:underline">
                  View →
                </span>
              </div>
            </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
