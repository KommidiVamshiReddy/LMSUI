import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="tm-footer">
      <div className="tm-footer-main">
     
        <div className="tm-footer-col tm-footer-brand">
          <div className="tm-footer-logo">
            <span style={{ color: "#fff", fontWeight: 900, fontSize: "2rem" }}>HG's TalentMinds</span>
          </div>
          <p>
            Empowering learners with industry-ready skills, expert mentors, and a vibrant tech community.
          </p>
          <div className="tm-footer-socials">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="22" height="22" fill="none"><path d="M21 4.5a8.38 8.38 0 0 1-2.36.65A4.13 4.13 0 0 0 20.44 3c-.8.47-1.7.81-2.65.99A4.15 4.15 0 0 0 11 8.14c0 .32.04.64.1.94C7.72 8.9 4.84 7.38 2.86 4.98a4.13 4.13 0 0 0-.56 2.09c0 1.44.74 2.71 1.87 3.46a4.07 4.07 0 0 1-1.88-.52v.05c0 2.01 1.43 3.68 3.33 4.06-.35.1-.72.16-1.1.16-.27 0-.52-.03-.77-.07.52 1.62 2.04 2.8 3.83 2.83A8.32 8.32 0 0 1 2 19.13c-.26 0-.52-.02-.77-.05A11.72 11.72 0 0 0 7.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.18 8.18 0 0 0 21 4.5z" fill="#38bdf8"/></svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="22" height="22" fill="none"><rect width="22" height="22" rx="4" fill="#38bdf8"/><path d="M7.5 8.5v5M7.5 13.5v.01M11 8.5v5M11 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="22" height="22" fill="none"><rect width="22" height="22" rx="4" fill="#38bdf8"/><path d="M14 8.5h-1.5V7.5c0-.276.224-.5.5-.5h1V5.5h-1.5A2.5 2.5 0 0 0 10 8v1.5H9V11h1V16h2v-5h1l.5-1.5z" fill="#fff"/></svg>
            </a>
          </div>
        </div>

        <div className="tm-footer-col">
          <h4>Explore</h4>
          <Link to="/courses">All Courses</Link>
          <Link to="/free-courses">Free Courses</Link>
          <Link to="/career-paths">Career Paths</Link>
          <Link to="/mentors">Mentors</Link>
          <Link to="/events">Events</Link>
        </div>

      
        <div className="tm-footer-col">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/partnerships">Partnerships</Link>
          <Link to="/press">Press</Link>
          <Link to="/blog">Blog</Link>
        </div>

    
        <div className="tm-footer-col">
          <h4>Support</h4>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/help-center">Help Center</Link>
          <Link to="/community">Community</Link>
          <Link to="/report-issue">Report an Issue</Link>
        </div>

        
        <div className="tm-footer-col">
          <h4>Legal</h4>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
          <Link to="/accessibility">Accessibility</Link>
        </div>
      </div>
      <div className="tm-footer-bottom">
        <span>© {new Date().getFullYear()} TalentMinds. All rights reserved.</span>
        <span>
          Made with <span style={{ color: "#fbbf24" }}>♥</span> for learners.
        </span>
      </div>
      <style>{`
        .tm-footer {
          background: #181a20;
          color: #b6c6e3;
          padding: 0 0 0 0;
          border-top: none;
          margin-top: 0;
        }
        .tm-footer-main {
          display: flex;
          flex-wrap: wrap;
          gap: 48px;
          max-width: 1300px;
          margin: 0 auto;
          padding: 48px 24px 32px 24px;
          justify-content: space-between;
        }
        .tm-footer-col {
          min-width: 180px;
          flex: 1 1 180px;
          margin-bottom: 18px;
        }
        .tm-footer-brand {
          flex: 1.5 1 260px;
          min-width: 220px;
        }
        .tm-footer-logo {
          margin-bottom: 16px;
        }
        .tm-footer-col h4 {
          color: #fff;
          font-size: 1.13rem;
          font-weight: 800;
          margin-bottom: 18px;
        }
        .tm-footer-col a {
          display: block;
          color: #b6c6e3;
          text-decoration: none;
          margin-bottom: 10px;
          font-size: 1.04rem;
          transition: color 0.2s;
        }
        .tm-footer-col a:hover {
          color: #38bdf8;
        }
        .tm-footer-brand p {
          color: #b6c6e3;
          font-size: 1.08rem;
          margin-bottom: 18px;
        }
        .tm-footer-socials {
          display: flex;
          gap: 16px;
        }
        .tm-footer-socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #23263a;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          transition: background 0.2s;
        }
        .tm-footer-socials a:hover {
          background: #38bdf8;
        }
        .tm-footer-socials svg {
          width: 22px;
          height: 22px;
        }
        .tm-footer-bottom {
          border-top: 1.5px solid #23263a;
          padding: 18px 24px;
          color: #b6c6e3;
          font-size: 1.01rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1300px;
          margin: 0 auto;
        }
        @media (max-width: 900px) {
          .tm-footer-main {
            flex-direction: column;
            gap: 18px;
            padding: 32px 8vw 18px 8vw;
          }
          .tm-footer-bottom {
            flex-direction: column;
            gap: 8px;
            text-align: center;
            padding: 14px 8vw;
          }
        }
        @media (max-width: 600px) {
          .tm-footer-main {
            padding: 18px 4vw 8px 4vw;
          }
        }
      `}</style>
    </footer>
  );
}
