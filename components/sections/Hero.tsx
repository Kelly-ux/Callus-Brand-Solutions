"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up");
    const t = setTimeout(() => { els?.forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 120)); }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div ref={ref}>
      <section id="hero" className="cbs-hero" aria-label="Hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow fade-up">
              <div className="hero-eyebrow-line" />
              <span>Ghana's Growth Partner</span>
            </div>
            <h1 className="fade-up">
              We Build the Brands
              <em>That Build Ghana.</em>
            </h1>
            <p className="hero-sub fade-up">
              Callus Brand Solutions handles your entire media presence — websites, social media, paid ads, and content strategy — so you can focus on what you do best: running your business.
            </p>

            <div className="hero-actions fade-up">
  
        <a href="https://calendly.com/callusbrandsolutions/free-brand-audit"
         target="_blank"
          rel="noopener noreferrer"
            className="btn-primary"
          >
           Book a Free Call →
         </a>
  <a href="#services" className="btn-secondary">
    See what we do <span>→</span>
  </a>
</div>
            <div className="hero-stats fade-up">
              {[{ num: "50+", label: "Brands grown" }, { num: "3×", label: "Average ROI" }, { num: "100%", label: "Done-for-you" }].map(s => (
                <div key={s.label}>
                  <div className="hero-stat-num">{s.num}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card-stack">
              <div className="hero-card">
                <div className="hero-card-label">Client performance · last 90 days</div>
                <div className="hero-metric">+218%</div>
                <div className="hero-metric-label">Organic reach growth</div>
                <svg className="hero-sparkline" viewBox="0 0 280 60" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="sg" x1="0" y1="0" x2="280" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#7B4F2E" /><stop offset="100%" stopColor="#C4956A" />
                    </linearGradient>
                    <linearGradient id="sf" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#C4956A" stopOpacity="0.25" /><stop offset="100%" stopColor="#C4956A" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polyline points="0,50 40,44 80,36 100,38 130,22 160,18 200,10 240,6 280,2" stroke="url(#sg)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="0,50 40,44 80,36 100,38 130,22 160,18 200,10 240,6 280,2 280,60 0,60" fill="url(#sf)" stroke="none" />
                </svg>
                <div className="hero-tags">
                  {["Social Media", "SEO", "Paid Ads", "Content"].map(t => <span key={t} className="hero-tag">{t}</span>)}
                </div>
              </div>
              <div className="hero-card" />
              <div className="hero-card" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
