"use client";

import { useState } from "react";
import { Check, Star, ImagePlus } from "lucide-react";
import { cn } from "@/lib/utils";

const ratingFields = [
  { id: "comfort", label: "Comfort" },
  { id: "speed", label: "Speed" },
  { id: "durability", label: "Durability" },
  { id: "stability", label: "Stability" },
  { id: "raceDay", label: "Race-day score" },
] as const;

type RatingId = (typeof ratingFields)[number]["id"];

export function AddReviewForm() {
  const [ratings, setRatings] = useState<Record<RatingId, number>>({
    comfort: 0,
    speed: 0,
    durability: 0,
    stability: 0,
    raceDay: 0,
  });
  const [wouldBuy, setWouldBuy] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-neutral-950 text-white p-10 text-center">
        <div className="mx-auto h-12 w-12 rounded-full bg-flora-500 flex items-center justify-center text-neutral-950">
          <Check className="h-6 w-6" />
        </div>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          Review queued.
        </h2>
        <p className="mt-2 text-neutral-300 text-sm">
          We’ll wire this to Supabase in Phase 6 — for now your review just lives in the void.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Shoe name" placeholder="e.g. Vaporfly 3" />
        <Field label="Brand" placeholder="Nike" />
        <Field label="Colorway" placeholder="Volt / Black" />
        <Field label="Distance used (mi)" type="number" placeholder="120" />
      </div>

      <ImageUpload />

      <fieldset className="rounded-3xl bg-neutral-50 border border-neutral-100 p-6 space-y-5">
        <legend className="px-2 text-sm font-semibold">Ratings</legend>
        {ratingFields.map((f) => (
          <StarPicker
            key={f.id}
            label={f.label}
            value={ratings[f.id]}
            onChange={(v) => setRatings((r) => ({ ...r, [f.id]: v }))}
          />
        ))}
      </fieldset>

      <div className="space-y-2">
        <label className="text-sm font-semibold">Your review</label>
        <textarea
          required
          rows={5}
          placeholder="What did the miles feel like? Where did the shoe shine — and where did it not?"
          className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-flora-400"
        />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-semibold">Would you buy them again?</p>
        <div className="flex gap-3">
          <BuyButton
            label="Yes, I'd buy again"
            active={wouldBuy === true}
            onClick={() => setWouldBuy(true)}
          />
          <BuyButton
            label="No, not for me"
            active={wouldBuy === false}
            onClick={() => setWouldBuy(false)}
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          className="px-5 py-3 rounded-full border border-neutral-200 text-sm font-medium hover:bg-neutral-50"
        >
          Save as draft
        </button>
        <button
          type="submit"
          className="px-6 py-3 rounded-full bg-neutral-950 text-white text-sm font-semibold hover:bg-neutral-800"
        >
          Publish review
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="space-y-2 block">
      <span className="text-sm font-semibold">{label}</span>
      <input
        {...rest}
        className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-flora-400"
      />
    </label>
  );
}

function ImageUpload() {
  return (
    <label className="flex items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-neutral-200 bg-neutral-50/60 hover:bg-neutral-50 transition cursor-pointer h-40 text-sm text-neutral-600">
      <ImagePlus className="h-5 w-5 text-flora-600" />
      <span>
        <span className="font-semibold text-neutral-900">Upload shoe photo</span> · PNG, JPG up to 8MB
      </span>
      <input type="file" accept="image/*" className="hidden" />
    </label>
  );
}

function StarPicker({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm text-neutral-700 truncate">{label}</span>
      <div className="flex items-center gap-0.5 shrink-0">
        {[1, 2, 3, 4, 5].map((n) => {
          const filled = n <= value;
          return (
            <button
              key={n}
              type="button"
              onClick={() => onChange(n)}
              aria-label={`${label} ${n} stars`}
              className="p-1"
            >
              <Star
                className={cn(
                  "h-5 w-5 transition",
                  filled
                    ? "fill-flora-500 text-flora-500"
                    : "text-neutral-300 hover:text-flora-400",
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function BuyButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-5 py-2.5 rounded-full text-sm font-medium border transition",
        active
          ? "bg-neutral-950 text-white border-neutral-950"
          : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400",
      )}
    >
      {label}
    </button>
  );
}
