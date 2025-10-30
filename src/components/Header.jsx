import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // refs to detect outside clicks
  const menuRef = useRef(null);
  const moreRef = useRef(null);
  const searchRef = useRef(null);
  const location = useLocation();

  // close menus when route changes (clicking Login or any nav link)
  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
    setSearchOpen(false);
  }, [location]);

  // close menus when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false);
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // helper to close everything from link onClick
  function closeAll() {
    setMenuOpen(false);
    setMoreOpen(false);
    setSearchOpen(false);
  }

  return (
    <header className="tm-header">
      <nav className="tm-nav" ref={menuRef}>
        <Link to="/" className="tm-logo" onClick={closeAll}>
          <span style={{ color: "#fbbf24", fontWeight: 800 }}>HG's</span>
          <span style={{ color: "#2563eb", fontWeight: 800, marginLeft: 6 }}>TalentMinds</span>
        </Link>

        <div className="tm-mid">
          {/* Explore visible on larger screens */}
          <Link to="/explore" className="tm-explore-link" onClick={closeAll}>
            <span className="tm-explore-icon" aria-hidden>
              <svg width="18" height="18" fill="none" aria-hidden>
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
            <span className="tm-explore-text">Explore</span>
          </Link>
        </div>

        {/* Search / controls */}
        <div className="tm-controls">
          {/* Mobile explore: show icon + text beside hamburger */}
          <Link to="/explore" className="tm-explore-mobile" onClick={closeAll} aria-label="Explore">
            <span className="tm-explore-mobile-icon" aria-hidden>
              <svg width="18" height="18" fill="none" aria-hidden>
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
            <span className="tm-explore-mobile-text">Explore</span>
          </Link>

          <div className={`tm-search ${searchOpen ? "open" : ""}`} ref={searchRef}>
            <button
              className="tm-search-toggle"
              aria-label="Toggle search"
              onClick={() => setSearchOpen((s) => !s)}
            >
              <svg width="18" height="18" fill="none" aria-hidden>
                <circle cx="8" cy="8" r="7" stroke="#64748b" strokeWidth="2" />
                <path d="M16 16l-3-3" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search skills, courses, mentors..."
              aria-label="Search"
              onFocus={() => setSearchOpen(true)}
            />
            <button className="tm-search-close" onClick={() => setSearchOpen(false)} aria-hidden>
              ✕
            </button>
          </div>

          <button
            className="tm-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`tm-links ${menuOpen ? "open" : ""}`}>
          <Link to="/resources" onClick={closeAll}>
            resources
          </Link>
          <Link to="/business" onClick={closeAll}>
            For Business
          </Link>

          <div
            className={`tm-more-wrapper ${moreOpen ? "open" : ""}`}
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
            tabIndex={0}
            ref={moreRef}
          >
            <button
              className="tm-more-btn"
              onClick={() => setMoreOpen((s) => !s)}
              aria-haspopup="true"
              aria-expanded={moreOpen}
            >
              More <span className="tm-more-arrow">{moreOpen ? "▲" : "▼"}</span>
            </button>
            <div className="tm-more-dropdown" role="menu" aria-hidden={!moreOpen}>
              <Link to="/reviews" onClick={closeAll}>
                Learner Stories
              </Link>
              <Link to="/hire" onClick={closeAll}>
                Hire Talent
              </Link>
              <Link to="/become-mentor" onClick={closeAll}>
                Become a Mentor
              </Link>
              <Link to="/partnerships" onClick={closeAll}>
                Partnerships
              </Link>
              <Link to="/scholarships" onClick={closeAll}>
                Scholarships
              </Link>
              <Link to="/faq" onClick={closeAll}>
                FAQ
              </Link>
              <Link to="/support" onClick={closeAll}>
                Support
              </Link>
            </div>
          </div>

          <Link to="/login" className="tm-login-btn" onClick={closeAll}>
            Login
          </Link>
        </div>
      </nav>

      <style>{`
        /* responsive helpers & global fixes */
        :where(html, body, #root) { box-sizing: border-box; max-width: 100%; overflow-x: hidden; }

        .tm-header {
          background: #fff;
          border-bottom: 1.5px solid #e0e7ef;
          position: sticky;
          top: 0;
          z-index: 1200;
        }
        .tm-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1300px;
          margin: 0 auto;
          height: 70px;
          padding: 0 20px;
          gap: 12px;
        }
        .tm-logo {
          font-size: 1.6rem;
          font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          flex: 0 0 auto;
        }

        .tm-mid { display:flex; align-items:center; gap:12px; flex:1 1 auto; min-width:0; }
        .tm-explore-link { display:flex; align-items:center; gap:8px; font-size:1rem; font-weight:600; color:#2563eb; text-decoration:none; white-space:nowrap; }
        .tm-explore-text { display:inline-block; }
        .tm-explore-icon { display:inline-flex; }

        /* Mobile explore (hidden on desktop) */
        .tm-explore-mobile { display: none; align-items:center; justify-content:center; gap:8px; padding:6px 8px; border-radius:8px; background:transparent; border:none; color:#2563eb; text-decoration:none; font-weight:600; }
        .tm-explore-mobile-icon { display:inline-flex; }
        .tm-explore-mobile-text { display:none; }

        /* Controls group */
        .tm-controls { display:flex; align-items:center; gap:12px; flex:0 0 auto; }

        /* Hamburger */
        .tm-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          width: 42px;
          height: 42px;
        }
        .tm-hamburger span { display:block; height:3px; width:26px; background:#2563eb; border-radius:2px; }

        /* Search */
        .tm-search {
          display:flex;
          align-items:center;
          gap:8px;
          background:#f8fafc;
          border:1.2px solid #cbd5e1;
          border-radius:12px;
          padding:6px 8px;
          min-width: 240px;
          transition: all 180ms ease;
          overflow: hidden;
          max-width: 520px;
        }
        .tm-search input { border:none; outline:none; background:transparent; font-size:0.95rem; width:100%; min-width:0; color:#0f172a; padding:6px 4px; }
        .tm-search-toggle { background:transparent; border:none; padding:6px; display:flex; align-items:center; cursor:pointer; }
        .tm-search-close { display:none; background:transparent; border:none; font-size:14px; cursor:pointer; padding:6px; }

        .tm-search.open { min-width: 160px; max-width: 420px; }
        .tm-search.open .tm-search-close { display:inline-block; }

        /* Links container (desktop) */
        .tm-links {
          display:flex;
          align-items:center;
          gap:16px;
          flex: 0 0 auto;
          min-width:0;
        }
        .tm-links a { color:#22223b; font-size:1rem; text-decoration:none; font-weight:500; padding:6px 0; }
        .tm-links a:hover { color:#2563eb; }

        /* More dropdown */
        .tm-more-wrapper { position:relative; }
        .tm-more-btn { background:none; border:none; cursor:pointer; padding:6px; font-weight:600; }
        .tm-more-dropdown {
          position:absolute;
          top:calc(100% + 8px);
          right:0;
          background:#fff;
          color:#22223b;
          min-width:220px;
          border-radius:12px;
          box-shadow:0 10px 30px rgba(2,6,23,0.08);
          display:none;
          flex-direction:column;
          padding:8px 0;
          z-index:1300;
        }
        .tm-more-wrapper.open .tm-more-dropdown { display:flex; }
        .tm-more-dropdown a { padding:10px 16px; white-space:nowrap; }

        .tm-login-btn {
          border:none;
          color:#2563eb;
          background: linear-gradient(90deg,#fff 70%, #f1f5f9 100%);
          border-radius:8px;
          padding:9px 18px;
          font-weight:700;
          text-decoration:none;
        }

        /* Mobile / Responsive adjustments */
        @media (max-width: 900px) {
          .tm-nav { padding: 8px 14px; height: 60px; }

          /* hide the desktop Explore (next to logo) on small screens to avoid duplicate icon */
          .tm-explore-link { display: none !important; }

          .tm-explore-text { display:none; } /* hide desktop text */
          .tm-explore-mobile { display:inline-flex; margin-right:6px; } /* show mobile explore beside hamburger */
          .tm-explore-mobile-text { display:inline-block; } /* show label on mobile */
          .tm-search { display: none; } /* hide inline search on small; use toggle */
          .tm-search.open { display:flex; position: absolute; left: 12px; right: 12px; top: 70px; z-index:1400; border-radius:10px; padding:8px; }
          .tm-hamburger { display:flex; }
          .tm-links {
            position: fixed;
            top: 66px;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255,255,255,0.98);
            flex-direction: column;
            align-items: flex-start;
            padding: 18px 14px;
            gap: 18px;
            transform: translateY(0);
            display: none;
            overflow-y: auto;
          }
          .tm-links.open { display:flex; }
          .tm-links > * { width:100%; }
          .tm-search-toggle { display:inline-flex; } /* search button visible */
        }

        @media (max-width: 500px) {
          .tm-nav { padding: 8px 10px; }
          .tm-logo { font-size: 1rem; }
          .tm-login-btn { padding:8px 12px; font-size:0.95rem; }
          /* slightly reduce mobile explore spacing */
          .tm-explore-mobile { gap:6px; padding:6px; }
        }
      `}</style>
    </header>
  );
}