import { createSupabaseServerClient } from "./server";

export type CurrentUser = {
  id: string;
  email: string;
  username: string;
  name: string;
} | null;

export async function getCurrentUser(): Promise<CurrentUser> {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return null;
  }

  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return null;

    const { data: profile } = await supabase
      .from("profiles")
      .select("username, name")
      .eq("id", user.id)
      .maybeSingle();

    return {
      id: user.id,
      email: user.email ?? "",
      username: profile?.username ?? user.email?.split("@")[0] ?? "runner",
      name: profile?.name ?? user.email?.split("@")[0] ?? "Runner",
    };
  } catch {
    return null;
  }
}
