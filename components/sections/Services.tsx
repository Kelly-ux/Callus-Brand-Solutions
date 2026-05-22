"use client";
import { useEffect, useRef } from "react";

const services = [
  { num:"01", icon: "🤝", title: "B2B Matchmaking", desc: "We connect your business directly with bulk buyers, agents, and corporate partners who need your products, turning cold streets into warm, profitable relationships.",tags: ["Channel Partners", "B2B Outreach", "Wholesale Leads"] },
  { num:"02", icon: "📍", title: "Local Search Mastery", desc: "Optimizing your Google Maps and local search ranking so contractors, decorators, and walk-in clients find your business the exact second they need your stock.", tags: ["Google Maps", "Local SEO", "High-Intent Traffic"] },
  { num:"03", icon: "💼", title: "Account-Based Marketing", desc: "We pick your top high-value dream clients—like major event planners or design firms—and build custom digital and physical pitches tailored exclusively to win them over.", tags: ["Targeted Pitches", "High-Value Deals", "Custom Funnels"] },
  { num:"04", icon:"📈", title:"Field Marketing", desc:"On-the-ground outreach and face-to-face activation that connects your physical business directly with local customers.", tags:["On-the-ground","Local Footprint","Brand Activation"] },
  { num:"05", icon:"📊", title:"Analytics & Reporting", desc:"Monthly dashboards that show you exactly what's working — traffic, leads, conversions, and ROI — in plain language, not marketing jargon.", tags:["GA4","Data Studio","KPI tracking"] },
  { num:"06", icon:"🎯", title:"Paid Advertising", desc:"Data-driven Google and Meta ad campaigns built to deliver measurable returns. We manage every cedis of your ad spend like it's our own money.", tags:["Google Ads","Meta Ads","Retargeting"] },
  { num:"07", icon:"🌐", title:"Web Development", desc:"Fast, beautiful, mobile-first websites that turn visitors into customers. Your site will rank, convert, and impress.", tags:["Website","E-commerce","SEO-ready"] },
  { num:"08", icon:"📱", title:"Social Media Management", desc:"We create, schedule, and manage your social content across Instagram, TikTok, Facebook, and LinkedIn — consistently, on-brand, every single day.", tags:["Instagram","TikTok","Facebook","LinkedIn", "X"] },
  { num:"09", icon:"✍️", title:"Content & SEO", desc:"Blog content, email campaigns, and search engine optimisation that builds organic authority over time — the kind of growth that compounds.", tags:["Copywriting","On-page SEO","Email flows"] },
];


export default function Services() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    ref.current?.querySelectorAll(".fade-up").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="section-pad services-section" ref={ref}>
      <div className="cbs-container">
        <div className="services-header fade-up">
          <div className="eyebrow" style={{ justifyContent: "center" }}><div className="eyebrow-line" /><span>What We Do</span></div>
          <h2>Everything Your Brand <em>Needs to Grow</em></h2>
          <p>We handle the full stack of your digital presence and real-life marketing  — from your website to your last social post — so you never have to manage five different agencies.</p>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.num} className="service-card fade-up" tabIndex={0} role="article">
              <div className="service-num" aria-hidden="true">{s.num}</div>
              <div className="service-icon" aria-hidden="true">{s.icon}</div>
              <div className="service-title">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
              <div className="service-tags">{s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}</div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
