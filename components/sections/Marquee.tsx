export default function Marquee() {
  const items = ["Social Media Management","Web Development","Brand Strategy","SEO & Content","Paid Advertising","Email Marketing","Analytics & Reporting"];
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-inner">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="marquee-item">
            <span>{item}</span><span className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}
