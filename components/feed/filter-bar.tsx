"use client";

import { cn } from "@/lib/utils";
import { filters } from "@/data/feed";
import type { RunType } from "@/types";

type FilterId = RunType | "all";

export function FilterBar({
  active,
  onChange,
}: {
  active: FilterId;
  onChange: (id: FilterId) => void;
}) {
  return (
    <div className="sticky top-16 z-30 -mx-5 sm:-mx-8 bg-white/85 backdrop-blur border-b border-[var(--color-border)]">
      <div className="px-5 sm:px-8 py-3 flex gap-2 overflow-x-auto no-scrollbar">
        {filters.map((f) => {
          const isActive = active === f.id;
          return (
            <button
              key={f.id}
              onClick={() => onChange(f.id)}
              className={cn(
                "shrink-0 px-4 py-2 rounded-full text-sm font-medium transition border",
                isActive
                  ? "bg-neutral-950 text-white border-neutral-950"
                  : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400",
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
