export default function Marquee() {
  const items = [
    "Social Media Management",
    "Web Development",
    "Brand Strategy",
    "SEO & Content",
    "Paid Advertising",
    "Mobile Apps",
    "Email Marketing",
    "Analytics & Reporting",
  ];

  return (
    <div
      className="overflow-hidden relative py-3.5"
      style={{
        background: "var(--brown-dk)",
        borderTop: "1px solid rgba(200,160,80,0.15)",
        borderBottom: "1px solid rgba(200,160,80,0.15)",
      }}
      aria-hidden="true"
    >
      <div
        className="flex w-max"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-7 px-7 whitespace-nowrap"
          >
            <span
              className="text-[11px] font-medium tracking-[0.22em] uppercase"
              style={{ color: "var(--brown-lt)" }}
            >
              {item}
            </span>
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: "var(--gold)" }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}