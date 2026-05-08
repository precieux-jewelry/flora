import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RotationShoe } from "@/data/profiles";
import { getShoe } from "@/data/shoes";

const statusColor: Record<RotationShoe["status"], string> = {
  Active: "bg-emerald-100 text-emerald-700",
  "Race only": "bg-flora-100 text-flora-700",
  Retired: "bg-neutral-200 text-neutral-600",
  Recovery: "bg-rose-100 text-rose-700",
};

export function RotationGrid({ rotation }: { rotation: RotationShoe[] }) {
  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      {rotation.map((s) => {
        const wear = Math.min(100, (s.miles / 500) * 100);
        const shoe = getShoe(s.id);
        return (
          <Link
            key={s.id}
            href={`/shoes/${s.id}`}
            className="group rounded-3xl border border-neutral-100 bg-white overflow-hidden hover:shadow-lg transition"
          >
            <div className={`relative h-32 bg-gradient-to-br ${s.tone} overflow-hidden`}>
              {shoe?.image.src && (
                <Image
                  src={shoe.image.src}
                  alt={`${s.brand} ${s.name}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              )}
              <span className={cn("absolute top-3 left-3 z-10 text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-full", statusColor[s.status])}>
                {s.status}
              </span>
            </div>
            <div className="p-4">
              <p className="text-[11px] text-neutral-500 uppercase tracking-widest">
                {s.brand}
              </p>
              <p className="font-semibold tracking-tight">{s.name}</p>

              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="font-semibold">{s.miles} mi</span>
                <span className="inline-flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-flora-500 text-flora-500" />
                  {s.rating}
                </span>
              </div>
              <div className="mt-2 h-1 rounded-full bg-neutral-100 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-flora-400 to-flora-600"
                  style={{ width: `${wear}%` }}
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
