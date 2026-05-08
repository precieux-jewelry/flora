"use client";

import { useMemo, useState } from "react";
import { feedPosts } from "@/data/feed";
import { FeedCard } from "./feed-card";
import { FilterBar } from "./filter-bar";
import type { RunType } from "@/types";

type FilterId = RunType | "all";

export function ExploreFeed() {
  const [active, setActive] = useState<FilterId>("all");

  const visible = useMemo(
    () => (active === "all" ? feedPosts : feedPosts.filter((p) => p.runType === active)),
    [active],
  );

  return (
    <div>
      <FilterBar active={active} onChange={setActive} />

      <div className="mt-6">
        {visible.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-neutral-200 p-12 text-center">
            <p className="text-sm font-semibold">No posts in this filter yet.</p>
            <p className="text-sm text-neutral-500 mt-1">
              Be the first to share a {filterLabel(active)} run.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <FeedCard key={p.id} post={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function filterLabel(id: FilterId) {
  if (id === "all") return "";
  return id.replace("-", " ");
}
