"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export type WaitlistResult =
  | { ok: true }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(
  email: string,
  source: string = "landing",
): Promise<WaitlistResult> {
  const trimmed = email.trim().toLowerCase();
  if (!EMAIL_RE.test(trimmed)) return { ok: false, error: "Invalid email address." };

  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    // Fall back to a no-op so the form still works in environments without Supabase.
    return { ok: true };
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("waitlist")
    .insert({ email: trimmed, source });

  if (error) {
    if (error.code === "23505") return { ok: true };
    return { ok: false, error: "Could not save your email. Try again." };
  }

  return { ok: true };
}
