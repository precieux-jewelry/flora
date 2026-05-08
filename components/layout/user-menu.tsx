"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { LogOut, User as UserIcon } from "lucide-react";
import { signOut } from "@/app/actions/auth";
import type { CurrentUser } from "@/lib/supabase/auth";

export function UserMenu({ user }: { user: NonNullable<CurrentUser> }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const initial = user.name.charAt(0).toUpperCase();

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-full border border-neutral-200 hover:border-neutral-400 pl-1 pr-3 py-1 transition"
      >
        <span className="h-7 w-7 rounded-full bg-flora-300 flex items-center justify-center text-xs font-semibold">
          {initial}
        </span>
        <span className="text-sm font-medium hidden sm:inline">{user.name.split(" ")[0]}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-neutral-200 shadow-lg overflow-hidden z-50">
          <div className="px-4 py-3 border-b border-neutral-100">
            <p className="text-sm font-semibold truncate">{user.name}</p>
            <p className="text-xs text-neutral-500 truncate">@{user.username}</p>
          </div>
          <Link
            href={`/u/${user.username}`}
            className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-neutral-50"
            onClick={() => setOpen(false)}
          >
            <UserIcon className="h-4 w-4" />
            My profile
          </Link>
          <form action={signOut}>
            <button
              type="submit"
              className="w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-neutral-50 text-rose-600"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
