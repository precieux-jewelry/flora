import type { Badge } from "@/data/profiles";

export function BadgesStrip({ badges }: { badges: Badge[] }) {
  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
      {badges.map((b) => (
        <div
          key={b.id}
          className="shrink-0 w-32 rounded-2xl bg-white border border-neutral-100 p-4 text-center hover:shadow-md transition"
        >
          <div className="mx-auto h-10 w-10 rounded-full bg-flora-100 flex items-center justify-center text-xl">
            {b.emoji}
          </div>
          <p className="mt-2 text-sm font-semibold">{b.label}</p>
          <p className="text-[11px] text-neutral-500 mt-0.5 leading-snug">{b.desc}</p>
        </div>
      ))}
    </div>
  );
}
