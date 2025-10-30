import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyProfile() {
  const navigate = useNavigate();
  const learner = (() => {
    try { return JSON.parse(localStorage.getItem("learner")) || {}; } catch { return {}; }
  })();

  function handleLogout() {
    localStorage.removeItem("learner");
    navigate("/login");
  }

  return (
    <div className="profile-page">
      <header className="profile-head">
        <div className="avatar">{(learner?.firstName?.[0] || "U").toUpperCase()}</div>
        <div>
          <h1 className="name">{learner?.firstName ? `${learner.firstName} ${learner.lastName||""}` : "Learner"}</h1>
          <div className="email">{learner?.email || "you@domain.com"}</div>
        </div>
      </header>

      <section className="profile-body">
        <h2>Account</h2>
        <div className="row"><strong>First name</strong><span>{learner?.firstName || "-"}</span></div>
        <div className="row"><strong>Last name</strong><span>{learner?.lastName || "-"}</span></div>
        <div className="row"><strong>Email</strong><span>{learner?.email || "-"}</span></div>

        <h2 style={{marginTop:18}}>Preferences</h2>
        <div className="row"><strong>Preferred language</strong><span>{learner?.language || "English"}</span></div>
      </section>

      <footer className="profile-foot">
        <div style={{marginTop:12, display:"flex", justifyContent:"flex-end"}}>
          <button className="btn" onClick={()=>{ localStorage.removeItem("learner"); navigate("/login"); }}>
            Logout
          </button>
        </div>
      </footer>

      <style>{`
        .profile-page{ max-width:900px; margin:0 auto; font-family: Inter, system-ui, Arial; color:#0f172a; }
        .profile-head{ display:flex; gap:16px; align-items:center; padding:18px 0; }
        .avatar{ width:72px; height:72px; border-radius:12px; background:#2563eb; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:1.6rem; }
        .name{ margin:0; font-size:1.4rem; font-weight:900; }
        .email{ color:#6b7280; margin-top:6px; }

        .profile-body{ background:#fff; padding:16px; border-radius:12px; box-shadow:0 8px 30px rgba(2,6,23,0.05); }
        .row{ display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px dashed #eef2ff; }
        .row strong{ color:#0f172a; }
        .row span{ color:#64748b; }

        .profile-foot{ margin-top:14px; display:flex; justify-content:flex-end; }
        .logout{ padding:10px 14px; background:#ef4444; color:#fff; border-radius:10px; border:none; cursor:pointer; font-weight:800; }
      `}</style>
    </div>
  );
}
