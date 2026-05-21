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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-10 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(20,14,9,0.88)] backdrop-blur-lg border-b border-[rgba(200,160,80,0.12)]"
            : "border-b border-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-[var(--ink)] text-lg"
            style={{ background: "linear-gradient(135deg,var(--silver) 0%,var(--silver-dk) 60%,var(--silver-lt) 100%)", fontFamily: "var(--ff-display)" }}>
            CBS
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[var(--silver-lt)] tracking-wider text-[15px]"
              style={{ fontFamily: "var(--ff-display)", fontWeight: 600 }}>
              Callus
            </span>
            <span className="text-[var(--brown-lt)] text-[9px] tracking-[0.18em] uppercase mt-1 font-normal">
              Brand Solutions
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {["About", "Services", "Portfolio", "Pricing", "Blog", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="text-[var(--silver-dk)] text-[13px] tracking-[0.06em] uppercase no-underline hover:text-[var(--cream)] transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--gold)] group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Portal CTA */}
        <button
          onClick={() => setPortalOpen(true)}
          className="hidden md:inline-flex items-center px-5 py-2 text-[12px] font-medium tracking-[0.1em] uppercase rounded-sm transition-all duration-200 cursor-pointer"
          style={{ border: "1px solid rgba(200,150,62,0.5)", color: "var(--gold-lt)", background: "transparent" }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "var(--gold)";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--ink)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gold)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--gold-lt)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(200,150,62,0.5)";
          }}
        >
          Client Portal
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-px bg-[var(--silver)] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-6 h-px bg-[var(--silver)] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[var(--silver)] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 pt-[72px]"
          style={{ background: "rgba(20,14,9,0.97)", backdropFilter: "blur(16px)" }}>
          <ul className="flex flex-col items-center justify-center gap-8 h-full list-none pb-20">
           {["About", "Services", "Portfolio", "Pricing", "Blog", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="no-underline transition-colors duration-200"
                style={{ fontFamily: "var(--ff-display)", fontSize: "36px", fontWeight: 600, color: "var(--cream)" }}
              >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => { setMenuOpen(false); setPortalOpen(true); }}
                className="px-8 py-3 text-sm tracking-widest uppercase rounded-sm cursor-pointer"
                style={{ background: "var(--brown)", border: "1px solid var(--brown-lt)", color: "var(--cream)" }}
              >
                Client Portal
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Portal Modal */}
      {portalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: "rgba(10,6,2,0.92)", backdropFilter: "blur(16px)" }}
          onClick={(e) => e.target === e.currentTarget && setPortalOpen(false)}
        >
          <div className="w-full max-w-md rounded-2xl p-12 relative"
            style={{ background: "var(--ink)", border: "1px solid rgba(200,160,80,0.2)" }}>
            <button
              onClick={() => setPortalOpen(false)}
              className="absolute top-5 right-5 bg-transparent border-none text-2xl cursor-pointer leading-none"
              style={{ color: "var(--silver-dk)" }}
              aria-label="Close portal"
            >
              ×
            </button>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg mb-7"
              style={{ background: "linear-gradient(135deg,var(--silver) 0%,var(--silver-dk) 60%,var(--silver-lt) 100%)", color: "var(--ink)", fontFamily: "var(--ff-display)" }}>
              CBS
            </div>
            <h2 className="text-[28px] font-semibold mb-2" style={{ fontFamily: "var(--ff-display)", color: "var(--cream)" }}>
              Client Portal
            </h2>
            <p className="text-sm font-light mb-8 leading-relaxed" style={{ color: "var(--silver-dk)" }}>
              Access your campaign dashboards, reports, and deliverables.
            </p>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-md text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,160,80,0.15)", color: "var(--cream)", fontFamily: "var(--ff-body)" }}
              />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-md text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,160,80,0.15)", color: "var(--cream)", fontFamily: "var(--ff-body)" }}
              />
              <button
                type="submit"
                className="w-full py-4 text-sm font-medium tracking-widest uppercase rounded cursor-pointer transition-all duration-200"
                style={{ background: "var(--brown)", border: "1px solid var(--brown-lt)", color: "var(--cream)" }}
              >
                Sign in →
              </button>
            </form>
            <p className="text-xs text-center mt-4 leading-relaxed" style={{ color: "var(--silver-dk)" }}>
              Secure login · All data encrypted at rest and in transit
            </p>
          </div>
        </div>
      )}
    </>
  );
}