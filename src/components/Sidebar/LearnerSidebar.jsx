import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  MessageSquare,
  BarChart3,
  Bell,
  User,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const NavItem = ({ to, icon: Icon, label, onClick, end }) => (
  <NavLink
    to={to}
    onClick={onClick}
    end={end}
    className={({ isActive }) => `ls-item ${isActive ? "active" : ""}`}
  >
    <Icon size={18} />
    <span className="ls-label">{label}</span>
  </NavLink>
);

export default function LearnerSidebar({ open = false, onClose = () => {}, onLogout = () => {} }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed((s) => !s);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prev;
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const handleNavClick = () => {
    if (open && typeof onClose === "function") onClose();
  };

  return (
    <>
      {open && <div className="ls-backdrop" onClick={onClose} aria-hidden="true" />}

      <aside
        className={`ls-sidebar ${collapsed ? "collapsed" : ""} ${open ? "open" : ""}`}
        role="navigation"
        aria-hidden={!open && window.innerWidth <= 900}
      >
        <div className="ls-top">
          <div className="ls-logo">
            <img src="/logo.svg" alt="LMS Logo" className="ls-logo-img" />
            {!collapsed && <h2 className="ls-logo-text">TalentMinds</h2>}
          </div>

          <button className="ls-toggle" onClick={toggleSidebar} aria-label={collapsed ? "Expand" : "Collapse"}>
            {collapsed ? <ChevronRight color="rgba(255,255,255,0.85)" /> : <ChevronLeft color="rgba(255,255,255,0.85)" />}
          </button>
        </div>

        <nav className="ls-nav" aria-label="Learner navigation">
          <NavLink to="/dashboard" onClick={handleNavClick} end className={({isActive})=>`ls-item ${isActive?'active':''}`}>
            <LayoutDashboard size={18} /><span className="ls-label">Overview</span>
          </NavLink>

          <NavLink to="/dashboard/my-courses" onClick={handleNavClick} className={({isActive})=>`ls-item ${isActive?'active':''}`}>
            <BookOpen size={18} /><span className="ls-label">My Courses</span>
          </NavLink>

          <NavLink to="/dashboard/assignments" onClick={handleNavClick} className={({isActive})=>`ls-item ${isActive?'active':''}`}>
            <ClipboardList size={18} /><span className="ls-label">Assignments</span>
          </NavLink>

          <NavLink to="/dashboard/discussions" onClick={handleNavClick} className={({isActive})=>`ls-item ${isActive?'active':''}`}>
            <MessageSquare size={18} /><span className="ls-label">Discussions</span>
          </NavLink>

          <NavLink
            to="/dashboard/grades"
            onClick={handleNavClick}
            className={({ isActive }) => `ls-item ${isActive ? "active" : ""}`}
          >
            <BarChart3 size={18} />
            <span className="ls-label">Progress / Grades</span>
          </NavLink>

          <NavLink to="/dashboard/notifications" onClick={handleNavClick} className={({isActive})=>`ls-item ${isActive?'active':''}`}>
            <Bell size={18} /><span className="ls-label">Notifications</span>
          </NavLink>

          <div className="ls-divider" />

          <NavLink to="/dashboard/profile" onClick={handleNavClick} className={({isActive})=>`ls-item ${isActive?'active':''}`}>
            <User size={18} /><span className="ls-label">Profile</span>
          </NavLink>

          <NavLink to="/dashboard/settings" onClick={handleNavClick} className={({isActive})=>`ls-item ${isActive?'active':''}`}>
            <Settings size={18} /><span className="ls-label">Settings</span>
          </NavLink>
        </nav>

        <div className="ls-bottom">
          <button className="logout-btn" onClick={() => { onLogout(); if (open) onClose(); }}>
            <LogOut size={16} />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>

        <style>{`
          /* layout vars (subtler sizing so sidebar doesn't dominate) */
          :root{
            --sidebar-width: 220px;           /* reduced desktop width */
            --sidebar-collapsed-width: 64px;  /* narrower collapsed state */
            --sidebar-gap: 20px;
          }

          /* page safeguard */
          html, body, #root { overflow-x: hidden; }

          :root{
            --bg-start: #071826;   /* subtle deep blue */
            --bg-end:   #0a2230;   /* slightly lighter */
            --text: rgba(235,245,255,0.95);
            --icon: rgba(207,230,255,0.9);
            --muted: rgba(159,179,200,0.9);
            --accent: #26c6da;    /* single accent tone for clarity */
            --shadow-strong: 0 8px 30px rgba(2,8,23,0.35); /* softer shadow */
          }

          .ls-backdrop{ position:fixed; inset:0; background:rgba(2,6,23,0.5); z-index:998; backdrop-filter: blur(4px); }

          /* fixed, compact sidebar */
          .ls-sidebar{
            position: fixed;
            left: 18px;
            top: 18px;
            bottom: 18px;
            width: var(--sidebar-width);
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            padding:12px; /* reduced padding */
            border-radius:12px;
            background: linear-gradient(180deg,var(--bg-start),var(--bg-end));
            box-shadow: var(--shadow-strong);
            border: 1px solid rgba(255,255,255,0.03);
            z-index:999;
            overflow: hidden;
            transition: transform .26s ease, width .16s ease, box-shadow .12s;
          }

          /* collapsed */
          .ls-sidebar.collapsed{ width: var(--sidebar-collapsed-width); }
          .ls-sidebar.collapsed .ls-label,
          .ls-sidebar.collapsed .ls-logo-text,
          .ls-sidebar.collapsed .logout-btn span { display:none; }

          .ls-top{ display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:10px; }
          .ls-logo{ display:flex; align-items:center; gap:10px; }
          .ls-logo-img{ width:36px; height:36px; border-radius:8px; object-fit:cover; box-shadow: 0 6px 18px rgba(0,0,0,0.18); border: 1px solid rgba(255,255,255,0.03); }
          .ls-logo-text{ font-size:0.98rem; font-weight:800; color:var(--text); letter-spacing:0.2px; }

          .ls-toggle{
            background: transparent;
            border: 1px solid rgba(255,255,255,0.03);
            color: var(--icon);
            padding:6px; border-radius:8px; cursor:pointer;
            display:inline-flex; align-items:center; justify-content:center;
            transition: transform .12s ease, background .12s;
          }
          .ls-toggle:hover{ transform: translateY(-2px); background: rgba(255,255,255,0.01); }

          /* nav: scrolls inside sidebar independently */
          .ls-nav{ display:flex; flex-direction:column; gap:8px; margin-top:6px; overflow-y:auto; padding-right:6px; -webkit-overflow-scrolling:touch; max-height: calc(100vh - 200px); }
          .ls-nav::-webkit-scrollbar{ width:8px; }
          .ls-nav::-webkit-scrollbar-thumb{ background: rgba(255,255,255,0.03); border-radius:8px; }

          .ls-item{
            display:flex; align-items:center; gap:10px; padding:10px 12px; border-radius:10px;
            color:var(--text); text-decoration:none; font-weight:700; position:relative;
            transition: transform .12s ease, background .14s ease, box-shadow .14s ease;
          }
          .ls-item svg{ color: var(--icon); opacity:0.9; flex:0 0 18px; }
          .ls-label{ color: var(--text); white-space:nowrap; font-size:0.96rem; }

          /* lighter hover and smaller translate for subtlety */
          .ls-item:hover{
            background: rgba(255,255,255,0.015);
            transform: translateX(4px);
            box-shadow: 0 6px 18px rgba(2,6,23,0.06);
          }

          /* active: subtle left accent, no heavy full background to avoid dominance */
          .ls-item.active{
            background: rgba(38,198,218,0.06);
            color: #fff;
            box-shadow: 0 10px 26px rgba(38,198,218,0.06);
          }
          .ls-item.active::before{
            content:""; position:absolute; left:10px; top:10px; bottom:10px; width:4px; border-radius:4px;
            background: var(--accent);
          }

          .ls-divider{ height:1px; background: rgba(255,255,255,0.02); margin:10px 0; border-radius:6px; }

          .ls-bottom{ margin-top:auto; display:flex; padding-top:10px; }
          .logout-btn{
            width:100%; display:flex; gap:10px; align-items:center; padding:8px 10px; border-radius:10px;
            border:1px solid rgba(255,255,255,0.03); background: transparent; color:#ffdede; cursor:pointer; font-weight:700;
          }
          .logout-btn:hover{ transform: translateY(-2px); background: rgba(255,255,255,0.01); }

          /* mobile off-canvas */
          @media (max-width:900px){
            .ls-sidebar{ left:12px; top:12px; bottom:12px; transform: translateX(-110%); width: min(84%, 320px); max-width: calc(100% - 24px); border-radius:14px; }
            .ls-sidebar.open{ transform: translateX(0); box-shadow: 0 24px 60px rgba(2,6,23,0.5); }
            .ls-sidebar.collapsed{ width: 64px; }
            .ls-nav{ max-height: calc(100vh - 200px); }
          }
        `}</style>
      </aside>
    </>
  );
}
