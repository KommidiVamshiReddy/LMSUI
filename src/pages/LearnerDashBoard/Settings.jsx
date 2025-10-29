import React, { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [language, setLanguage] = useState("en");

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
    alert(`🌗 Switched to ${!darkMode ? "Dark" : "Light"} Mode (Demo Toggle)`);
  }

  return (
    <div className="settings-page">
      <h1>⚙️ Settings</h1>
      <p className="muted">Manage your preferences, notifications, and display options</p>

      <div className="settings-section">
        <h2>Account</h2>
        <div className="setting-item">
          <label>Change Password</label>
          <button className="btn small">Update Password</button>
        </div>
      </div>

      <div className="settings-section">
        <h2>Notifications</h2>
        <div className="setting-item">
          <label>Email Notifications</label>
          <div
            className={`toggle ${emailNotif ? "on" : ""}`}
            onClick={() => setEmailNotif((p) => !p)}
          >
            <div className="circle" />
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h2>Language</h2>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="select"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>

      <div className="settings-section">
        <h2>Display</h2>
        <div className="setting-item">
          <label>Dark Mode</label>
          <div className={`toggle ${darkMode ? "on" : ""}`} onClick={toggleDarkMode}>
            <div className="circle" />
          </div>
        </div>
      </div>

      <style>{`
        .settings-page {
          max-width: 700px;
          margin: 0 auto;
          background: #fff;
          padding: 24px;
          border-radius: 14px;
          box-shadow: 0 8px 30px rgba(15,23,42,0.05);
        }

        h1 {
          font-size: 1.7rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .muted {
          color: #64748b;
          font-size: 0.95rem;
          margin-bottom: 18px;
        }

        .settings-section {
          margin-top: 24px;
          padding-top: 12px;
          border-top: 1px solid #e2e8f0;
        }

        h2 {
          font-size: 1.1rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 12px;
        }

        .setting-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        label {
          font-weight: 700;
          color: #334155;
        }

        .btn {
          background: linear-gradient(90deg, #2563eb, #38bdf8);
          color: white;
          font-weight: 800;
          border: none;
          padding: 8px 12px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn.small {
          padding: 6px 10px;
          font-size: 0.9rem;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(37,99,235,0.25);
        }

        .toggle {
          width: 46px;
          height: 24px;
          border-radius: 20px;
          background: #e2e8f0;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .toggle.on {
          background: linear-gradient(90deg, #2563eb, #38bdf8);
        }

        .circle {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          transition: all 0.3s ease;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }

        .toggle.on .circle {
          transform: translateX(22px);
        }

        .select {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.2s ease;
        }

        .select:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.2);
        }

        @media (max-width: 600px) {
          .settings-page {
            padding: 16px;
          }
          h1 {
            font-size: 1.4rem;
          }
          .setting-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
}
