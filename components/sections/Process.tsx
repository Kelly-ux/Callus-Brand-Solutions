"use client";
import { useEffect, useRef } from "react";

const steps = [
  { num: "01", icon: "🔍", title: "Discovery", desc: "We audit your current presence and learn your business, audience, and goals inside out." },
  { num: "02", icon: "🎨", title: "Strategy", desc: "We design a bespoke marketing plan with defined KPIs, timelines, and channel mix." },
  { num: "03", icon: "🛠️", title: "Build", desc: "Website, social profiles, ad accounts, content systems — everything goes live." },
  { num: "04", icon: "🚀", title: "Launch", desc: "Campaigns go live. We monitor daily and optimise in real time for best results." },
  { num: "05", icon: "📈", title: "Grow", desc: "Monthly reviews, performance reports, and continuous improvement — indefinitely." },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={ref} className="py-[100px]"
      style={{ background: "var(--brown-dk)", borderTop: "1px solid rgba(200,160,80,0.1)", borderBottom: "1px solid rgba(200,160,80,0.1)" }}>
      <div className="max-w-[1200px] mx-auto px-10 text-center">

        {/* Header */}
        <div className="fade-up mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase" style={{ color: "var(--gold-lt)" }}>How We Work</span>
            <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-semibold leading-[1.12]"
            style={{ fontFamily: "var(--ff-display)", fontSize: "clamp(32px,4vw,54px)", color: "var(--cream)" }}>
            Your Journey With{" "}
            <em className="not-italic" style={{ color: "var(--brown-lt)" }}>Callus</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {/* Connector line — desktop only */}
          <div className="absolute top-7 left-[10%] right-[10%] h-px hidden lg:block"
            style={{ background: "linear-gradient(90deg,transparent,rgba(200,160,80,0.3),rgba(200,160,80,0.5),rgba(200,160,80,0.3),transparent)" }} />

          {steps.map((s) => (
            <div key={s.num}
              className="fade-up relative z-10 flex flex-col items-center group cursor-default"
              onMouseEnter={e => {
                const circle = e.currentTarget.querySelector(".step-circle") as HTMLDivElement;
                if (circle) { circle.style.borderColor = "var(--gold)"; circle.style.background = "rgba(200,160,80,0.1)"; }
              }}
              onMouseLeave={e => {
                const circle = e.currentTarget.querySelector(".step-circle") as HTMLDivElement;
                if (circle) { circle.style.borderColor = "rgba(200,160,80,0.35)"; circle.style.background = "var(--brown-dk)"; }
              }}
            >
              <div className="step-circle w-14 h-14 rounded-full flex items-center justify-center mb-5 text-xl relative transition-all duration-300"
                style={{ background: "var(--brown-dk)", border: "2px solid rgba(200,160,80,0.35)" }}>
                {s.icon}
                <span className="absolute -top-2 -right-1 text-[10px] font-bold px-1"
                  style={{ color: "var(--gold)", background: "var(--brown-dk)", fontFamily: "var(--ff-display)" }}>
                  {s.num}
                </span>
              </div>
              <div className="text-sm font-medium mb-2" style={{ color: "var(--cream)" }}>{s.title}</div>
              <div className="text-xs font-light leading-relaxed" style={{ color: "var(--brown-lt)" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}