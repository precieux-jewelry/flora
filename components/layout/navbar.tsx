"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/explore", label: "Explore" },
  { href: "/#how", label: "How it works" },
  { href: "/shoes", label: "Shoe reviews" },
  { href: "/#outfits", label: "Outfits" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/75 border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block h-6 w-6 rounded-full bg-flora-500" />
          <span>flora</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-neutral-950 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#waitlist"
            className="text-sm font-medium px-4 py-2 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 transition"
          >
            Join waitlist
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-[var(--color-border)] transition-[max-height]",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="px-5 py-4 flex flex-col gap-4 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-neutral-700">
              {l.label}
            </a>
          ))}
          <Link
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="text-center px-4 py-2.5 rounded-full bg-neutral-950 text-white"
          >
            Join waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
