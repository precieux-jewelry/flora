"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export type WaitlistResult =
  | { ok: true }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// `83f239d218` is the JS-embed key. The API endpoint requires the numeric
// form ID (extracted from the rendered form's action attribute).
const KIT_FORM_ID = "9426026";
const KIT_ENDPOINT = `https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`;
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

  // 1. Push to Kit — match the HTML form embed exactly:
  //    POST application/x-www-form-urlencoded with `email_address=...`.
  //    Kit can return HTTP 200 even on failure, so inspect the JSON body's `status`.
  let kitOk = false;
  try {
    const body = new URLSearchParams({ email_address: trimmed });
    const res = await fetch(KIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        // Mirror what a browser would send when submitting the HTML form embed.
        Referer: "https://flora-beta-two.vercel.app/",
        Origin: "https://flora-beta-two.vercel.app",
      },
      body: body.toString(),
      cache: "no-store",
    });
    const text = await res.text();
    let json: { status?: string; errors?: unknown } | null = null;
    try {
      json = JSON.parse(text) as { status?: string; errors?: unknown };
    } catch {
      // Some Kit responses are HTML redirects; treat 2xx as success in that case.
    }
    kitOk = res.ok && (json?.status === "success" || json === null);
    if (!kitOk) {
      console.error(
        "Kit subscribe failed",
        res.status,
        json ?? text.slice(0, 200),
      );
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
