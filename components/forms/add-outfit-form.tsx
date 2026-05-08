"use client";

import { useState } from "react";
import { Check, ImagePlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { filters } from "@/data/feed";

const fields: { id: string; label: string; placeholder: string; required?: boolean }[] = [
  { id: "shoes", label: "Shoes", placeholder: "Nike Vaporfly 3", required: true },
  { id: "top", label: "Top / sports bra", placeholder: "Tracksmith Harrier Mesh", required: true },
  { id: "shorts", label: "Shorts / tights", placeholder: "Bandit Stride 5\"" },
  { id: "jacket", label: "Jacket", placeholder: "Nike Windrunner" },
  { id: "socks", label: "Socks", placeholder: "Balega Hidden Comfort" },
  { id: "accessories", label: "Accessories", placeholder: "Watch, sunglasses, hat" },
  { id: "fuel", label: "Fuel / gels", placeholder: "Maurten Gel 100 ×2" },
  { id: "weather", label: "Weather", placeholder: "62°F · clear" },
];

const runTypeChoices = filters.filter((f) => f.id !== "all");

export function AddOutfitForm() {
  const [runType, setRunType] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-3xl bg-neutral-950 text-white p-10 text-center">
        <div className="mx-auto h-12 w-12 rounded-full bg-flora-500 flex items-center justify-center text-neutral-950">
          <Check className="h-6 w-6" />
        </div>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          Outfit posted.
        </h2>
        <p className="mt-2 text-neutral-300 text-sm">
          We’ll wire posting to Supabase in Phase 6 — for now your fit lives in the void.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-8"
    >
      <PhotoUpload />

      <label className="space-y-2 block">
        <span className="text-sm font-semibold">Caption</span>
        <textarea
          required
          rows={3}
          placeholder="What was the run? What did this kit do for you?"
          className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-flora-400"
        />
      </label>

      <div className="space-y-2">
        <p className="text-sm font-semibold">Run type</p>
        <div className="flex flex-wrap gap-2">
          {runTypeChoices.map((f) => (
            <button
              type="button"
              key={f.id}
              onClick={() => setRunType(f.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium border transition",
                runType === f.id
                  ? "bg-neutral-950 text-white border-neutral-950"
                  : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <fieldset className="rounded-3xl bg-neutral-50 border border-neutral-100 p-6 grid sm:grid-cols-2 gap-4">
        <legend className="px-2 text-sm font-semibold">Gear</legend>
        {fields.map((f) => (
          <label key={f.id} className="space-y-2 block">
            <span className="text-sm text-neutral-700">
              {f.label}
              {f.required && <span className="text-flora-600"> *</span>}
            </span>
            <input
              required={f.required}
              placeholder={f.placeholder}
              className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-flora-400"
            />
          </label>
        ))}
      </fieldset>

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
          Post outfit
        </button>
      </div>
    </form>
  );
}

function PhotoUpload() {
  return (
    <label className="flex items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-neutral-200 bg-neutral-50/60 hover:bg-neutral-50 transition cursor-pointer h-56 text-sm text-neutral-600">
      <ImagePlus className="h-5 w-5 text-flora-600" />
      <span>
        <span className="font-semibold text-neutral-900">Upload outfit photo</span>{" "}
        · PNG, JPG up to 8MB
      </span>
      <input type="file" accept="image/*" className="hidden" />
    </label>
  );
}
