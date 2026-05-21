"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const posts = [
  {
    letter: "M",
    cat: "Social Media",
    date: "May 12, 2025",
    title: "Why Ghanaian Businesses Are Underusing TikTok in 2025",
    excerpt: "TikTok's organic reach in West Africa is still exceptional. Here's how to capture it before everyone else does.",
    slug: "ghanaian-businesses-tiktok-2025",
  },
  {
    letter: "P",
    cat: "Paid Ads",
    date: "April 28, 2025",
    title: "How to Run a GHS 1,000 Meta Ad Campaign That Actually Works",
    excerpt: "A practical guide to audience targeting, creative formats, and optimisation specifically for the Ghanaian market.",
    slug: "meta-ad-campaign-ghana",
  },
  {
    letter: "S",
    cat: "Strategy",
    date: "April 10, 2025",
    title: "The 5 Signs Your Business Needs a Marketing Agency (Not a Freelancer)",
    excerpt: "There's a right time to hire a freelancer and a right time to hire a firm. Here's how to know the difference.",
    slug: "marketing-agency-vs-freelancer",
  },
];

export default function BlogPreview() {
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
    <section id="blog" ref={ref} className="py-[100px]">
      <div className="max-w-[1200px] mx-auto px-10">

        {/* Header */}
        <div className="fade-up flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase"
                style={{ color: "var(--gold-lt)" }}>Insights</span>
            </div>
            <h2 className="font-semibold leading-[1.12]"
              style={{ fontFamily: "var(--ff-display)", fontSize: "clamp(32px,4vw,54px)", color: "var(--cream)" }}>
              From the{" "}
              <em className="not-italic" style={{ color: "var(--brown-lt)" }}>CBS Blog</em>
            </h2>
          </div>
          <Link href="/blog"
            className="inline-flex items-center gap-2 text-[13px] tracking-[0.08em] uppercase no-underline transition-all duration-200 group"
            style={{ color: "var(--silver)" }}>
            All articles
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.slug}
              className="fade-up rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group"
              style={{ border: "1px solid rgba(200,160,80,0.1)", background: "rgba(255,255,255,0.02)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,160,80,0.3)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,160,80,0.1)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Thumbnail */}
              <div className="h-[180px] relative overflow-hidden flex items-center justify-center"
                style={{ background: "linear-gradient(145deg,rgba(123,79,46,0.3),rgba(20,12,6,0.9))" }}>
                <span className="opacity-[0.08] select-none pointer-events-none"
                  style={{ fontFamily: "var(--ff-display)", fontSize: "80px", fontWeight: 700, color: "var(--silver-lt)" }}
                  aria-hidden="true">
                  {p.letter}
                </span>
                <div className="absolute top-4 left-4 text-[10px] font-medium tracking-[0.16em] uppercase px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(26,16,8,0.8)", color: "var(--gold)", border: "1px solid rgba(200,160,80,0.2)" }}>
                  {p.cat}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="text-[11px] tracking-[0.06em] mb-2.5" style={{ color: "var(--silver-dk)" }}>
                  {p.date}
                </div>
                <h3 className="font-semibold leading-[1.3] mb-2.5"
                  style={{ fontFamily: "var(--ff-display)", fontSize: "19px", color: "var(--cream)" }}>
                  {p.title}
                </h3>
                <p className="text-[13px] font-light leading-[1.7]" style={{ color: "var(--silver-dk)" }}>
                  {p.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}