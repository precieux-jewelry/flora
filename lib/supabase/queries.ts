// Example queries — copy-paste into a route handler, server action, or RSC.
// All of these run with the user's session via the SSR client.
// `service_role` is required only for admin reads (e.g. waitlist export).

import { createSupabaseServerClient } from "./server";
import { createSupabaseBrowserClient } from "./client";

export async function getProfileByUsername(username: string) {
  const supabase = await createSupabaseServerClient();
  return supabase
    .from("profiles")
    .select("*")
    .eq("username", username)
    .single();
}

export async function getFeed(runType?: string) {
  const supabase = await createSupabaseServerClient();
  let q = supabase
    .from("outfit_posts")
    .select("*, profiles!inner(username, name, avatar_url)")
    .order("created_at", { ascending: false })
    .limit(40);
  if (runType && runType !== "all") q = q.eq("run_type", runType);
  return q;
}

export async function getShoeReviews() {
  const supabase = await createSupabaseServerClient();
  return supabase
    .from("shoe_reviews")
    .select("*, profiles!inner(username, name, avatar_url)")
    .order("created_at", { ascending: false })
    .limit(40);
}

// Browser-side toggle helpers — call these from `'use client'` components.
export async function toggleLike(
  postKind: "shoe_review" | "outfit_post",
  postId: string,
) {
  const supabase = createSupabaseBrowserClient();
  const { data: existing } = await supabase
    .from("likes")
    .select("user_id")
    .eq("post_kind", postKind)
    .eq("post_id", postId)
    .maybeSingle();

  if (existing) {
    return supabase
      .from("likes")
      .delete()
      .eq("post_kind", postKind)
      .eq("post_id", postId);
  }
  return supabase.from("likes").insert({ post_kind: postKind, post_id: postId });
}

export async function toggleSave(
  postKind: "shoe_review" | "outfit_post",
  postId: string,
) {
  const supabase = createSupabaseBrowserClient();
  const { data: existing } = await supabase
    .from("saved_posts")
    .select("user_id")
    .eq("post_kind", postKind)
    .eq("post_id", postId)
    .maybeSingle();

  if (existing) {
    return supabase
      .from("saved_posts")
      .delete()
      .eq("post_kind", postKind)
      .eq("post_id", postId);
  }
  return supabase
    .from("saved_posts")
    .insert({ post_kind: postKind, post_id: postId });
}
