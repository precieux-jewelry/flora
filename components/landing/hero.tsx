"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { IPhonePreview } from "./iphone-preview";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--color-flora-100),_transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-flora-100 text-flora-700 px-3 py-1 text-xs font-medium"
          >
            <Star className="h-3 w-3 fill-flora-500 text-flora-500" />
            Built by runners. For runners.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]"
          >
            The social app where runners share{" "}
            <span className="bg-gradient-to-r from-flora-500 to-flora-700 bg-clip-text text-transparent">
              shoes, outfits, reviews,
            </span>{" "}
            and race day fuel.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-lg text-neutral-600 max-w-xl"
          >
            Discover what runners actually wear, train, and race in — from the
            best running shoes for you to marathon-day outfits and everyday gear.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8"
          >
            <a
              href="/shoes"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-950 text-white font-medium hover:bg-neutral-800 transition"
            >
              Explore reviews and join the movement
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex items-center gap-4 text-sm text-neutral-500"
          >
            <div className="flex -space-x-2">
              {["#fbbf24", "#fde68a", "#f59e0b", "#d97706"].map((c) => (
                <span
                  key={c}
                  style={{ background: c }}
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                />
              ))}
            </div>
            <span>2,400+ runners on the waitlist</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <IPhonePreview />
        </motion.div>
      </div>
    </section>
  );
}
