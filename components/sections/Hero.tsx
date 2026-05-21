"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up");
    const timer = setTimeout(() => {
      els?.forEach((el, i) => {
        setTimeout(() => el.classList.add("visible"), i * 120);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={ref}>
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ padding: "calc(72px + 60px) 40px 80px" }}
      >
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(123,79,46,0.22) 0%, transparent 65%), radial-gradient(ellipse 50% 80% at 15% 70%, rgba(58,30,12,0.4) 0%, transparent 55%), linear-gradient(160deg, #0e0906 0%, #1a1008 40%, #110c06 100%)",
          }}
        />

        {/* Grid lines */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,150,80,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,150,80,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%)",
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <div className="fade-up flex items-center gap-3 mb-6">
              <div className="w-10 h-px" style={{ background: "var(--gold)" }} />
              <span
                className="text-[11px] font-medium tracking-[0.22em] uppercase"
                style={{ color: "var(--gold-lt)" }}
              >
                Ghana's Growth Partner
              </span>
            </div>

            <h1
              className="fade-up font-semibold leading-[1.07] mb-7"
              style={{
                fontFamily: "var(--ff-display)",
                fontSize: "clamp(44px, 5.5vw, 78px)",
                color: "var(--cream)",
                letterSpacing: "-0.01em",
              }}
            >
              We Build the Brands
              <em className="block not-italic" style={{ color: "var(--brown-lt)" }}>
                That Build Ghana.
              </em>
            </h1>

            <p
              className="fade-up text-base font-light leading-[1.75] mb-11 max-w-[460px]"
              style={{ color: "var(--silver-dk)" }}
            >
              Callus Brand Solutions handles your entire media presence —
              websites, social media, paid ads, and content strategy — so you
              can focus on what you do best: running your business.
            </p>

            <div className="fade-up flex items-center gap-5 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 text-[13px] font-medium tracking-[0.1em] uppercase rounded-sm no-underline transition-all duration-200 hover:-translate-y-px"
                style={{
                  background: "var(--brown)",
                  border: "1px solid var(--brown-lt)",
                  color: "var(--cream)",
                }}
              >
                Start Growing <span>→</span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-[13px] font-normal tracking-[0.08em] uppercase no-underline transition-all duration-200 group"
                style={{ color: "var(--silver)" }}
              >
                See Our Work
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div
              className="fade-up flex gap-8 flex-wrap mt-14 pt-10"
              style={{ borderTop: "1px solid rgba(200,160,80,0.12)" }}
            >
              {[
                { num: "50+", label: "Brands grown" },
                { num: "3×", label: "Average ROI" },
                { num: "100%", label: "Done-for-you" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="leading-none mb-1"
                    style={{
                      fontFamily: "var(--ff-display)",
                      fontSize: "36px",
                      fontWeight: 600,
                      color: "var(--silver-lt)",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-[11px] tracking-[0.12em] uppercase font-normal"
                    style={{ color: "var(--silver-dk)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — performance card */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[340px] h-[420px]">
              {/* Back cards */}
              <div
                className="absolute rounded-2xl"
                style={{
                  top: 38, left: 38, right: -38, bottom: -38,
                  zIndex: 0, opacity: 0.25,
                  background: "linear-gradient(135deg,rgba(123,79,46,0.1),rgba(30,20,10,0.2))",
                  border: "1px solid rgba(200,160,80,0.1)",
                }}
              />
              <div
                className="absolute rounded-2xl"
                style={{
                  top: 20, left: 20, right: -20, bottom: -20,
                  zIndex: 1, opacity: 0.5,
                  background: "linear-gradient(135deg,rgba(123,79,46,0.1),rgba(30,20,10,0.2))",
                  border: "1px solid rgba(200,160,80,0.12)",
                }}
              />
              {/* Main card */}
              <div
                className="absolute inset-0 rounded-2xl p-7"
                style={{
                  zIndex: 2,
                  background: "linear-gradient(135deg,rgba(200,205,212,0.08),rgba(123,79,46,0.12))",
                  border: "1px solid rgba(200,160,80,0.18)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="text-[10px] font-medium tracking-[0.2em] uppercase mb-5"
                  style={{ color: "var(--gold)" }}
                >
                  Client performance · last 90 days
                </div>
                <div
                  className="leading-none mb-1"
                  style={{
                    fontFamily: "var(--ff-display)",
                    fontSize: "52px",
                    fontWeight: 700,
                    color: "var(--silver-lt)",
                  }}
                >
                  +218%
                </div>
                <div className="text-[13px] mb-7" style={{ color: "var(--silver-dk)" }}>
                  Organic reach growth
                </div>

                {/* Sparkline — no gradients to avoid paste corruption */}
                <svg
                  viewBox="0 0 280 60"
                  fill="none"
                  className="w-full mb-6"
                  aria-hidden="true"
                >
                  <polyline
                    points="0,50 40,44 80,36 100,38 130,22 160,18 200,10 240,6 280,2"
                    stroke="var(--brown-lt)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="flex flex-wrap gap-2">
                  {["Social Media", "SEO", "Paid Ads", "Content"].map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-3 py-1 rounded-full"
                      style={{
                        border: "1px solid rgba(200,160,80,0.2)",
                        color: "var(--brown-lt)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}