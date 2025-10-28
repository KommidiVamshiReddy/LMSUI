import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

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
    <div className="tm-dashboard-wrap">
      <aside className="tm-sidebar">
        <div className="tm-brand">
          <Link to="/dashboard">TalentMinds</Link>
        </div>

        <nav className="tm-nav">
          <Link to="/dashboard" className="nav-link">Home</Link>
          <Link to="/dashboard/my-courses" className="nav-link">My Courses</Link>
          <Link to="/dashboard/assignments" className="nav-link">Assignments</Link>
          <Link to="/dashboard/course/1" className="nav-link">Course Details</Link>
          <Link to="/dashboard/profile" className="nav-link">Profile</Link>
          <Link to="/dashboard/settings" className="nav-link">Settings</Link>
        </nav>

        <div className="tm-side-footer">
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </aside>

      <div className="tm-main">
        <header className="tm-topbar">
          <div className="tm-search">Welcome{learner?.firstName ? `, ${learner.firstName}` : ""}</div>
          <div className="tm-user">
            <div className="avatar">{(learner?.firstName?.[0] || "U").toUpperCase()}</div>
            <div className="tm-username">{learner?.firstName || "User"}</div>
          </div>
        </header>

        <main className="tm-content">
          <Outlet />
        </main>
      </div>

      <style>{`
        :root { --sidebar:#0f172a; --accent:#2563eb; --muted:#6b7280; }
        .tm-dashboard-wrap { display:flex; min-height:100vh; font-family:Inter,system-ui,Arial; }
        .tm-sidebar { width:260px; background:linear-gradient(180deg,var(--sidebar), #071029); color:#fff; padding:24px 18px; display:flex; flex-direction:column; gap:18px; }
        .tm-brand a { color:#fff; font-weight:800; text-decoration:none; font-size:1.1rem; }
        .tm-nav { display:flex; flex-direction:column; gap:8px; margin-top:8px; }
        .nav-link { color:rgba(255,255,255,0.9); padding:10px 12px; border-radius:8px; text-decoration:none; font-weight:600; }
        .nav-link:hover { background: rgba(255,255,255,0.04); color:var(--accent); }
        .tm-side-footer { margin-top:auto; }
        .logout-btn { width:100%; padding:10px; background:transparent; color:#fff; border:1px solid rgba(255,255,255,0.06); border-radius:8px; cursor:pointer; font-weight:700; }
        .tm-main { flex:1; background:#f8fafc; display:flex; flex-direction:column; }
        .tm-topbar { display:flex; justify-content:space-between; align-items:center; padding:18px 28px; border-bottom:1px solid #e6eefc; background:#fff; }
        .tm-search { color:var(--muted); font-weight:600; }
        .tm-user { display:flex; align-items:center; gap:10px; }
        .avatar { width:36px; height:36px; border-radius:50%; background:var(--accent); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; }
        .tm-username { color:#0f172a; font-weight:700; }
        .tm-content { padding:28px; }
        @media(max-width:900px){ .tm-sidebar{display:none;} }
      `}</style>
    </div>
  );
}