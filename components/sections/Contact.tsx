"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const contactItems = [
  { icon: "📍", label: "Location", value: "Accra, Greater Accra, Ghana" },
  { icon: "✉️", label: "Email", value: "cbscallusbrandsolutions@gmail.com" },
  { icon: "📞", label: "Phone", value: "+233 54 486 6395" },
  { icon: "🕐", label: "Response time", value: "Within 24 hours, Mon – Fri" },
];

const services = [
  "Web Development", "Social Media Management", "Paid Advertising",
  "Content & SEO", "Mobile App Development", "Full Service Retainer",
  "Analytics & Reporting", "B2B Matchmaking", "Local Search Mastery",
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", business: "",
  });

  // Scroll animation observer
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

  // Turnstile callbacks
  useEffect(() => {
    (window as any).onTurnstileSuccess = (token: string) => {
      setTurnstileToken(token);
    };
    (window as any).onTurnstileExpired = () => {
      setTurnstileToken("");
    };
    return () => {
      delete (window as any).onTurnstileSuccess;
      delete (window as any).onTurnstileExpired;
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", service: "", business: "" });
        setTurnstileToken("");
        (window as any).turnstile?.reset();
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        const data = await res.json();
        setStatus("error");
        console.error(data.error);
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-pad" ref={ref}>
      <div className="cbs-container">
        <div className="contact-grid">

          {/* Left */}
          <div className="contact-intro">
            <div className="eyebrow fade-up">
              <div className="eyebrow-line" /><span>Get in Touch</span>
            </div>
            <h2 className="fade-up" style={{ marginBottom: "20px" }}>
              Let's Talk About <em>Your Brand</em>
            </h2>
            <p className="fade-up">
              Fill in the form and we'll respond within 24 hours with an initial
              assessment of your brand's current digital presence — free of charge.
            </p>
            <div className="contact-items fade-up">
              {contactItems.map(item => (
                <div key={item.label} className="contact-item">
                  <div className="contact-item-icon" aria-hidden="true">{item.icon}</div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-val">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="fade-up">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="c-name">Full name</label>
                  <input id="c-name" type="text" className="form-input"
                    placeholder="Henry Addo" value={form.name} required
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="c-email">Email address</label>
                  <input id="c-email" type="email" className="form-input"
                    placeholder="henry@yourbrand.com" value={form.email} required
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="c-phone">Phone number</label>
                  <input id="c-phone" type="tel" className="form-input"
                    placeholder="+233 54 486 6395" value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="c-service">Service interested in</label>
                  <select id="c-service" className="form-select"
                    value={form.service}
                    onChange={e => setForm(f => ({ ...f, service: e.target.value }))}>
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="c-business">Tell us about your business</label>
                <textarea id="c-business" className="form-textarea" rows={5}
                  placeholder="What does your business do? Who are your customers? What's your biggest marketing challenge right now?"
                  value={form.business} required
                  onChange={e => setForm(f => ({ ...f, business: e.target.value }))} />
              </div>

              {/* Turnstile widget */}
              <div
                className="cf-turnstile"
                data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                data-theme="dark"
                data-callback="onTurnstileSuccess"
                data-expired-callback="onTurnstileExpired"
                style={{ marginBottom: "8px" }}
              />

              <button
                type="submit"
                className="form-submit"
                disabled={status === "sending" || !turnstileToken}
              >
                {status === "sending" ? "Sending…" : "Send message →"}
              </button>

              {status === "sent" && (
                <p style={{ fontSize: "13px", color: "var(--gold)", marginTop: "8px" }}>
                  ✦ Message sent. We'll be in touch within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p style={{ fontSize: "13px", color: "#e87070", marginTop: "8px" }}>
                  Something went wrong. Please email us at callusbrandsolutions@gmail.com
                </p>
              )}
            </form>
          </div>

        </div>
      </div>

      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
    </section>
  );
}