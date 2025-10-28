// import React from "react";

// const trendingCourses = [
//   "PMP Certification",
//   "CSM Certification",
//   "Data Science with Python",
//   "AWS Certification",
//   "CEH Certification",
//   "AWS Technical Essentials",
//   "AWS DevOps Certification",
//   "ITIL Certification",
//   "AZ 900 Certification",
//   "CompTIA Security+",
//   "AZ 400 Certification",
//   "SAFe Certification",
//   "CISSP Certification"
// ];

// function renderLinks(arr) {
//   return arr.map((item, idx) => (
//     <React.Fragment key={item}>
//       <a href="#" className="footer-link">{item}</a>
//       {idx !== arr.length - 1 && <span className="footer-link-divider">|</span>}
//     </React.Fragment>
//   ));
// }

// export default function FooterLinks() {
//   return (
//     <div className="footer-links-section">
//       <div className="footer-links-info">
//         <span className="footer-links-brand">HG's TalentMinds</span>
//         <span className="footer-links-desc">
//           Your trusted platform for upskilling, career growth, and expert-led learning.
//         </span>
//       </div>
//       <div className="footer-links-row">{renderLinks(trendingCourses)}</div>
//       <style>{`
//         .footer-links-section {
//           background: #181a20;
//           color: #b6c6e3;
//           padding: 0 0 0 0;
//           margin: 0;
//         }
//         .footer-links-info {
//           text-align: center;
//           padding: 16px 0;
//         }
//         .footer-links-brand {
//           display: block;
//           font-size: 1.5rem;
//           font-weight: 700;
//           margin-bottom: 8px;
//         }
//         .footer-links-desc {
//           display: block;
//           font-size: 1rem;
//           font-weight: 400;
//           margin-bottom: 16px;
//         }
//         .footer-links-row {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 12px;
//           font-size: 1.25rem;
//           font-weight: 600;
//           justify-content: flex-start;
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 24px 24px 18px 24px;
//         }
//         .footer-link {
//           color: #e0eafc;
//           text-decoration: none;
//           transition: color 0.2s;
//         }
//         .footer-link:hover {
//           color: #38bdf8;
//           text-decoration: underline;
//         }
//         .footer-link-divider {
//           color: #444a57;
//           margin: 0 8px;
//         }
//         @media (max-width: 900px) {
//           .footer-links-row {
//             font-size: 1.05rem;
//             gap: 8px;
//             padding: 18px 8vw 12px 8vw;
//           }
//         }
//         @media (max-width: 600px) {
//           .footer-links-row {
//             flex-direction: column;
//             gap: 2px;
//             padding: 12px 4vw 8px 4vw;
//           }
//           .footer-link-divider {
//             display: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }