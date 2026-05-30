"use client";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  // Show button after 3 seconds
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // Stop pulsing after 6 seconds
  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 6000);
    return () => clearTimeout(t);
  }, []);
  
  const phoneNumber = "233544866395"; // +233 54 486 6395 without spaces or +
  const message = encodeURIComponent(
    "Hi Callus Brand Solutions! I found you online and I'd like to discuss growing my business."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  if (!visible) return null;

  return (
    <>
    <style>{`
  @keyframes cbs-wa-pulse {
    0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
    70% { box-shadow: 0 0 0 16px rgba(37, 211, 102, 0); }
    100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
  }
  @keyframes cbs-wa-fadein {
    from { opacity: 0; transform: translateY(20px) scale(0.8); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  .cbs-wa-btn {
    position: fixed;
    bottom: 28px;
    right: 28px;
    z-index: 997;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #25D366;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
    cursor: pointer;
    text-decoration: none;
    border: none;
    animation: cbs-wa-fadein 0.4s ease forwards;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .cbs-wa-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 28px rgba(37, 211, 102, 0.6);
  }
  .cbs-wa-btn.pulse {
    animation: cbs-wa-fadein 0.4s ease forwards,
               cbs-wa-pulse 1.5s ease-out 0.5s 3;
  }
  .cbs-wa-tooltip {
    position: fixed;
    bottom: 38px;
    right: 100px;
    z-index: 996;
    background: var(--ink);
    border: 1px solid rgba(200,160,80,0.2);
    border-radius: 10px;
    padding: 10px 16px;
    font-family: var(--ff-body);
    font-size: 13px;
    color: var(--cream);
    white-space: nowrap;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    animation: cbs-wa-fadein 0.4s ease 0.3s both;
    pointer-events: none;
  }
  .cbs-wa-tooltip::after {
    content: '';
    position: absolute;
    right: -7px;
    top: 50%;
    transform: translateY(-50%);
    border: 7px solid transparent;
    border-right: none;
    border-left-color: rgba(200,160,80,0.2);
  }
  @media (max-width: 680px) {
    .cbs-wa-btn {
      bottom: 16px;
      right: 16px;
      width: 50px;
      height: 50px;
    }
    .cbs-wa-tooltip { display: none; }
  }
`}</style>

      {/* Tooltip — shows for 6 seconds then fades */}
      {pulse && (
        <div className="cbs-wa-tooltip">
          Chat with us on WhatsApp
        </div>
      )}

      {/* Fixed anchor opening tag here */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`cbs-wa-btn${pulse ? " pulse" : ""}`}
        aria-label="Chat with Callus Brand Solutions on WhatsApp"
        title="Chat on WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.505L4 29l7.748-1.802A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3z"
            fill="white"
          />
          <path
            d="M22.003 19.274c-.3-.15-1.768-.872-2.041-.971-.274-.099-.473-.149-.672.15-.2.298-.771.971-.945 1.17-.174.199-.348.224-.647.075-.3-.15-1.265-.466-2.41-1.485-.89-.794-1.491-1.774-1.665-2.073-.174-.3-.019-.461.13-.61.134-.133.3-.347.449-.52.15-.174.2-.299.3-.498.099-.2.05-.374-.025-.523-.075-.15-.672-1.62-.921-2.218-.242-.582-.489-.503-.672-.512l-.573-.01c-.199 0-.522.075-.796.374-.273.3-1.045 1.02-1.045 2.489s1.07 2.888 1.22 3.087c.149.199 2.107 3.215 5.104 4.509.713.308 1.269.492 1.703.629.716.228 1.368.196 1.883.119.574-.086 1.768-.723 2.017-1.42.249-.698.249-1.297.174-1.421-.074-.125-.274-.199-.573-.349z"
            fill="#25D366"
          />
        </svg>
      </a>
    </>
  );
}
