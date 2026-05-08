"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileMenu({
  links,
  signedIn,
}: {
  links: { href: string; label: string }[];
  signedIn: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Toggle menu"
        className="md:hidden p-2 -mr-2"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        className={cn(
          "md:hidden absolute inset-x-0 top-16 overflow-hidden border-t border-[var(--color-border)] bg-white transition-[max-height]",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="px-5 py-4 flex flex-col gap-4 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-neutral-700"
            >
              {l.label}
            </Link>
          ))}
          {!signedIn && (
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="text-center px-4 py-2.5 rounded-full bg-neutral-950 text-white"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
