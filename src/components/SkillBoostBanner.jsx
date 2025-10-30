import React from "react";

export default function SkillBoostBanner() {
  return (
    <section className="sb-banner-section">
      <div className="sb-banner-content">
        {/* LEFT SIDE */}
        <div className="sb-banner-left">
          <div className="sb-banner-brand">
            <span className="sb-logo-main">HG's</span>
            <span className="sb-logo-highlight">TalentMinds</span>
            <span className="sb-logo-divider">|</span>
            <span className="sb-logo-boost">SkillBoost</span>
          </div>

          <h2>
            Boost Your Skills with{" "}
            <span className="sb-highlight">Free, Career-Ready Programs</span>
          </h2>

          <p>
            Explore 300+ expert-led courses designed to elevate your career.
            Learn in-demand skills for free and stay ahead in today’s job market.
          </p>

          <a href="/courses?free=true" className="sb-banner-btn">
            Explore Free Programs →
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="sb-banner-right">
          <img
            src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80"
            alt="Learning and Skill Growth"
            className="sb-banner-img"
          />
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .sb-banner-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
          border-radius: 20px;
          border: 1.5px solid #dbeafe;
          box-shadow: 0 4px 24px rgba(37, 99, 235, 0.12);
          margin: 60px auto;
          max-width: 1200px;
          overflow: hidden;
        }

        .sb-banner-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 64px 72px;
          gap: 48px;
        }

        .sb-banner-left {
          flex: 1.2;
        }

        .sb-banner-brand {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 1.7rem;
          font-weight: 900;
          margin-bottom: 20px;
        }

        .sb-logo-main {
          color: #fbbf24;
          font-weight: 900;
        }

        .sb-logo-highlight {
          color: #2563eb;
          font-weight: 900;
        }

        .sb-logo-divider {
          color: #94a3b8;
          font-weight: 600;
        }

        .sb-logo-boost {
          color: #f97316;
          font-weight: 800;
        }

        .sb-banner-left h2 {
          font-size: 2.4rem;
          color: #1e3a8a;
          font-weight: 800;
          margin-bottom: 18px;
          line-height: 1.2;
        }

        .sb-highlight {
          color: #2563eb;
        }

        .sb-banner-left p {
          font-size: 1.15rem;
          color: #334155;
          margin-bottom: 32px;
          max-width: 560px;
          line-height: 1.6;
        }

        .sb-banner-btn {
          background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 14px 36px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(37,99,235,0.25);
          transition: all 0.25s ease;
          display: inline-block;
        }

        .sb-banner-btn:hover {
          background: linear-gradient(90deg, #1d4ed8 0%, #3b82f6 100%);
          transform: translateY(-2px);
        }

        .sb-banner-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .sb-banner-img {
          width: 100%;
          max-width: 400px;
          height: auto;
          object-fit: cover;
          border-radius: 16px;
          box-shadow: 0 6px 28px rgba(37,99,235,0.2);
          transition: transform 0.3s ease;
        }

        .sb-banner-img:hover {
          transform: scale(1.03);
        }

        /* RESPONSIVE */
        @media (max-width: 950px) {
          .sb-banner-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 40px 10vw;
          }

          .sb-banner-left {
            flex: unset;
          }

          .sb-banner-img {
            width: 100%;
            max-width: 420px;
            height: auto;
            margin-top: 16px;
          }

          .sb-banner-left p {
            margin: 0 auto 28px;
          }
        }

        @media (max-width: 600px) {
          .sb-banner-section {
            margin: 32px 0;
          }

          .sb-banner-content {
            padding: 28px 6vw;
          }

          .sb-banner-brand {
            font-size: 1.2rem;
            justify-content: center;
          }

          .sb-banner-left h2 {
            font-size: 1.5rem;
          }

          .sb-banner-left p {
            font-size: 1rem;
          }

          .sb-banner-btn {
            font-size: 1rem;
            padding: 12px 28px;
          }
        }
      `}</style>
    </section>
  );
}
