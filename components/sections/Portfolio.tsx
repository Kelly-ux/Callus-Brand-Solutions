"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const projects = [
  {
    letter: "K", cat: "E-commerce · Social Media",
    title: "Kente Collective — 340% increase in online sales in 90 days",
    span: "lg:col-span-7 lg:row-span-2", minH: "360px",
  },
  {
    letter: "S", cat: "Restaurant · Brand Identity",
    title: "Savanna Eats — Full rebrand & web launch",
    span: "lg:col-span-5", minH: "172px",
  },
  {
    letter: "T", cat: "Tech · SEO",
    title: "TechHub Accra — #1 on Google in 6 months",
    span: "lg:col-span-5", minH: "172px",
  },
  {
    letter: "G", cat: "Real Estate · Paid Ads",
    title: "Gold Coast Realty — 80 qualified leads per month",
    span: "lg:col-span-4", minH: "240px",
  },
  {
    letter: "A", cat: "Beauty · Mobile App",
    title: "Abena Naturals — App launch, 12k downloads",
    span: "lg:col-span-4", minH: "240px",
  },
  {
    letter: "V", cat: "Agriculture · Content",
    title: "Volta Agri — 50k monthly blog readers",
    span: "lg:col-span-4", minH: "240px",
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={ref} className="py-[100px]">
      <div className="max-w-[1200px] mx-auto px-10">

        {/* Header */}
        <div className="fade-up flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase" style={{ color: "var(--gold-lt)" }}>Our Work</span>
            </div>
            <h2 className="font-semibold leading-[1.12]"
              style={{ fontFamily: "var(--ff-display)", fontSize: "clamp(32px,4vw,54px)", color: "var(--cream)" }}>
              Built to <em className="not-italic" style={{ color: "var(--brown-lt)" }}>Perform</em>
            </h2>
          </div>
          <Link href="/portfolio"
            className="inline-flex items-center gap-2 text-[13px] tracking-[0.08em] uppercase no-underline transition-all duration-200 group"
            style={{ color: "var(--silver)" }}>
            All case studies
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          {projects.map((p) => (
            <div key={p.letter}
              className={`fade-up relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${p.span}`}
              style={{
                minHeight: p.minH,
                background: "linear-gradient(145deg,rgba(123,79,46,0.2),rgba(20,12,6,0.9))",
                border: "1px solid rgba(200,160,80,0.1)",
              }}
              tabIndex={0}
              role="article"
              aria-label={p.title}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,160,80,0.3)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,160,80,0.1)";
              }}
            >
              {/* Background letter */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                aria-hidden="true">
                <span className="opacity-[0.07]"
                  style={{ fontFamily: "var(--ff-display)", fontSize: "120px", fontWeight: 700, color: "var(--silver-lt)", lineHeight: 1 }}>
                  {p.letter}
                </span>
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6"
                style={{ background: "linear-gradient(to top,rgba(10,6,2,0.9) 0%,transparent 60%)" }}>
                <div className="text-[10px] font-medium tracking-[0.2em] uppercase mb-1.5" style={{ color: "var(--gold)" }}>
                  {p.cat}
                </div>
                <div className="font-semibold leading-[1.2]"
                  style={{ fontFamily: "var(--ff-display)", fontSize: "20px", color: "var(--cream)" }}>
                  {p.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}