"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useTransition } from "react";
import { ArrowRight, Check, Sparkles, X } from "lucide-react";
import Image from "next/image";

const STORAGE_KEY = "flora_newsletter_dismissed";
const DELAY_MS = 5_000;

// Kit form 9426026 (embed UID 83f239d218 — Flora Running Gear Reviews).
// Submits directly from the browser, exactly like Kit's HTML form embed.
const KIT_ENDPOINT = "https://app.kit.com/forms/9426026/subscriptions";
const ERROR_MESSAGE = "Something went wrong. Please try again.";

// Mirror every Kit signup into Supabase (project: jewelry-marketplace-research,
// table: public.flora_waitlist). Public anon insert is allowed via RLS policy.
async function mirrorToSupabase(email: string, source: string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return;
  try {
    await fetch(`${url}/rest/v1/flora_waitlist`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, source }),
    });
  } catch (err) {
    // Don't block the user — Kit already has them.
    console.warn("Supabase mirror failed", err);
  }
}

export function NewsletterModal() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const t = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setOpen(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    if (!email) return;
    setError(null);

    startTransition(async () => {
      try {
        const body = new URLSearchParams({ email_address: email });
        const res = await fetch(KIT_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
          body: body.toString(),
        });

        let json: { status?: string } | null = null;
        try {
          json = (await res.json()) as { status?: string };
        } catch {
          // Some success responses are empty; trust the HTTP status code.
        }

        if (res.ok && (json?.status === "success" || json === null)) {
          // Fire-and-forget mirror to Supabase so we keep a database copy.
          void mirrorToSupabase(email, "newsletter");

          setDone(true);
          if (typeof window !== "undefined") {
            sessionStorage.setItem(STORAGE_KEY, "1");
          }
          setTimeout(() => setOpen(false), 2200);
        } else {
          console.error("Kit subscribe failed", res.status, json);
          setError(ERROR_MESSAGE);
        }
      } catch (err) {
        console.error("Kit subscribe error", err);
        setError(ERROR_MESSAGE);
      }
    });
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
          aria-modal="true"
          role="dialog"
          aria-labelledby="newsletter-title"
        >
          <button
            aria-label="Close newsletter"
            onClick={dismiss}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md rounded-[2rem] bg-white shadow-2xl overflow-hidden"
          >
            <button
              aria-label="Close"
              onClick={dismiss}
              className="absolute top-4 right-4 z-20 h-8 w-8 rounded-full bg-white/90 hover:bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-neutral-950 transition"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-32 bg-flora-500 overflow-hidden">
              <Image
                src="/images/run-sunset.jpg"
                alt=""
                fill
                sizes="(max-width: 480px) 100vw, 448px"
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-flora-400/10 to-flora-700/40" />
              <div className="absolute bottom-3 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">
                <Sparkles className="h-3 w-3 text-flora-600" />
                Flora Kits
              </div>
            </div>

            <div className="px-6 sm:px-8 pt-6 pb-7">
              <h2
                id="newsletter-title"
                className="text-2xl sm:text-[1.65rem] font-semibold tracking-tight leading-tight"
              >
                Win a free pair of
                <br />
                running shoes.
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Join the Flora running fit check community —{" "}
                <span className="font-semibold text-neutral-950">
                  $300+ worth of value
                </span>
                , your pick.
              </p>

              {done ? (
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-flora-100 px-4 py-2.5 text-sm">
                  <Check className="h-4 w-4 text-flora-700" />
                  <span className="font-medium text-flora-800">
                    You’re in — check your inbox.
                  </span>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-5 space-y-3">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@runfast.com"
                    className="w-full rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-flora-400"
                  />
                  <button
                    type="submit"
                    disabled={pending}
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800 disabled:opacity-60 transition"
                  >
                    {pending ? "Joining…" : "Join the community"}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  {error && (
                    <p className="text-xs text-rose-600" role="alert">
                      {error}
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
