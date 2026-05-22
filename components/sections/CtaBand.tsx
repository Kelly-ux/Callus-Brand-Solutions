"use client";
import { useEffect, useRef } from "react";

export default function CtaBand() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.15 });
    ref.current?.querySelectorAll(".fade-up").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="cta-band" ref={ref}>
      <div className="eyebrow fade-up" style={{ justifyContent:"center" }}>
        <div className="eyebrow-line" /><span>Ready to grow?</span><div className="eyebrow-line" />
      </div>
      <h2 className="fade-up">Stop Leaving Growth <em>on the Table</em></h2>
      <p className="fade-up">Your competitors are building their digital presence right now. Let's make sure you're ahead of them — not catching up.</p>
      <div className="cta-actions fade-up">
        <a href="#contact" className="btn-primary">Book a Free Audit →</a>
        <a href="tel:+233000000000" className="btn-secondary">Call us directly <span>→</span></a>
      </div>
    </section>
  );
}
