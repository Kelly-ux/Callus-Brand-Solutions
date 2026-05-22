"use client";
import { useEffect, useRef } from "react";

const steps = [
  { num:"01", icon:"🔍", title:"Discovery", desc:"We audit your current presence and learn your business, audience, and goals inside out." },
  { num:"02", icon:"🎨", title:"Strategy", desc:"We design a bespoke marketing plan with defined KPIs, timelines, and channel mix." },
  { num:"03", icon:"🛠️", title:"Build", desc:"Website, social profiles, ad accounts, content systems — everything goes live." },
  { num:"04", icon:"🚀", title:"Launch", desc:"Campaigns go live. We monitor daily and optimise in real time for best results." },
  { num:"05", icon:"📈", title:"Grow", desc:"Monthly reviews, performance reports, and continuous improvement — indefinitely." },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    ref.current?.querySelectorAll(".fade-up").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" className="section-pad process-section" ref={ref}>
      <div className="cbs-container">
        <div className="process-inner">
          <div className="process-header fade-up">
            <div className="eyebrow" style={{ justifyContent: "center" }}><div className="eyebrow-line" /><span>How We Work</span></div>
            <h2>Your Journey With <em>Callus</em></h2>
          </div>
          <div className="process-steps">
            {steps.map(s => (
              <div key={s.num} className="process-step fade-up">
                <div className="process-step-circle" aria-hidden="true">{s.icon}</div>
                <div className="process-step-num" aria-hidden="true">{s.num}</div>
                <div className="process-step-title">{s.title}</div>
                <div className="process-step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
