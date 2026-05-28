"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="cbs-footer">
      <div className="cbs-container">
        <div className="footer-inner">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#hero" className="nav-logo" aria-label="Callus Brand Solutions">
              <div className="nav-logo-mark" aria-hidden="true">CBS</div>
              <div className="nav-name">
                <span className="nav-name-main">Callus</span>
                <span className="nav-name-sub">Brand Solutions</span>
              </div>
            </a>
            <p>We build the brands that build Ghana. Full-service digital marketing for businesses serious about growth.</p>
            <div className="footer-socials" aria-label="Social media links">
              {["ig","𝕏","li","tt","fb"].map((s, i) => (
                <a key={i} href="#" className="footer-social" aria-label={s} title={s}>{s}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              {["Web Development","Social Media","Paid Advertising","Content & SEO","Analytics"].map(item => (
                <li key={item}><a href="#services">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              {[
                { label:"About CBS", href:"#about" },
                { label:"Our Work", href:"#portfolio" },
                { label:"Pricing", href:"#pricing" },
                { label:"Insights Blog", href:"#blog" },
                { label:"Contact", href:"#contact" },
              ].map(item => (
                <li key={item.label}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div className="footer-col">
            <h4>Get Started</h4>
            <ul className="footer-links">
              {[
                { label:"Free brand audit", href:"#contact" },
                { label:"View pricing", href:"#pricing" },
                { label:"Book a call", href:"#contact" },
                { label:"Partnership enquiries", href:"#contact" },
              ].map(item => (
                <li key={item.label}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-copy">© {year} Callus Brand Solutions. All rights reserved. Accra, Ghana.</div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}