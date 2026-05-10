"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export type WaitlistResult =
  | { ok: true }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const KIT_FORM_UID = "83f239d218";
const KIT_ENDPOINT = `https://app.kit.com/forms/${KIT_FORM_UID}/subscriptions`;
const GENERIC_ERROR = "Something went wrong. Please try again.";

/**
 * Submits an email to the Kit form (form_uid 83f239d218 — Flora running gear reviews).
 * On the same call, we also try to mirror the email into Supabase's `waitlist`
 * table when the env vars are present, so we keep a database copy alongside Kit.
 *
 * Submitting to Kit fires the user's welcome sequence on Kit's side.
 */
export async function joinWaitlist(
  email: string,
  source: string = "landing",
): Promise<WaitlistResult> {
  const trimmed = email.trim().toLowerCase();
  if (!EMAIL_RE.test(trimmed))
    return { ok: false, error: "Please enter a valid email address." };

  // 1. Push to Kit (the source of truth for the welcome sequence).
  let kitOk = false;
  try {
    const res = await fetch(KIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email_address: trimmed }),
      // Don't cache the form submission.
      cache: "no-store",
    });
    kitOk = res.ok;
    if (!res.ok) {
      console.error("Kit subscribe failed", res.status, await res.text());
    }
  } catch (err) {
    console.error("Kit subscribe error", err);
  }

  // 2. Mirror into Supabase if it's wired up. Failure here doesn't block the
  //    user — Kit already has them.
  if (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    try {
      const supabase = await createSupabaseServerClient();
      await supabase.from("waitlist").insert({ email: trimmed, source });
    } catch (err) {
      console.error("Supabase mirror failed", err);
    }
  }

  if (!kitOk) return { ok: false, error: GENERIC_ERROR };
  return { ok: true };
}
