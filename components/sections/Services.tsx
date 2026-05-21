"use client";
import { useEffect, useRef } from "react";

const services = [
  {
    num: "01", icon: "🌐", title: "Web Development",
    desc: "Fast, beautiful, mobile-first websites that turn visitors into customers. Built on Next.js or Webflow — your site will rank, convert, and impress.",
    tags: ["Next.js", "Webflow", "E-commerce", "SEO-ready"],
  },
  {
    num: "02", icon: "📱", title: "Social Media Management",
    desc: "We create, schedule, and manage your social content across Instagram, TikTok, Facebook, and LinkedIn — consistently, on-brand, every single day.",
    tags: ["Instagram", "TikTok", "Facebook", "LinkedIn"],
  },
  {
    num: "03", icon: "🎯", title: "Paid Advertising",
    desc: "Data-driven Google and Meta ad campaigns built to deliver measurable returns. We manage every cedis of your ad spend like it's our own money.",
    tags: ["Google Ads", "Meta Ads", "Retargeting"],
  },
  {
    num: "04", icon: "✍️", title: "Content & SEO",
    desc: "Blog content, email campaigns, and search engine optimisation that builds organic authority over time — the kind of growth that compounds.",
    tags: ["Copywriting", "On-page SEO", "Email flows"],
  },
  {
    num: "05", icon: "📊", title: "Analytics & Reporting",
    desc: "Monthly dashboards that show you exactly what's working — traffic, leads, conversions, and ROI — in plain language, not marketing jargon.",
    tags: ["GA4", "Data Studio", "KPI tracking"],
  },
];

const appMinis = [
  { title: "UI/UX Design", desc: "Figma prototypes before a single line of code" },
  { title: "API Integration", desc: "Connect to payments, maps, and third-party services" },
  { title: "Push Notifications", desc: "Re-engage customers with targeted messages" },
  { title: "In-app Analytics", desc: "User behaviour tracking and reporting" },
];

export default function Services() {
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
    <section id="services" ref={ref} className="py-[100px]"
      style={{ background: "linear-gradient(180deg,var(--ink) 0%,#0f0905 50%,var(--ink) 100%)" }}>
      <div className="max-w-[1200px] mx-auto px-10">

        {/* Header */}
        <div className="fade-up text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase" style={{ color: "var(--gold-lt)" }}>What We Do</span>
            <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-semibold leading-[1.12] mb-4"
            style={{ fontFamily: "var(--ff-display)", fontSize: "clamp(32px,4vw,54px)", color: "var(--cream)" }}>
            Everything Your Brand{" "}
            <em className="not-italic" style={{ color: "var(--brown-lt)" }}>Needs to Grow</em>
          </h2>
          <p className="text-base font-light leading-[1.75] max-w-[520px] mx-auto" style={{ color: "var(--silver-dk)" }}>
            We handle the full stack of your digital presence — from your website to your last social post — so you never have to manage five different agencies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.num}
              className="fade-up relative rounded-xl p-9 overflow-hidden transition-all duration-300 cursor-default group"
              style={{ border: "1px solid rgba(200,160,80,0.1)", background: "linear-gradient(145deg,rgba(255,255,255,0.025),rgba(123,79,46,0.04))" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,160,80,0.3)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,160,80,0.1)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
            >
              {/* Background number */}
              <div className="absolute top-4 right-5 leading-none pointer-events-none select-none"
                style={{ fontFamily: "var(--ff-display)", fontSize: "48px", fontWeight: 700, color: "rgba(200,150,80,0.07)" }}>
                {s.num}
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[22px] mb-5 flex-shrink-0"
                style={{ background: "rgba(123,79,46,0.25)", border: "1px solid rgba(200,160,80,0.2)" }}>
                {s.icon}
              </div>
              <h3 className="font-semibold leading-[1.2] mb-3"
                style={{ fontFamily: "var(--ff-display)", fontSize: "22px", color: "var(--cream)" }}>
                {s.title}
              </h3>
              <p className="text-sm font-light leading-[1.75] mb-5" style={{ color: "var(--silver-dk)" }}>
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="text-[10px] px-2.5 py-1 rounded-full"
                    style={{ border: "1px solid rgba(200,160,80,0.18)", color: "var(--brown-lt)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Featured mobile app card — spans full width */}
          <div className="fade-up md:col-span-2 lg:col-span-3 relative rounded-xl overflow-hidden transition-all duration-300 cursor-default"
            style={{ border: "1px solid rgba(200,160,80,0.1)", background: "linear-gradient(145deg,rgba(255,255,255,0.025),rgba(123,79,46,0.04))", padding: "44px 48px" }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,160,80,0.3)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,160,80,0.1)"; }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="absolute top-4 right-5 leading-none pointer-events-none select-none"
                  style={{ fontFamily: "var(--ff-display)", fontSize: "48px", fontWeight: 700, color: "rgba(200,150,80,0.07)" }}>
                  06
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[22px] mb-5"
                  style={{ background: "rgba(123,79,46,0.25)", border: "1px solid rgba(200,160,80,0.2)" }}>
                  📲
                </div>
                <h3 className="font-semibold leading-[1.2] mb-3"
                  style={{ fontFamily: "var(--ff-display)", fontSize: "22px", color: "var(--cream)" }}>
                  Mobile App Development
                </h3>
                <p className="text-sm font-light leading-[1.75] mb-5" style={{ color: "var(--silver-dk)" }}>
                  When your business needs an app, we build it right — on React Native so one codebase works on both iOS and Android, saving you time and budget. From concept to App Store, we handle it all.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["React Native", "iOS & Android", "App Store submission", "Maintenance"].map((t) => (
                    <span key={t} className="text-[10px] px-2.5 py-1 rounded-full"
                      style={{ border: "1px solid rgba(200,160,80,0.18)", color: "var(--brown-lt)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {appMinis.map((m) => (
                  <div key={m.title} className="rounded-lg p-4"
                    style={{ border: "1px solid rgba(200,160,80,0.1)", background: "rgba(255,255,255,0.02)" }}>
                    <div className="text-[13px] font-medium mb-1" style={{ color: "var(--cream)" }}>{m.title}</div>
                    <div className="text-xs font-light leading-relaxed" style={{ color: "var(--silver-dk)" }}>{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}