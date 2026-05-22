"use client";
import { useEffect, useRef } from "react";

const tiers = [
  { name:"Starter", price:"2,500", popular:false, features:[
    { text:"Social media (2 platforms)", on:true },{ text:"8 posts per month + captions", on:true },
    { text:"Basic graphic design", on:true },{ text:"Monthly performance report", on:true },
    { text:"Paid ads management", on:false },{ text:"SEO & blog content", on:false },{ text:"Dedicated account manager", on:false },
  ]},
  { name:"Growth", price:"5,500", popular:true, features:[
    { text:"Social media (3 platforms)", on:true },{ text:"16 posts + stories + reels", on:true },
    { text:"Premium graphic design", on:true },{ text:"Paid ads management (Google + Meta)", on:true },
    { text:"SEO + 2 blog posts per month", on:true },{ text:"Monthly analytics dashboard", on:true },{ text:"Dedicated account manager", on:false },
  ]},
  { name:"Full Service", price:"10,000", popular:false, features:[
    { text:"All platforms, unlimited content", on:true },{ text:"Full ads management + strategy", on:true },
    { text:"Website + SEO full management", on:true },{ text:"Email marketing campaigns", on:true },
    { text:"Weekly reporting + strategy calls", on:true },{ text:"Dedicated account manager", on:true },{ text:"Priority support", on:true },
  ]},
];

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    ref.current?.querySelectorAll(".fade-up").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="pricing" className="section-pad pricing-section" ref={ref}>
      <div className="cbs-container">
        <div className="pricing-header fade-up">
          <div className="eyebrow" style={{ justifyContent:"center" }}><div className="eyebrow-line" /><span>Transparent Pricing</span></div>
          <h2>Simple Retainers. <em>Real Results.</em></h2>
          <p>No hidden fees. No surprise invoices. Pick a tier that fits your business today — upgrade as you grow.</p>
        </div>
        <div className="pricing-grid">
          {tiers.map(tier => (
            <div key={tier.name} className={`pricing-card fade-up${tier.popular ? " popular" : ""}`}>
              {tier.popular && <div className="pricing-badge">Most popular</div>}
              <div className="pricing-tier">{tier.name}</div>
              <div className="pricing-price"><sup>GHS</sup>{tier.price}</div>
              <div className="pricing-price-note">per month · billed at start of month</div>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                {tier.features.map(f => (
                  <li key={f.text} className={f.on ? "" : "muted"}>{f.text}</li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary" style={{ width:"100%", textAlign:"center", justifyContent:"center" }}>Get started →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
