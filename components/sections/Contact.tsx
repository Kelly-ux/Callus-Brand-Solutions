"use client";
import { useEffect, useRef, useState } from "react";

const contactItems = [
  { icon: "📍", label: "Location", value: "Accra, Greater Accra, Ghana" },
  { icon: "✉️", label: "Email", value: "hello@callusbrandsolutions.com" },
  { icon: "📞", label: "Phone", value: "+233 (0) 000 000 000" },
  { icon: "🕐", label: "Response time", value: "Within 24 hours, Mon – Fri" },
];

const services = [
  "Web Development",
  "Social Media Management",
  "Paid Advertising",
  "Content & SEO",
  "Mobile App Development",
  "Full Service Retainer",
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", business: "",
  });

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", service: "", business: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(200,160,80,0.15)",
    borderRadius: "6px",
    padding: "14px 16px",
    color: "var(--cream)",
    fontFamily: "var(--ff-body)",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: "var(--silver-dk)",
    display: "block",
    marginBottom: "6px",
  };

  return (
    <section id="contact" ref={ref} className="py-[100px]">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left — info */}
          <div>
            <div className="fade-up flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase"
                style={{ color: "var(--gold-lt)" }}>Get in Touch</span>
            </div>
            <h2 className="fade-up font-semibold leading-[1.12] mb-5"
              style={{ fontFamily: "var(--ff-display)", fontSize: "clamp(32px,4vw,54px)", color: "var(--cream)" }}>
              Let's Talk About{" "}
              <em className="not-italic" style={{ color: "var(--brown-lt)" }}>Your Brand</em>
            </h2>
            <p className="fade-up text-base font-light leading-[1.8] mb-10" style={{ color: "var(--silver-dk)" }}>
              Fill in the form and we'll respond within 24 hours with an initial assessment of your brand's current digital presence — free of charge.
            </p>

            <div className="fade-up flex flex-col gap-4">
              {contactItems.map((item) => (
                <div key={item.label}
                  className="flex items-start gap-4 p-4 rounded-lg"
                  style={{ border: "1px solid rgba(200,160,80,0.1)", background: "rgba(255,255,255,0.02)" }}>
                  <span className="text-xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                  <div>
                    <div className="text-[11px] tracking-[0.12em] uppercase mb-1" style={{ color: "var(--gold)" }}>
                      {item.label}
                    </div>
                    <div className="text-sm" style={{ color: "var(--cream)" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="fade-up">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" style={labelStyle}>Full name</label>
                  <input
                    id="name" type="text" placeholder="Kwame Asante"
                    value={form.name} required
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = "rgba(200,160,80,0.45)"}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(200,160,80,0.15)"}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>Email address</label>
                  <input
                    id="email" type="email" placeholder="kwame@yourbrand.com"
                    value={form.email} required
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = "rgba(200,160,80,0.45)"}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(200,160,80,0.15)"}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" style={labelStyle}>Phone number</label>
                  <input
                    id="phone" type="tel" placeholder="+233 000 000 000"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = "rgba(200,160,80,0.45)"}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(200,160,80,0.15)"}
                  />
                </div>
                <div>
                  <label htmlFor="service" style={labelStyle}>Service interested in</label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={e => (e.target as HTMLSelectElement).style.borderColor = "rgba(200,160,80,0.45)"}
                    onBlur={e => (e.target as HTMLSelectElement).style.borderColor = "rgba(200,160,80,0.15)"}
                  >
                    <option value="">Select a service</option>
                    {services.map(s => (
                      <option key={s} value={s} style={{ background: "var(--ink)" }}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="business" style={labelStyle}>Tell us about your business</label>
                <textarea
                  id="business"
                  placeholder="What does your business do? Who are your customers? What's your biggest marketing challenge right now?"
                  value={form.business} required
                  rows={5}
                  onChange={e => setForm(f => ({ ...f, business: e.target.value }))}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                  onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = "rgba(200,160,80,0.45)"}
                  onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = "rgba(200,160,80,0.15)"}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="self-start px-10 py-4 text-[13px] font-medium tracking-[0.1em] uppercase rounded-sm transition-all duration-200 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "var(--brown)", border: "1px solid var(--brown-lt)", color: "var(--cream)", cursor: status === "sending" ? "not-allowed" : "pointer" }}
              >
                {status === "sending" ? "Sending…" : "Send message →"}
              </button>

              {status === "sent" && (
                <p className="text-sm" style={{ color: "var(--gold)" }}>
                  ✦ Message sent. We'll be in touch within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm" style={{ color: "#e87070" }}>
                  Something went wrong. Please email us directly at hello@callusbrandsolutions.com
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}