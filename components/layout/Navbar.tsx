
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [portalEmail, setPortalEmail] = useState("");
  const [portalPassword, setPortalPassword] = useState("");
  const [portalLoading, setPortalLoading] = useState(false);
  const [portalError, setPortalError] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Custom cursor
    const cursor = document.getElementById("cbs-cursor");
    const ring = document.getElementById("cbs-cursor-ring");
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener("mousemove", onMove);
    let raf: number;
    const animate = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      if (cursor) cursor.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      if (ring) ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

async function handlePortalLogin(e: React.FormEvent) {
  e.preventDefault();
  setPortalLoading(true);
  setPortalError("");

  try {
    const { createClient } = await import("@supabase/supabase-js");

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: false,
        },
      }
    );

    const { data, error } = await supabase.auth.signInWithPassword({
      email: portalEmail,
      password: portalPassword,
    });

    if (error) {
      setPortalError(error.message);
      setPortalLoading(false);
      return;
    }

    if (data.session) {
      // Store session in localStorage for persistence
      if (typeof window !== "undefined") {
        const sessionKey = `sb-${process.env.NEXT_PUBLIC_SUPABASE_URL!.split("//")[1].split(".")[0]}-auth-token`;
        localStorage.setItem(sessionKey, JSON.stringify({
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token,
          expires_at: data.session.expires_at,
          expires_in: data.session.expires_in,
          token_type: data.session.token_type,
          user: data.session.user,
        }));

        // Set cookie for server-side auth check
        const maxAge = 60 * 60 * 24 * 7;
        const cookieName = `sb-${process.env.NEXT_PUBLIC_SUPABASE_URL!.split("//")[1].split(".")[0]}-auth-token`;
        document.cookie = `${cookieName}=${encodeURIComponent(JSON.stringify(data.session))}; path=/; max-age=${maxAge}; SameSite=Lax`;
      }

      setPortalOpen(false);
      setPortalEmail("");
      setPortalPassword("");
      setPortalLoading(false);

      setTimeout(() => {
        window.location.href = "/portal/dashboard";
      }, 200);
    }
  } catch (err: any) {
    console.error("Login error:", err);
    setPortalError(err?.message || "Something went wrong. Please try again.");
    setPortalLoading(false);
  }

}
  const navLinks = ["About", "Services", "Portfolio", "Pricing", "Blog", "Contact"];

  return (
    <>
      <div id="cbs-cursor" aria-hidden="true" />
      <div id="cbs-cursor-ring" aria-hidden="true" />

      <nav className={`cbs-nav${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <Link href="/" className="nav-logo" aria-label="Callus Brand Solutions home">
          <div className="nav-logo-mark" aria-hidden="true">CBS</div>
          <div className="nav-name">
            <span className="nav-name-main">Callus</span>
            <span className="nav-name-sub">Brand Solutions</span>
          </div>
        </Link>

        <ul className="nav-links" role="list">
          {navLinks.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <a
    href="https://calendly.com/henry-erliecherry/free-brand-audit"
    target="_blank"
    rel="noopener noreferrer"
    className="nav-cta"
    style={{ textDecoration: "none" }}
  >
    Book a Call
  </a>
  <button
    className="nav-cta"
    onClick={() => setPortalOpen(true)}
    style={{ borderColor: "rgba(200,160,80,0.2)", color: "var(--silver-dk)" }}
  >
    Client Portal
  </button>
</div>
        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span style={{ transform: menuOpen ? "rotate(45deg) translateY(6px)" : undefined }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : undefined }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 40, paddingTop: "72px", background: "rgba(20,14,9,0.97)", backdropFilter: "blur(16px)" }}>
          <ul style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "32px", height: "100%", listStyle: "none", paddingBottom: "80px" }}>
            {navLinks.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: "var(--ff-display)", fontSize: "36px", fontWeight: 600, color: "var(--cream)" }}>
                  {item}
                </a>
              </li>
            ))}
            <li>
              <button className="btn-primary" onClick={() => { setMenuOpen(false); setPortalOpen(true); }}>
                Client Portal
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Portal Modal */}
      {portalOpen && (
  <div className="portal-overlay" onClick={(e) => e.target === e.currentTarget && setPortalOpen(false)}>
    <div className="portal-box">
      <button className="portal-close" onClick={() => setPortalOpen(false)} aria-label="Close portal">×</button>
      <div className="nav-logo-mark" style={{ marginBottom: "28px" }} aria-hidden="true">CBS</div>
      <div className="portal-title">Client Portal</div>
      <div className="portal-sub">Access your campaign dashboards, reports, and deliverables.</div>
      <form className="portal-form" onSubmit={handlePortalLogin}>
        <div>
          <label htmlFor="portal-email" style={{ fontSize:"11px", fontWeight:500, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--silver-dk)", display:"block", marginBottom:"6px" }}>
            Email
          </label>
          <input
            type="email" id="portal-email" className="form-input"
            placeholder="your@email.com" required
            value={portalEmail}
            onChange={e => setPortalEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="portal-pass" style={{ fontSize:"11px", fontWeight:500, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--silver-dk)", display:"block", marginBottom:"6px" }}>
            Password
          </label>
          <input
            type="password" id="portal-pass" className="form-input"
            placeholder="••••••••" required
            value={portalPassword}
            onChange={e => setPortalPassword(e.target.value)}
          />
        </div>
        {portalError && (
          <p style={{ fontSize:"13px", color:"#e87070" }}>{portalError}</p>
        )}
        <button type="submit" className="portal-btn" disabled={portalLoading}>
          {portalLoading ? "Signing in…" : "Sign in →"}
        </button>
      </form>
      <div className="portal-note">Secure login · All data encrypted at rest and in transit</div>
    </div>
  </div>
)}
    </>
  );
}
