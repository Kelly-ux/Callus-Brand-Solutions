"use client";
import { useEffect, useRef } from "react";

const posts = [
  { letter:"M", cat:"Social Media", date:"May 12, 2025", title:"Why Ghanaian Businesses Are Underusing TikTok in 2025", excerpt:"TikTok's organic reach in West Africa is still exceptional. Here's how to capture it before everyone else does.", slug:"ghanaian-businesses-tiktok-2025" },
  { letter:"P", cat:"Paid Ads", date:"April 28, 2025", title:"How to Run a GHS 1,000 Meta Ad Campaign That Actually Works", excerpt:"A practical guide to audience targeting, creative formats, and optimisation specifically for the Ghanaian market.", slug:"meta-ad-campaign-ghana" },
  { letter:"S", cat:"Strategy", date:"April 10, 2025", title:"The 5 Signs Your Business Needs a Marketing Agency (Not a Freelancer)", excerpt:"There's a right time to hire a freelancer and a right time to hire a firm. Here's how to know the difference.", slug:"marketing-agency-vs-freelancer" },
];

export default function BlogPreview() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    ref.current?.querySelectorAll(".fade-up").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="blog" className="section-pad" ref={ref}>
      <div className="cbs-container">
        <div className="blog-header fade-up">
          <div>
            <div className="eyebrow"><div className="eyebrow-line" /><span>Insights</span></div>
            <h2>From the <em>CBS Blog</em></h2>
          </div>
          <a href="#" className="btn-secondary">All articles <span>→</span></a>
        </div>
        <div className="blog-grid">
          {posts.map(p => (
            <article key={p.slug} className="blog-card fade-up" tabIndex={0}>
              <div className="blog-thumb">
                <div className="blog-thumb-letter" aria-hidden="true">{p.letter}</div>
                <div className="blog-thumb-cat">{p.cat}</div>
              </div>
              <div className="blog-body">
                <div className="blog-date">{p.date}</div>
                <h3 className="blog-title">{p.title}</h3>
                <p className="blog-excerpt">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
