"use client";

import { motion } from "framer-motion";
import { howItWorks } from "@/data/landing";

export function HowItWorks() {
  return (
    <section id="how" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-widest text-flora-600 uppercase">
          How it works
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
          Your running rotation, but social.
        </h2>
        <p className="mt-3 text-neutral-600">
          Three simple steps to find shoes that actually run well, kits that
          actually work, and a community that actually shows up.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {howItWorks.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-3xl bg-neutral-50 p-7 border border-neutral-100"
          >
            <span className="text-flora-600 font-semibold">{s.n}</span>
            <h3 className="mt-4 text-xl font-semibold tracking-tight">
              {s.title}
            </h3>
            <p className="mt-2 text-neutral-600 text-sm leading-relaxed">
              {s.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
