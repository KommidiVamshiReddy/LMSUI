import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="tm-header">
      <nav className="tm-nav">
       
        <Link to="/" className="tm-logo">
          <span style={{ color: "#fbbf24", fontWeight: 800 }}>HG's</span>
          <span style={{ color: "#2563eb", fontWeight: 800 }}>TalentMinds</span>
        </Link>

       
        <button
          className="tm-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        
        <div className={`tm-links ${menuOpen ? "open" : ""}`}>
         
          <Link to="/explore" className="tm-explore-link" onClick={() => setMenuOpen(false)}>
            <span className="tm-explore-icon">
              <svg width="20" height="20" fill="none">
                <rect x="2" y="2" width="4" height="4" rx="1.5" fill="#2563eb" />
                <rect x="8" y="2" width="4" height="4" rx="1.5" fill="#2563eb" />
                <rect x="14" y="2" width="4" height="4" rx="1.5" fill="#2563eb" />
                <rect x="2" y="8" width="4" height="4" rx="1.5" fill="#2563eb" />
                <rect x="8" y="8" width="4" height="4" rx="1.5" fill="#2563eb" />
                <rect x="14" y="8" width="4" height="4" rx="1.5" fill="#2563eb" />
                <rect x="2" y="14" width="4" height="4" rx="1.5" fill="#2563eb" />
                <rect x="8" y="14" width="4" height="4" rx="1.5" fill="#2563eb" />
                <rect x="14" y="14" width="4" height="4" rx="1.5" fill="#2563eb" />
              </svg>
            </span>
            Explore
          </Link>

         
          <div className="tm-search">
            <span className="tm-search-icon">
              <svg width="18" height="18" fill="none">
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  stroke="#64748b"
                  strokeWidth="2"
                />
                <path
                  d="M16 16l-3-3"
                  stroke="#64748b"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search skills, courses, mentors..."
            />
          </div>

          <Link to="/enterprise" onClick={() => setMenuOpen(false)}>Enterprise</Link>
          <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link to="/community" onClick={() => setMenuOpen(false)}>Community</Link>

         
          <div
            className={`tm-more-wrapper ${moreOpen ? "open" : ""}`}
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
            tabIndex={0}
          >
            <span className="tm-more-label">
              More <span className="tm-more-arrow">{moreOpen ? "▲" : "▼"}</span>
            </span>
            <div className="tm-more-dropdown">
              <Link to="/reviews">Learner Stories</Link>
              <Link to="/hire">Hire Talent</Link>
              <Link to="/become-mentor">Become a Mentor</Link>
              <Link to="/partnerships">Partnerships</Link>
              <Link to="/scholarships">Scholarships</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/support">Support</Link>
            </div>
          </div>

       
          <Link to="/login" className="tm-login-btn" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </div>
      </nav>

      
      <style>{`
        .tm-header {
          background: #fff;
          border-bottom: 1.5px solid #e0e7ef;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .tm-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1300px;
          margin: 0 auto;
          height: 70px;
          padding: 0 32px;
        }
        .tm-logo {
          font-size: 2rem;
          font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Hamburger */
        .tm-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          width: 36px;
          height: 36px;
        }
        .tm-hamburger span {
          display: block;
          height: 3px;
          width: 26px;
          background: #2563eb;
          border-radius: 2px;
        }

        /* Links Container */
        .tm-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        /* Explore link (simple) */
        .tm-explore-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.05rem;
          font-weight: 600;
          color: #2563eb;
          text-decoration: none;
        }
        .tm-explore-link:hover {
          color: #1e40af;
        }

        /* Search */
        .tm-search {
          background: #f8fafc;
          border: 1.5px solid #cbd5e1;
          border-radius: 10px;
          display: flex;
          align-items: center;
          padding: 0 12px;
          height: 44px;
          min-width: 240px;
        }
        .tm-search-icon {
          margin-right: 8px;
          display: flex;
          align-items: center;
        }
        .tm-search input {
          border: none;
          background: transparent;
          outline: none;
          font-size: 1rem;
          color: #22223b;
          width: 100%;
        }

        /* Links */
        .tm-links a {
          color: #22223b;
          font-size: 1.05rem;
          text-decoration: none;
          font-weight: 500;
          padding: 6px 0;
          transition: color 0.2s;
        }
        .tm-links a:hover {
          color: #2563eb;
        }

        /* More Dropdown */
        .tm-more-wrapper {
          position: relative;
          cursor: pointer;
          outline: none;
        }
        .tm-more-label {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 1.05rem;
        }
        .tm-more-arrow {
          font-size: 0.9rem;
        }
        .tm-more-dropdown {
          position: absolute;
          top: 100%;  /* directly under the label */
          left: 0;
          background: #fff;
          color: #22223b;
          min-width: 220px;
          border-radius: 12px;
          box-shadow: 0 4px 24px rgba(37,99,235,0.12);
          display: none;
          flex-direction: column;
          padding: 8px 0;
          z-index: 100;
        }
        .tm-more-wrapper.open .tm-more-dropdown {
          display: flex;
        }
        .tm-more-dropdown a {
          padding: 12px 20px;
          font-size: 0.95rem;
          text-decoration: none;
          color: #22223b;
          transition: background 0.2s;
          white-space: nowrap;
        }
        .tm-more-dropdown a:hover {
          background: #f1f5f9;
        }

        /* Login */
        .tm-login-btn {
          border: none;
          color: #2563eb;
          background: linear-gradient(90deg, #fff 70%, #f1f5f9 100%);
          border-radius: 8px;
          padding: 9px 24px;
          font-weight: 700;
          font-size: 1rem;
          box-shadow: 0 2px 8px rgba(37,99,235,0.08);
          transition: background 0.2s, color 0.2s;
          text-decoration: none;
        }
        .tm-login-btn:hover {
          background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
          color: #fff;
        }

        /* Tablet */
        @media (max-width: 1050px) {
          .tm-search {
            min-width: 160px;
            height: 38px;
          }
          .tm-links {
            gap: 18px;
          }
        }

        /* Mobile */
        @media (max-width: 900px) {
          .tm-nav {
            flex-direction: row;
            height: auto;
            padding: 10px 12px;
          }
          .tm-logo {
            font-size: 1.3rem;
          }
          .tm-hamburger {
            display: flex;
          }
          .tm-links {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: #fff;
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            padding: 12px 0;
            box-shadow: 0 2px 16px rgba(37,99,235,0.08);
            display: none;
            z-index: 999;
          }
          .tm-links.open {
            display: flex;
          }
          .tm-links > * {
            margin: 10px 20px;
          }
          .tm-search {
            width: calc(100% - 40px);
            margin: 8px 20px;
          }
          .tm-more-dropdown {
            left: 20px;
          }
        }

        /* Small Mobile */
        @media (max-width: 500px) {
          .tm-logo {
            font-size: 1rem;
          }
          .tm-login-btn, .tm-explore-link {
            padding: 7px 14px;
            font-size: 0.95rem;
          }
          .tm-search {
            min-width: 100%;
          }
        }
      `}</style>
    </header>
  );
}
