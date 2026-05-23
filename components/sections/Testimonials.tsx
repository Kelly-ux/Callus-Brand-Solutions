"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  { initial:"J", quote:"CBS completely transformed how we show up online. Within three months, our Instagram following grew from 400 to over 8,000 — and those are real, buying customers.", name:"Jessica", role:"Founder, Duffyai · Accra" },
  { initial:"K", quote:"We had a website that nobody could find. CBS rebuilt it, handled our SEO, and now we rank on the first page for every service we offer in Accra. The ROI is obvious.", name:"Kwame Asante", role:"CEO, TechHub Accra" },
  { initial:"E", quote:"The monthly reports are what sold me. I always know exactly what my marketing spend is doing. No fluff, no jargon — just numbers I can take to my board.", name:"Efua Boateng", role:"Director, Gold Coast Realty" },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    ref.current?.querySelectorAll(".fade-up").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonials" className="section-pad testimonials-section" ref={ref}>
      <div className="cbs-container">
        <div style={{ textAlign:"center", marginBottom:"56px" }} className="fade-up">
          <div className="eyebrow" style={{ justifyContent:"center" }}><div className="eyebrow-line" /><span>Client Stories</span></div>
          <h2>What Our Clients <em>Say</em></h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.name} className="testimonial-card fade-up">
              <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <div className="testimonial-quote">"{t.quote}"</div>
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">{t.initial}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
