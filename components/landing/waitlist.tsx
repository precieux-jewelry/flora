"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  }

  return (
    <section id="waitlist" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-[2rem] bg-neutral-950 text-white p-8 sm:p-14"
      >
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-flora-500/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-flora-700/20 blur-3xl" />

        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-flora-300 uppercase">
            Early access
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
            Be one of the first 5,000 runners on Flora.
          </h2>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Join the waitlist for early access, founders’ badges, and a say in
            what we build next.
          </p>

          {done ? (
            <div className="mt-7 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/10 border border-white/15">
              <Check className="h-4 w-4 text-flora-400" />
              <span className="text-sm">You’re on the list. We’ll be in touch.</span>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-7 flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@runfast.com"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-flora-400"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-flora-500 text-neutral-950 font-semibold hover:bg-flora-400 transition"
              >
                Join waitlist
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-neutral-400">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
