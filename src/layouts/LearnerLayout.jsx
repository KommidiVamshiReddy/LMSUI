import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import LearnerSidebar from "../components/Sidebar/LearnerSidebar.jsx";

export default function LearnerLayout() {
  const navigate = useNavigate();
  const [learner, setLearner] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("learner")) || null;
    } catch {
      return null;
    }
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!learner) navigate("/login");
  }, [learner, navigate]);

  function handleLogout() {
    localStorage.removeItem("learner");
    navigate("/login");
  }

  return (
    <div className="tm-wrap">
      {/* Sidebar */}
      <LearnerSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} onLogout={handleLogout} />

      {/* Main Area */}
      <div className="tm-main-area">
        <header className="tm-topbar">
          <div className="left">
            <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
              ☰
            </button>
            <span>Welcome{learner?.firstName ? `, ${learner.firstName}` : ""}</span>
          </div>

          <div className="right">
            {/* avatar/name now link to profile; removed top-right logout button */}
            <Link to="/dashboard/profile" className="profile-link" onClick={() => setSidebarOpen(false)}>
              <div className="tm-avatar" title={learner?.email || "Learner"}>{(learner?.firstName?.[0] || "U").toUpperCase()}</div>
              <div className="tm-name">{learner?.firstName || "Learner"}</div>
            </Link>
          </div>
        </header>

        <main className="tm-content">
          <Outlet />
        </main>
      </div>

      <style>{`
        .tm-wrap {
          display: flex;
          min-height: 100vh;
          font-family: Inter, system-ui, Arial;
          background: #f7fbff;
        }

        .tm-main-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .tm-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 20px;
          background: #fff;
          border-bottom: 1px solid #eef2ff;
        }

        .left {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #334155;
          font-weight: 700;
        }

        .menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.4rem;
          cursor: pointer;
        }

        .right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .profile-link {
          display:flex;
          align-items:center;
          gap:8px;
          text-decoration:none;
          color:inherit;
        }

        .tm-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #2563eb;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .tm-name {
          font-weight: 700;
          color: #0f172a;
        }

        .tm-content {
          padding: 24px;
        }

        @media (max-width: 900px) {
          .menu-btn {
            display: inline;
          }
        }

        /* prevent horizontal overflow */
        html, body, #root { overflow-x: hidden; }

        /* main area default */
        .tm-main-area { flex:1; min-width:0; transition: margin-left .22s ease-in-out, padding .18s ease; }

        /* reserve modest space for the sidebar on desktop (subtle gap) */
        @media (min-width: 901px) {
          .tm-main-area { margin-left: calc(var(--sidebar-width, 220px) + var(--sidebar-gap, 20px)); padding: 20px 28px; }
          /* when sidebar is collapsed shift content left accordingly */
          .ls-sidebar.collapsed ~ .tm-main-area { margin-left: calc(var(--sidebar-collapsed-width, 64px) + var(--sidebar-gap, 20px)); }
        }

        @media (max-width: 900px) {
          .tm-main-area { margin-left: 0; padding: 16px; } /* drawer overlays content on small screens */
        }

        /* header/content polish (kept minimal so sidebar doesn't dominate) */
        .tm-topbar { background: #ffffff; border-bottom: 1px solid rgba(15,23,42,0.03); padding: 12px 16px; }
        .tm-content { padding-top: 18px; }
      `}</style>
    </div>
  );
}
