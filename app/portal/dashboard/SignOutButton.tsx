"use client";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    try {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

      await supabase.auth.signOut();
    } catch (e) {
      console.error("Sign out error:", e);
    } finally {
      // Clear all Supabase session data from localStorage
      if (typeof window !== "undefined") {
        Object.keys(localStorage).forEach(key => {
          if (key.startsWith("sb-") || key.includes("supabase") || key.includes("cbs-auth")) {
            localStorage.removeItem(key);
          }
        });

        // Clear all auth cookies
        document.cookie.split(";").forEach(cookie => {
          const name = cookie.split("=")[0].trim();
          if (name.startsWith("sb-") || name.includes("supabase") || name.includes("cbs-auth")) {
            document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
          }
        });
      }

      router.push("/");
      router.refresh();
    }
  }

  return (
    <button
      onClick={handleSignOut}
      style={{
        background: "transparent",
        border: "1px solid rgba(200,160,80,0.2)",
        color: "var(--silver-dk)",
        padding: "10px 24px",
        borderRadius: "4px",
        fontSize: "13px",
        cursor: "pointer",
        marginTop: "40px",
        transition: "border-color .2s, color .2s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gold)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--cream)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(200,160,80,0.2)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--silver-dk)";
      }}
    >
      Sign out →
    </button>
  );
}