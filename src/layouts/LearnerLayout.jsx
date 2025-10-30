import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
// removed LearnerSidebar import since sidebar will no longer be displayed
import QuickNav from "../components/QuickNav/QuickNav.jsx";

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
    navigate("/"); // redirect to main home page after logout
  }

  // quick/popover state only (sidebar removed)
  const [quickOpen, setQuickOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth > 900);

  useEffect(() => {
    function onResize() { setIsDesktop(window.innerWidth > 900); }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="tm-wrap">
      {/* Sidebar removed - navigation is available via profile QuickNav */}

      <div className="tm-main-area">
        <header className="tm-topbar" style={{ position: "relative" }}>
          <div className="left">
            {/* menu button removed because sidebar is not used */}
            <span>Welcome{learner?.firstName ? `, ${learner.firstName}` : ""}</span>
          </div>

          <div className="right" style={{ position: "relative" }}>
            <div
              onClick={() => setQuickOpen((s) => !s)}
              style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}
            >
              <div className="tm-avatar" title={learner?.email || "Learner"}>
                {(learner?.firstName?.[0] || "U").toUpperCase()}
              </div>
              <div className="tm-name">{learner?.firstName || "Learner"}</div>
            </div>

            <QuickNav
              open={quickOpen}
              onClose={() => setQuickOpen(false)}
              onLogout={() => {
                handleLogout();
                setQuickOpen(false);
              }}
              notifications={3}
              messages={1}
              anchor="right" /* keep dropdown anchored to top-right since sidebar is removed */
            />
          </div>
        </header>

        <main className="tm-content">
          <Outlet />
        </main>
      </div>

      <style>{`
        /* app layout adjusted because sidebar has been removed */
        html, body, #root { overflow-x: hidden; }

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
          margin-left: 0; /* ensure full width since no sidebar */
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

        .right {
          display: flex;
          align-items: center;
          gap: 10px;
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
          .tm-topbar { padding: 12px 14px; }
          .tm-content { padding: 16px; }
        }
      `}</style>
    </div>
  );
}
