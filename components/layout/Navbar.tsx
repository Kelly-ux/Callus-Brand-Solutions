
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);

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

        <button className="nav-cta" onClick={() => setPortalOpen(true)}>Client Portal</button>

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
            <div className="portal-sub">Access your campaign dashboards, reports, and deliverables. Contact your account manager if you need access.</div>
            <form className="portal-form" onSubmit={(e) => {
              e.preventDefault();
              const btn = e.currentTarget.querySelector("button") as HTMLButtonElement;
              btn.textContent = "Signing in…"; btn.disabled = true;
              setTimeout(() => { btn.textContent = "Sign in →"; btn.disabled = false; alert("Demo: connects to Supabase Auth in production."); }, 1400);
            }}>
              <div>
                <label htmlFor="portal-email" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--silver-dk)", display: "block", marginBottom: "6px" }}>Email</label>
                <input type="email" id="portal-email" placeholder="your@email.com" className="form-input" required />
              </div>
              <div>
                <label htmlFor="portal-pass" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--silver-dk)", display: "block", marginBottom: "6px" }}>Password</label>
                <input type="password" id="portal-pass" placeholder="••••••••" className="form-input" required />
              </div>
              <button type="submit" className="portal-btn">Sign in →</button>
            </form>
            <div className="portal-note">Secure login powered by Supabase Auth.<br />All data encrypted at rest and in transit.</div>
          </div>
        </div>
      )}
    </>
  );
}
