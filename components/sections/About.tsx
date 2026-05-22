"use client";
import { useEffect, useRef } from "react";

const values = [
  { icon: "⚡", title: "Results first", desc: "Every decision we make is tied to a number. We define KPIs upfront and report on them monthly." },
  { icon: "🔒", title: "Radical transparency", desc: "You always know exactly what we're working on, what it's costing, and what it's returning." },
  { icon: "🌍", title: "Built for Ghana", desc: "We understand the Ghanaian market — its culture, its platforms, its purchasing behaviour and consumer behavior." },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    ref.current?.querySelectorAll(".fade-up").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="section-pad about-section" ref={ref}>
      <div className="cbs-container">
        <div className="about-grid">
          <div className="about-img-wrap fade-up" aria-hidden="true">
            <div className="about-img-frame">
              <div className="about-monogram">CBS</div>
              <div className="about-badge">
                <div className="about-badge-num">2026</div>
                <div className="about-badge-label">Founded in Accra</div>
              </div>
            </div>
          </div>
          <div>
            <div className="eyebrow fade-up"><div className="eyebrow-line" /><span>Who We Are</span></div>
            <h2 className="fade-up" style={{ marginBottom: "24px" }}>The Team <em>Behind Your Growth</em></h2>
            <p className="about-body fade-up">Callus Brand Solutions was founded on one belief: that great Ghanaian businesses deserve world-class marketing. We're a full-service consultancy that embeds itself into your brand — learning your voice, your audience, and your goals — then building the systems that turn attention into revenue.</p>
            <p className="about-body fade-up" style={{ marginTop: "-16px" }}>We don't hand you a report and disappear. We handle everything — your website, your social channels, your ads, your content, your sales, your marketing — and we show you the results every single month in a dashboard you can actually understand.</p>
            <div className="about-values fade-up">
              {values.map(v => (
                <div key={v.title} className="about-value">
                  <div className="about-value-icon">{v.icon}</div>
                  <div>
                    <div className="about-value-title">{v.title}</div>
                    <div className="about-value-desc">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-primary fade-up">Work With Us →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
