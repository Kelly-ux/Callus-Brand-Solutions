"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "2,500",
    popular: false,
    features: [
      { text: "Social media (2 platforms)", included: true },
      { text: "8 posts per month + captions", included: true },
      { text: "Basic graphic design", included: true },
      { text: "Monthly performance report", included: true },
      { text: "Paid ads management", included: false },
      { text: "SEO & blog content", included: false },
      { text: "Dedicated account manager", included: false },
    ],
  },
  {
    name: "Growth",
    price: "5,500",
    popular: true,
    features: [
      { text: "Social media (3 platforms)", included: true },
      { text: "16 posts + stories + reels", included: true },
      { text: "Premium graphic design", included: true },
      { text: "Paid ads management (Google + Meta)", included: true },
      { text: "SEO + 2 blog posts per month", included: true },
      { text: "Monthly analytics dashboard", included: true },
      { text: "Dedicated account manager", included: false },
    ],
  },
  {
    name: "Full Service",
    price: "10,000",
    popular: false,
    features: [
      { text: "All platforms, unlimited content", included: true },
      { text: "Full ads management + strategy", included: true },
      { text: "Website + SEO full management", included: true },
      { text: "Email marketing campaigns", included: true },
      { text: "Weekly reporting + strategy calls", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Priority support", included: true },
    ],
  },
];

export default function Pricing() {
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
    <section id="pricing" ref={ref} className="py-[100px]"
      style={{ background: "linear-gradient(180deg,var(--ink) 0%,#0f0905 100%)" }}>
      <div className="max-w-[1200px] mx-auto px-10">

        {/* Header */}
        <div className="fade-up text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase" style={{ color: "var(--gold-lt)" }}>Transparent Pricing</span>
            <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-semibold leading-[1.12] mb-3"
            style={{ fontFamily: "var(--ff-display)", fontSize: "clamp(32px,4vw,54px)", color: "var(--cream)" }}>
            Simple Retainers.{" "}
            <em className="not-italic" style={{ color: "var(--brown-lt)" }}>Real Results.</em>
          </h2>
          <p className="text-sm font-light max-w-[460px] mx-auto leading-[1.75]" style={{ color: "var(--silver-dk)" }}>
            No hidden fees. No surprise invoices. Pick a tier that fits your business today — upgrade as you grow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {tiers.map((tier) => (
            <div key={tier.name}
              className="fade-up relative rounded-2xl p-10 transition-all duration-300"
              style={{
                border: tier.popular ? "2px solid rgba(200,160,80,0.35)" : "1px solid rgba(200,160,80,0.12)",
                background: tier.popular
                  ? "linear-gradient(145deg,rgba(123,79,46,0.12),rgba(26,16,8,0.8))"
                  : "rgba(255,255,255,0.02)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                if (!tier.popular) (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,160,80,0.3)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                if (!tier.popular) (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,160,80,0.12)";
              }}
            >
              {tier.popular && (
                <div className="absolute top-5 right-5 text-[10px] font-medium tracking-[0.08em] uppercase px-3 py-1 rounded-full"
                  style={{ background: "var(--gold)", color: "var(--ink)" }}>
                  Most popular
                </div>
              )}
              <div className="text-[12px] font-medium tracking-[0.16em] uppercase mb-3" style={{ color: "var(--gold-lt)" }}>
                {tier.name}
              </div>
              <div className="leading-none mb-1" style={{ fontFamily: "var(--ff-display)", fontSize: "48px", fontWeight: 700, color: "var(--cream)" }}>
                <sup className="text-[22px] align-super">GHS</sup>{tier.price}
              </div>
              <div className="text-xs mb-7" style={{ color: "var(--silver-dk)" }}>per month · billed at start of month</div>
              <div className="h-px mb-7" style={{ background: "rgba(200,160,80,0.1)" }} />
              <ul className="flex flex-col gap-3.5 mb-9 list-none">
                {tier.features.map((f) => (
                  <li key={f.text}
                    className="flex items-start gap-3 text-sm font-light leading-snug"
                    style={{ color: f.included ? "var(--silver)" : "var(--silver-dk)", opacity: f.included ? 1 : 0.45 }}>
                    <span className="flex-shrink-0 mt-0.5" style={{ color: f.included ? "var(--gold)" : "var(--silver-dk)", fontSize: "9px" }}>
                      {f.included ? "✦" : "—"}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="flex items-center justify-center w-full py-4 text-[13px] font-medium tracking-[0.1em] uppercase rounded-sm no-underline transition-all duration-200 hover:-translate-y-px"
                style={{ background: "var(--brown)", border: "1px solid var(--brown-lt)", color: "var(--cream)" }}>
                Get started →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}