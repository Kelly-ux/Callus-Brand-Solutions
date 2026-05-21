"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    initial: "A",
    quote: "CBS completely transformed how we show up online. Within three months, our Instagram following grew from 400 to over 8,000 — and those are real, buying customers.",
    name: "Abena Mensah",
    role: "Founder, Abena Naturals · Accra",
  },
  {
    initial: "K",
    quote: "We had a website that nobody could find. CBS rebuilt it, handled our SEO, and now we rank on the first page for every service we offer in Accra. The ROI is obvious.",
    name: "Kwame Asante",
    role: "CEO, TechHub Accra",
  },
  {
    initial: "E",
    quote: "The monthly reports are what sold me. I always know exactly what my marketing spend is doing. No fluff, no jargon — just numbers I can take to my board.",
    name: "Efua Boateng",
    role: "Director, Gold Coast Realty",
  },
];

export default function Testimonials() {
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
    <section id="testimonials" ref={ref} className="py-[100px]"
      style={{ background: "var(--brown-dk)", borderTop: "1px solid rgba(200,160,80,0.1)" }}>
      <div className="max-w-[1200px] mx-auto px-10">

        {/* Header */}
        <div className="fade-up text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase"
              style={{ color: "var(--gold-lt)" }}>Client Stories</span>
            <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-semibold leading-[1.12]"
            style={{ fontFamily: "var(--ff-display)", fontSize: "clamp(32px,4vw,54px)", color: "var(--cream)" }}>
            What Our Clients{" "}
            <em className="not-italic" style={{ color: "var(--brown-lt)" }}>Say</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name}
              className="fade-up rounded-xl p-8 transition-all duration-300 cursor-default"
              style={{ border: "1px solid rgba(200,160,80,0.1)", background: "rgba(255,255,255,0.02)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,160,80,0.25)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,160,80,0.1)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {/* Stars */}
              <div className="tracking-[2px] text-xs mb-5" style={{ color: "var(--gold)" }}
                aria-label="5 out of 5 stars">
                ★★★★★
              </div>

              {/* Quote */}
              <blockquote className="font-normal leading-[1.75] mb-6"
                style={{ fontFamily: "var(--ff-display)", fontSize: "17px", fontStyle: "italic", color: "var(--silver)" }}>
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-base"
                  style={{
                    background: "linear-gradient(135deg,var(--brown),var(--brown-dk))",
                    border: "2px solid rgba(200,160,80,0.25)",
                    fontFamily: "var(--ff-display)",
                    color: "var(--silver-lt)",
                  }}
                  aria-hidden="true">
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: "var(--cream)" }}>{t.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--silver-dk)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}