// lib/supabase/server.ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Creates a Supabase server client with cookie-based auth.
 * IMPORTANT: Do NOT make this a global/singleton.
 * Always create a fresh client per request.
 */
export async function createClient() {
  // Debug logs – remove in production
  console.log("[Supabase] Creating server client...");
  console.log("[Supabase] URL:", process.env.NEXT_PUBLIC_SUPABASE_URL || "MISSING");
  console.log(
    "[Supabase] ANON_KEY:",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "present (hidden)" : "MISSING"
  );

  const cookieStore = await cookies();

  return createServerClient(
    // ────────────────────────────────────────────────
    // These two env vars MUST be set in .env.local
    // ────────────────────────────────────────────────
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
            console.warn("[Supabase] Cookie setAll warning (safe to ignore):", error);
          }
        },
      },
    }
  );
}