"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const values = [
  {
    icon: "⚡",
    title: "Results first",
    desc: "Every decision tied to a number. We define KPIs upfront and report on them every month.",
  },
  {
    icon: "🔒",
    title: "Radical transparency",
    desc: "You always know exactly what we're working on, what it's costing, and what it's returning.",
  },
  {
    icon: "🌍",
    title: "Built for Ghana",
    desc: "We understand the Ghanaian market — its culture, its platforms, its purchasing behaviour.",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-[100px]">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Visual */}
          <div className="hidden lg:block relative">
            <div
              className="w-full aspect-[4/5] rounded-xl flex items-center justify-center relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg,rgba(123,79,46,0.25),rgba(20,12,6,0.8))",
                border: "1px solid rgba(200,160,80,0.15)",
              }}
            >
              <div
                className="opacity-30 select-none"
                style={{
                  fontFamily: "var(--ff-display)",
                  fontSize: "120px",
                  fontWeight: 700,
                  color: "var(--silver-lt)",
                }}
              >
                CBS
              </div>
              <div
                className="absolute bottom-6 right-6 rounded-xl p-4"
                style={{
                  background: "rgba(26,16,8,0.9)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(200,160,80,0.2)",
                }}
              >
                <div
                  className="leading-none"
                  style={{
                    fontFamily: "var(--ff-display)",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "var(--silver-lt)",
                  }}
                >
                  2024
                </div>
                <div
                  className="text-[11px] mt-1 tracking-[0.08em]"
                  style={{ color: "var(--silver-dk)" }}
                >
                  Founded in Accra
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="fade-up flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
              <span
                className="text-[11px] font-medium tracking-[0.22em] uppercase"
                style={{ color: "var(--gold-lt)" }}
              >
                Who We Are
              </span>
            </div>

            <h2
              className="fade-up mb-6 font-semibold leading-[1.12]"
              style={{
                fontFamily: "var(--ff-display)",
                fontSize: "clamp(32px,4vw,54px)",
                color: "var(--cream)",
              }}
            >
              The Team{" "}
              <em className="not-italic" style={{ color: "var(--brown-lt)" }}>
                Behind Your Growth
              </em>
            </h2>

            <p
              className="fade-up text-base font-light leading-[1.8] mb-5"
              style={{ color: "var(--silver-dk)" }}
            >
              Callus Brand Solutions was founded on one belief: that great
              Ghanaian businesses deserve world-class marketing. We embed
              ourselves into your brand — learning your voice, your audience,
              and your goals — then build the systems that turn attention into
              revenue.
            </p>
            <p
              className="fade-up text-base font-light leading-[1.8] mb-8"
              style={{ color: "var(--silver-dk)" }}
            >
              We don't hand you a report and disappear. We handle everything —
              your website, your social channels, your ads, your content — and
              show you the results every month in a dashboard you can actually
              understand.
            </p>

            <div className="fade-up flex flex-col gap-4 mb-9">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 cursor-default"
                  style={{
                    border: "1px solid rgba(200,160,80,0.1)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(200,160,80,0.3)";
                    (e.currentTarget as HTMLDivElement).style.background =
                      "rgba(123,79,46,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(200,160,80,0.1)";
                    (e.currentTarget as HTMLDivElement).style.background =
                      "rgba(255,255,255,0.02)";
                  }}
                >
                  <span className="text-xl mt-0.5 flex-shrink-0">{v.icon}</span>
                  <div>
                    <div
                      className="text-sm font-medium mb-1"
                      style={{ color: "var(--cream)" }}
                    >
                      {v.title}
                    </div>
                    <div
                      className="text-[13px] font-light leading-relaxed"
                      style={{ color: "var(--silver-dk)" }}
                    >
                      {v.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="fade-up inline-flex items-center gap-2 px-9 py-4 text-[13px] font-medium tracking-[0.1em] uppercase rounded-sm no-underline transition-all duration-200 hover:-translate-y-px"
              style={{
                background: "var(--brown)",
                border: "1px solid var(--brown-lt)",
                color: "var(--cream)",
              }}
            >
              Work With Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}