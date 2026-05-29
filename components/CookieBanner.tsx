"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cbs-cookie-consent");
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem("cbs-cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cbs-cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes cbs-cookie-slide {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cbs-cookie {
          position: fixed;
          bottom: 100px;
          left: 28px;
          z-index: 998;
          max-width: 400px;
          background: rgba(20,14,9,0.96);
          border: 1px solid rgba(200,160,80,0.2);
          border-radius: 14px;
          padding: 24px;
          backdrop-filter: blur(16px);
          box-shadow: 0 8px 40px rgba(0,0,0,0.4);
          animation: cbs-cookie-slide 0.4s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }
        .cbs-cookie-title {
          font-family: var(--ff-display);
          font-size: 17px;
          font-weight: 600;
          color: var(--cream);
          margin-bottom: 8px;
        }
        .cbs-cookie-text {
          font-size: 13px;
          color: var(--silver-dk);
          line-height: 1.6;
          font-weight: 300;
          margin-bottom: 20px;
        }
        .cbs-cookie-text a {
          color: var(--gold);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .cbs-cookie-actions {
          display: flex;
          gap: 10px;
        }
        .cbs-cookie-accept {
          flex: 1;
          padding: 10px 16px;
          background: var(--brown);
          border: 1px solid var(--brown-lt);
          color: var(--cream);
          border-radius: 6px;
          font-family: var(--ff-body);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background .2s;
        }
        .cbs-cookie-accept:hover { background: var(--brown-lt); }
        .cbs-cookie-decline {
          padding: 10px 16px;
          background: transparent;
          border: 1px solid rgba(200,160,80,0.15);
          color: var(--silver-dk);
          border-radius: 6px;
          font-family: var(--ff-body);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: border-color .2s, color .2s;
        }
        .cbs-cookie-decline:hover {
          border-color: rgba(200,160,80,0.3);
          color: var(--cream);
        }
        @media (max-width: 680px) {
          .cbs-cookie {
            left: 16px;
            right: 16px;
            bottom: 90px;
            max-width: none;
          }
        }
      `}</style>

      <div className="cbs-cookie" role="dialog" aria-label="Cookie consent">
        <div className="cbs-cookie-title">🍪 We use cookies</div>
        <div className="cbs-cookie-text">
          We use cookies for analytics and to improve your experience.
          By accepting you consent to our use of{" "}
          <a href="#" onClick={e => e.preventDefault()}>cookies policy</a>.
        </div>
        <div className="cbs-cookie-actions">
          <button className="cbs-cookie-accept" onClick={accept}>
            Accept all
          </button>
          <button className="cbs-cookie-decline" onClick={decline}>
            Decline
          </button>
        </div>
      </div>
    </>
  );
}