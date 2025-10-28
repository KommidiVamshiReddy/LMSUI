import React from "react";

export default function SkillBoostBanner() {
  return (
    <section className="sb-banner-section">
      <div className="sb-banner-content">
        <div className="sb-banner-left">
          <div className="sb-banner-brand">
            <span className="sb-logo-main">HG's TalentMinds</span>
            <span className="sb-logo-divider">|</span>
            <span className="sb-logo-boost">SkillBoost</span>
          </div>
          <h2>
            Unlock Your Potential with <span className="sb-highlight">Free, Career-Ready Programs</span>
          </h2>
          <p>
            Access 300+ free, expert-led courses and boost your skills for the future of work.
          </p>
          <a href="/courses?free=true" className="sb-banner-btn">
            Explore Free Programs
          </a>
        </div>
        <div className="sb-banner-right">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
            alt="Skill Boost"
          />
        </div>
      </div>
      <style>{`
        .sb-banner-section {
          background: #e0f2fe;
          border-radius: 16px;
          margin: 48px auto 0 auto;
          max-width: 98vw;
          box-shadow: 0 2px 16px rgba(14,165,233,0.08);
          border: 1.5px solid #bae6fd;
        }
        .sb-banner-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 48px 48px 36px 48px;
          gap: 32px;
        }
        .sb-banner-left {
          flex: 1.2;
        }
        .sb-banner-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 18px;
        }
        .sb-logo-main {
          color: #2563eb;
          font-weight: 900;
        }
        .sb-logo-divider {
          color: #94a3b8;
          font-weight: 700;
        }
        .sb-logo-boost {
          color: #f59e42;
          font-weight: 900;
        }
        .sb-banner-left h2 {
          font-size: 2.3rem;
          color: #0b4da3;
          font-weight: 800;
          margin-bottom: 16px;
          line-height: 1.15;
        }
        .sb-highlight {
          color: #f59e42;
        }
        .sb-banner-left p {
          font-size: 1.18rem;
          color: #334155;
          margin-bottom: 28px;
        }
        .sb-banner-btn {
          background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 15px 38px;
          font-weight: 700;
          font-size: 1.15rem;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(37,99,235,0.08);
          transition: background 0.2s;
          display: inline-block;
        }
        .sb-banner-btn:hover {
          background: linear-gradient(90deg, #38bdf8 0%, #2563eb 100%);
        }
        .sb-banner-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }
        .sb-banner-right img {
          width: 320px;
          height: 220px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 4px 24px rgba(14,165,233,0.10);
        }
        @media (max-width: 900px) {
          .sb-banner-content {
            flex-direction: column;
            align-items: flex-start;
            padding: 32px 12vw 24px 12vw;
            gap: 18px;
          }
          .sb-banner-right img {
            width: 100%;
            max-width: 320px;
            height: 160px;
          }
        }
        @media (max-width: 600px) {
          .sb-banner-section {
            padding: 0;
            margin: 28px 0 0 0;
          }
          .sb-banner-content {
            padding: 18px 4vw 18px 4vw;
          }
          .sb-banner-left h2 {
            font-size: 1.2rem;
          }
          .sb-banner-brand {
            font-size: 1.1rem;
          }
          .sb-banner-right img {
            max-width: 98vw;
            height: 110px;
          }
        }
      `}</style>
    </section>
  );
}