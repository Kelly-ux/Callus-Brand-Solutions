import { createServerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name) => cookieStore.get(name)?.value,
        set: () => {},
        remove: () => {},
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/");

  return (
    <div style={{ minHeight:"100vh", background:"var(--ink)", padding:"120px 40px 80px", fontFamily:"var(--ff-body)" }}>
      <div style={{ maxWidth:"1200px", margin:"0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom:"48px" }}>
          <div style={{ fontSize:"11px", letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--gold)", marginBottom:"8px" }}>
            Client Portal
          </div>
          <h1 style={{ fontFamily:"var(--ff-display)", fontSize:"clamp(32px,4vw,54px)", color:"var(--cream)", marginBottom:"8px" }}>
            Welcome back
          </h1>
          <p style={{ color:"var(--silver-dk)", fontSize:"15px" }}>{user.email}</p>
        </div>

        {/* Metrics */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px,1fr))", gap:"20px", marginBottom:"48px" }}>
          {[
            { label:"Monthly Reach", value:"48,200", change:"+12%", icon:"📈" },
            { label:"Followers Gained", value:"1,840", change:"+8%", icon:"👥" },
            { label:"Ad Spend", value:"GHS 3,200", change:"On budget", icon:"🎯" },
            { label:"Leads Generated", value:"94", change:"+22%", icon:"⚡" },
          ].map(m => (
            <div key={m.label} style={{ border:"1px solid rgba(200,160,80,0.15)", borderRadius:"12px", padding:"24px", background:"rgba(255,255,255,0.02)" }}>
              <div style={{ fontSize:"24px", marginBottom:"12px" }}>{m.icon}</div>
              <div style={{ fontFamily:"var(--ff-display)", fontSize:"32px", fontWeight:700, color:"var(--silver-lt)", lineHeight:1, marginBottom:"4px" }}>{m.value}</div>
              <div style={{ fontSize:"12px", color:"var(--silver-dk)", marginBottom:"4px" }}>{m.label}</div>
              <div style={{ fontSize:"11px", color:"var(--gold)" }}>{m.change}</div>
            </div>
          ))}
        </div>

        {/* Reports */}
        <div style={{ border:"1px solid rgba(200,160,80,0.15)", borderRadius:"12px", padding:"32px", background:"rgba(255,255,255,0.02)", marginBottom:"24px" }}>
          <div style={{ fontSize:"11px", letterSpacing:"0.16em", textTransform:"uppercase", color:"var(--gold)", marginBottom:"20px" }}>
            Recent Reports
          </div>
          {[
            "May 2025 — Monthly Performance Report",
            "April 2025 — Monthly Performance Report",
            "Q1 2025 — Quarterly Review",
          ].map(r => (
            <div key={r} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"16px 0", borderBottom:"1px solid rgba(200,160,80,0.08)", fontSize:"14px", color:"var(--silver)" }}>
              <span>{r}</span>
              <span style={{ fontSize:"12px", color:"var(--gold)", cursor:"pointer" }}>Download →</span>
            </div>
          ))}
        </div>

        {/* Sign out */}
        <form action="/api/auth/signout" method="POST">
          <button type="submit" style={{ background:"transparent", border:"1px solid rgba(200,160,80,0.2)", color:"var(--silver-dk)", padding:"10px 24px", borderRadius:"4px", fontSize:"13px", cursor:"pointer" }}>
            Sign out
          </button>
        </form>

      </div>
    </div>
  );
}