"use client";
import { useEffect, useRef } from "react";

const projects = [
  { letter:"D", cat:"Fashion&Interior Decoration . B2B Matchmaking", title:"Duffyai — 100% increase in online sales in 90 days" },
  { letter:"S", cat:"Restaurant · Brand Identity", title:"Savanna Eats — Full rebrand & web launch" },
  { letter:"T", cat:"Tech · SEO", title:"TechHub Accra — #1 on Google in 6 months" },
  { letter:"G", cat:"Real Estate · Paid Ads", title:"Gold Coast Realty — 80 qualified leads per month" },
  { letter:"A", cat:"Beauty · Mobile App", title:"Abena Naturals — App launch, 12k downloads" },
  { letter:"V", cat:"Agriculture · Content", title:"Volta Agri — 50k monthly blog readers" },
];

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    ref.current?.querySelectorAll(".fade-up").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="portfolio" className="section-pad" ref={ref}>
      <div className="cbs-container">
        <div className="portfolio-header fade-up">
          <div>
            <div className="eyebrow"><div className="eyebrow-line" /><span>Our Work</span></div>
            <h2>Built to <em>Perform</em></h2>
          </div>
          <a href="#contact" className="btn-secondary">All case studies <span>→</span></a>
        </div>
        <div className="portfolio-grid">
          {projects.map(p => (
            <div key={p.letter} className="portfolio-item fade-up" tabIndex={0} role="article" aria-label={p.title}>
              <div className="portfolio-bg" aria-hidden="true">
                <div className="portfolio-letter">{p.letter}</div>
              </div>
              <div className="portfolio-overlay">
                <div className="portfolio-cat">{p.cat}</div>
                <div className="portfolio-title">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
