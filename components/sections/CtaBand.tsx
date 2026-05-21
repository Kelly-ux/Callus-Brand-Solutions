"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CtaBand() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-[100px] px-10 text-center"
      style={{
        background: "linear-gradient(135deg,var(--brown-dk) 0%,#1a0e05 50%,var(--brown-dk) 100%)",
        borderTop: "1px solid rgba(200,160,80,0.15)",
        borderBottom: "1px solid rgba(200,160,80,0.15)",
      }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="fade-up flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase"
            style={{ color: "var(--gold-lt)" }}>Ready to grow?</span>
          <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
        </div>

        <h2 className="fade-up font-semibold leading-[1.12] mb-5"
          style={{ fontFamily: "var(--ff-display)", fontSize: "clamp(32px,4vw,54px)", color: "var(--cream)" }}>
          Stop Leaving Growth{" "}
          <em className="not-italic" style={{ color: "var(--brown-lt)" }}>on the Table</em>
        </h2>

        <p className="fade-up text-base font-light leading-[1.75] max-w-[520px] mx-auto mb-11"
          style={{ color: "var(--silver-dk)" }}>
          Your competitors are building their digital presence right now. Let's make sure you're ahead of them — not catching up.
        </p>

        <div className="fade-up flex items-center justify-center gap-5 flex-wrap">
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 text-[13px] font-medium tracking-[0.1em] uppercase rounded-sm no-underline transition-all duration-200 hover:-translate-y-px"
            style={{ background: "var(--brown)", border: "1px solid var(--brown-lt)", color: "var(--cream)" }}>
            Book a Free Audit →
          </Link>
          <a href="tel:+233000000000"
            className="inline-flex items-center gap-2 text-[13px] tracking-[0.08em] uppercase no-underline transition-all duration-200 group"
            style={{ color: "var(--silver)" }}>
            Call us directly
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}