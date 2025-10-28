import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import LearnerSidebar from "../Sidebar/LearnerSidebar.jsx";

export default function LearnerLayout() {
  const navigate = useNavigate();
  const [learner, setLearner] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("learner")) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (!learner) navigate("/login");
  }, [learner, navigate]);

  function handleLogout() {
    localStorage.removeItem("learner");
    navigate("/login");
  }

  return (
    <div className="tm-wrap">
      <aside className="tm-sidebar-area">
        <div className="tm-brand">
          <Link to="/dashboard">TalentMinds</Link>
        </div>

        <LearnerSidebar />

        <div className="tm-side-cta">
          <button className="tm-logout" onClick={handleLogout}>Logout</button>
        </div>
      </aside>

      <div className="tm-main-area">
        <header className="tm-topbar">
          <div className="tm-top-left">Welcome{learner?.firstName ? `, ${learner.firstName}` : ""}</div>
          <div className="tm-top-right">
            <div className="tm-avatar">{(learner?.firstName?.[0] || "U").toUpperCase()}</div>
            <div className="tm-name">{learner?.firstName || "Learner"}</div>
          </div>
        </header>

        <main className="tm-content">
          <Outlet />
        </main>
      </div>

      <style>{`
        :root { --accent:#2563eb; --muted:#6b7280; }
        .tm-wrap { display:flex; min-height:100vh; font-family:Inter, system-ui, Arial; background:#f7fbff; }
        .tm-sidebar-area { width:260px; background:linear-gradient(180deg,#0f172a,#071029); color:#fff; padding:20px; display:flex; flex-direction:column; gap:12px; }
        .tm-brand a { color:#fff; font-weight:800; font-size:1.05rem; text-decoration:none; }
        .tm-side-cta { margin-top:auto; }
        .tm-logout { width:100%; padding:10px; border-radius:8px; background:transparent; border:1px solid rgba(255,255,255,0.06); color:#fff; cursor:pointer; font-weight:700; }
        .tm-main-area { flex:1; display:flex; flex-direction:column; }
        .tm-topbar { display:flex; justify-content:space-between; align-items:center; padding:14px 20px; background:#fff; border-bottom:1px solid #eef2ff; }
        .tm-top-left { color:var(--muted); font-weight:700; }
        .tm-top-right { display:flex; align-items:center; gap:10px; }
        .tm-avatar { width:36px; height:36px; border-radius:50%; background:var(--accent); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; }
        .tm-name { font-weight:700; color:#0f172a; }
        .tm-content { padding:24px; }
        @media(max-width:900px){ .tm-sidebar-area{display:none;} }
      `}</style>
    </div>
  );
}