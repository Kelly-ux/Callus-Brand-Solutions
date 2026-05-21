
"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--ink)", borderTop: "1px solid rgba(200,160,80,0.1)" }} className="pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 no-underline mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg"
                style={{ background: "linear-gradient(135deg,var(--silver) 0%,var(--silver-dk) 60%,var(--silver-lt) 100%)", color: "var(--ink)", fontFamily: "var(--ff-display)" }}>
                CBS
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[var(--silver-lt)] tracking-wider text-[15px]" style={{ fontFamily: "var(--ff-display)", fontWeight: 600 }}>Callus</span>
                <span className="text-[var(--brown-lt)] text-[9px] tracking-[0.18em] uppercase mt-1">Brand Solutions</span>
              </div>
            </Link>
            <p className="text-sm font-light leading-relaxed max-w-[280px] mt-4 mb-6" style={{ color: "var(--silver-dk)" }}>
              We build the brands that build Ghana. Full-service digital marketing for businesses serious about growth.
            </p>
            <div className="flex gap-2">
              {["ig", "𝕏", "li", "tt", "fb"].map((s, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 rounded-md flex items-center justify-center text-xs no-underline transition-all duration-200"
                  style={{ border: "1px solid rgba(200,160,80,0.15)", color: "var(--silver-dk)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(200,160,80,0.15)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--silver-dk)"; }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.16em] uppercase mb-5" style={{ color: "var(--cream)" }}>Services</h4>
            <ul className="flex flex-col gap-3 list-none">
              {["Web Development", "Social Media", "Paid Advertising", "Content & SEO", "Mobile Apps", "Analytics"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm font-light no-underline transition-colors duration-200 hover:text-[var(--cream)]"
                    style={{ color: "var(--silver-dk)" }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.16em] uppercase mb-5" style={{ color: "var(--cream)" }}>Company</h4>
            <ul className="flex flex-col gap-3 list-none">
              {[
                { label: "About CBS", href: "/about" },
                { label: "Our Work", href: "/portfolio" },
                { label: "Pricing", href: "/pricing" },
                { label: "Insights Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm font-light no-underline transition-colors duration-200 hover:text-[var(--cream)]"
                    style={{ color: "var(--silver-dk)" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-7"
          style={{ borderTop: "1px solid rgba(200,160,80,0.08)" }}>
          <p className="text-xs font-light" style={{ color: "var(--silver-dk)" }}>
            © {year} Callus Brand Solutions. All rights reserved. Accra, Ghana.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-xs no-underline transition-colors duration-200 hover:text-[var(--cream)]"
                style={{ color: "var(--silver-dk)" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}