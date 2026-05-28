"use client";
import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. Our retainers are month-to-month with no lock-in contracts. We ask for 30 days notice before cancellation so we can wrap up any ongoing work cleanly. We're confident enough in our results that we don't need to trap clients.",
  },
  {
    q: "Who owns the content you create?",
    a: "You do. All content, designs, copy, and assets we produce for your brand belong to you from the moment they're delivered. If you ever leave, you take everything with you.",
  },
  {
    q: "What if I'm not happy with the results?",
    a: "We define KPIs together at the start of every engagement. If we're not hitting them, we have an honest conversation about why and what to change — before you consider cancelling. In our experience, 90% of underperformance is a strategy issue we can fix, not a reason to stop.",
  },
  {
    q: "How quickly will I see results?",
    a: "Social media and paid ads typically show measurable results within 30–60 days. SEO takes 3–6 months to build meaningful organic traffic. We set realistic timelines upfront so you always know what to expect and when.",
  },
  {
    q: "Do I need to be involved day-to-day?",
    a: "No — that's exactly the point. We handle everything and send you a monthly report. We'll need your input for approvals and brand direction at the start, but once we know your voice, most clients spend less than 2 hours a month on marketing.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes, anytime. Most clients start on Starter or Growth and upgrade as they see results. We'll proactively recommend an upgrade when we see you're leaving growth on the table.",
  },
  {
    q: "Do you work with businesses outside Accra?",
    a: "Yes. We work with businesses across Ghana — Kumasi, Takoradi, Tema, and beyond. All collaboration happens remotely via WhatsApp, email, and monthly video calls. Location has never been an obstacle.",
  },
  {
    q: "What's included in the free brand audit?",
    a: "We review your current website, social media presence, competitor positioning, and search visibility. You get a written summary of what's working, what isn't, and what we'd prioritise first. It takes us about 2 hours and costs you nothing.",
  },
];

export default function PricingFAQ() {
  const ref = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    ref.current?.querySelectorAll(".fade-up").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: "linear-gradient(180deg, #0f0905 0%, var(--ink) 100%)", padding: "80px 0 100px" }}>
      <div className="cbs-container">

        {/* Header */}
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <div className="eyebrow-line" />
            <span>Common Questions</span>
            <div className="eyebrow-line" />
          </div>
          <h2>Everything You Want <em>to Know</em></h2>
          <p style={{ fontSize: "16px", color: "var(--silver-dk)", fontWeight: 300, maxWidth: "520px", margin: "16px auto 0", lineHeight: 1.75 }}>
            No sales fluff. Straight answers to the questions every smart business owner asks before signing.
          </p>
        </div>

        {/* FAQ items */}
        <div className="fade-up" style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                border: `1px solid ${openIndex === i ? "rgba(200,160,80,0.35)" : "rgba(200,160,80,0.1)"}`,
                borderRadius: "10px",
                background: openIndex === i ? "rgba(123,79,46,0.08)" : "rgba(255,255,255,0.02)",
                overflow: "hidden",
                transition: "border-color .25s, background .25s",
              }}
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 24px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "16px",
                }}
              >
                <span style={{
                  fontFamily: "var(--ff-display)",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: openIndex === i ? "var(--cream)" : "var(--silver)",
                  lineHeight: 1.3,
                  transition: "color .2s",
                }}>
                  {faq.q}
                </span>
                <span style={{
                  flexShrink: 0,
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  border: "1px solid rgba(200,160,80,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--gold)",
                  fontSize: "18px",
                  fontWeight: 300,
                  transition: "transform .25s, background .2s",
                  transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  background: openIndex === i ? "rgba(200,160,80,0.1)" : "transparent",
                }}>
                  +
                </span>
              </button>

              {/* Answer */}
              <div style={{
                maxHeight: openIndex === i ? "300px" : "0",
                overflow: "hidden",
                transition: "max-height .35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}>
                <p style={{
                  padding: "0 24px 20px",
                  fontSize: "15px",
                  color: "var(--silver-dk)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  margin: 0,
                }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="fade-up" style={{ textAlign: "center", marginTop: "56px" }}>
          <p style={{ fontSize: "15px", color: "var(--silver-dk)", marginBottom: "20px" }}>
            Still have questions? We respond within 4 business hours.
          </p>
          <a href="#contact" className="btn-primary">Ask us anything →</a>
        </div>

      </div>
    </section>
  );
}