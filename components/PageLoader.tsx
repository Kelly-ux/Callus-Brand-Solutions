
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fade = setTimeout(() => setFading(true), 1200);
    const hide = setTimeout(() => setVisible(false), 1600);
    return () => { clearTimeout(fade); clearTimeout(hide); };
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes cbs-logo-pulse {
          0%, 100% { opacity: 0.4; transform: scale(0.97); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes cbs-line-grow {
          from { width: 0; }
          to { width: 100%; }
        }
        .cbs-loader {
          position: fixed; inset: 0; z-index: 9999;
          background: var(--ink);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 28px;
          transition: opacity 0.4s ease;
        }
        .cbs-loader.fading { opacity: 0; pointer-events: none; }
        
        /* Container to render and secure the image alignment layout */
        .cbs-loader-mark-container {
          position: relative;
          width: 64px; height: 64px;
          animation: cbs-logo-pulse 1s ease-in-out infinite;
        }
        .cbs-loader-mark-container img {
          border-radius: 14px;
        }
        .cbs-loader-name {
          display: flex; flex-direction: column; align-items: center; gap: 4px;
        }
        .cbs-loader-name span:first-child {
          font-family: var(--ff-display); font-size: 20px; font-weight: 600;
          color: var(--silver-lt); letter-spacing: 0.04em;
        }
        .cbs-loader-name span:last-child {
          font-size: 10px; font-weight: 400; letter-spacing: 0.22em;
          color: var(--brown-lt); text-transform: uppercase;
        }
        .cbs-loader-bar {
          width: 120px; height: 1px;
          background: rgba(200,160,80,0.15); border-radius: 1px; overflow: hidden;
        }
        .cbs-loader-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--brown), var(--gold));
          animation: cbs-line-grow 1s ease-out forwards;
        }
      `}</style>
      <div className={`cbs-loader${fading ? " fading" : ""}`} aria-hidden="true">
        {/* Your logo1 image taking the place of the old text grid */}
        <div className="cbs-loader-mark-container">
          <Image
            src="/logo1.png"
            alt="Callus Brand Solutions Logo"
            fill
            sizes="64px"
            priority
            className="object-cover"
          />
        </div>
        <div className="cbs-loader-name">
          <span>Callus</span>
          <span>Brand Solutions</span>
        </div>
        <div className="cbs-loader-bar">
          <div className="cbs-loader-bar-fill" />
        </div>
      </div>
    </>
  );
}
































































































































//Transition 1 with CBS|FirstLogo
// "use client";
// import { useState, useEffect } from "react";

// export default function PageLoader() {
//   const [visible, setVisible] = useState(true);
//   const [fading, setFading] = useState(false);

//   useEffect(() => {
//     const fade = setTimeout(() => setFading(true), 1200);
//     const hide = setTimeout(() => setVisible(false), 1600);
//     return () => { clearTimeout(fade); clearTimeout(hide); };
//   }, []);

//   if (!visible) return null;

//   return (
//     <>
//       <style>{`
//         @keyframes cbs-logo-pulse {
//           0%, 100% { opacity: 0.4; transform: scale(0.97); }
//           50% { opacity: 1; transform: scale(1); }
//         }
//         @keyframes cbs-line-grow {
//           from { width: 0; }
//           to { width: 100%; }
//         }
//         .cbs-loader {
//           position: fixed; inset: 0; z-index: 9999;
//           background: var(--ink);
//           display: flex; flex-direction: column;
//           align-items: center; justify-content: center; gap: 28px;
//           transition: opacity 0.4s ease;
//         }
//         .cbs-loader.fading { opacity: 0; pointer-events: none; }
//         .cbs-loader-mark {
//           width: 64px; height: 64px; border-radius: 14px;
//           background: linear-gradient(135deg, var(--silver) 0%, var(--silver-dk) 60%, var(--silver-lt) 100%);
//           display: flex; align-items: center; justify-content: center;
//           font-family: var(--ff-display); font-size: 26px; font-weight: 700;
//           color: var(--ink); letter-spacing: -0.5px;
//           animation: cbs-logo-pulse 1s ease-in-out infinite;
//         }
//         .cbs-loader-name {
//           display: flex; flex-direction: column; align-items: center; gap: 4px;
//         }
//         .cbs-loader-name span:first-child {
//           font-family: var(--ff-display); font-size: 20px; font-weight: 600;
//           color: var(--silver-lt); letter-spacing: 0.04em;
//         }
//         .cbs-loader-name span:last-child {
//           font-size: 10px; font-weight: 400; letter-spacing: 0.22em;
//           color: var(--brown-lt); text-transform: uppercase;
//         }
//         .cbs-loader-bar {
//           width: 120px; height: 1px;
//           background: rgba(200,160,80,0.15); border-radius: 1px; overflow: hidden;
//         }
//         .cbs-loader-bar-fill {
//           height: 100%;
//           background: linear-gradient(90deg, var(--brown), var(--gold));
//           animation: cbs-line-grow 1s ease-out forwards;
//         }
//       `}</style>
//       <div className={`cbs-loader${fading ? " fading" : ""}`} aria-hidden="true">
//         <div className="cbs-loader-mark">CBS</div>
//         <div className="cbs-loader-name">
//           <span>Callus</span>
//           <span>Brand Solutions</span>
//         </div>
//         <div className="cbs-loader-bar">
//           <div className="cbs-loader-bar-fill" />
//         </div>
//       </div>
//     </>
//   );
// }



//                 //# Logo Spin animation
// //  @keyframes cbs-logo-spin-settle {
// //           0% {
// //             opacity: 0;
// //             transform: scale(0.3) rotate(-540deg);
// //           }
// //           /* Fast spin up and dramatic slowdown */
// //           500% {
// //             opacity: 1;
// //             transform: scale(1.05) rotate(15deg);
// //           }
// //           /* Subtle bounce backward to settle perfectly */
// //           85% {
// //             transform: scale(0.98) rotate(-3deg);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: scale(1) rotate(0deg);
// //           }
// //         }


