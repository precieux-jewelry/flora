"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/app/actions/auth";

export function SignupForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [pending, startTransition] = useTransition();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setError(null);
    startTransition(async () => {
      const res = await signUp(data);
      if (res.ok) {
        setDone(true);
        router.refresh();
      } else {
        setError(res.error);
      }
    });
  }

  if (done) {
    return (
      <div className="rounded-2xl bg-flora-50 border border-flora-200 p-5 text-sm">
        <p className="font-semibold">Account created.</p>
        <p className="mt-1 text-neutral-600">
          Check your email for a confirmation link, then sign in.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Name" name="name" placeholder="Maya Reyes" required />
        <Field label="Username" name="username" placeholder="mayaruns" required />
      </div>
      <Field label="Email" name="email" type="email" placeholder="you@runfast.com" required />
      <Field
        label="Password"
        name="password"
        type="password"
        placeholder="At least 8 characters"
        required
      />
      {error && <p className="text-sm text-rose-600">{error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="w-full px-5 py-3 rounded-full bg-neutral-950 text-white font-semibold disabled:opacity-60 hover:bg-neutral-800 transition"
      >
        {pending ? "Creating…" : "Create account"}
      </button>
    </form>
  );
}

function Field({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium">{label}</span>
      <input
        {...rest}
        className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-flora-400"
      />
    </label>
  );
}
