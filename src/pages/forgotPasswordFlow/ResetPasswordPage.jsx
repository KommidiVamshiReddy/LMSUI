import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function passwordStrength(password = "") {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
}

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location?.state?.email || sessionStorage.getItem("tm_reset_email") || "";
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const strength = passwordStrength(password);
  const strengthLabel = ["Very weak", "Weak", "Fair", "Good", "Strong"][strength];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      // clear demo state
      sessionStorage.removeItem("tm_reset_email");
      sessionStorage.removeItem("tm_reset_otp");
      setTimeout(() => navigate("/login"), 1200);
    }, 900);
  };

  return (
    <div className="reset-page">
      <div className="reset-card">
        <h1>Create a New Password</h1>
        <p className="reset-desc">Make sure your new password is strong and unique.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
            />
            <label htmlFor="password">New Password</label>
          </div>

          <div className="strength-row">
            <div className={`strength-bar s-${strength}`}></div>
            <div className="strength-label">{strengthLabel}</div>
          </div>

          <div className="form-group">
            <input
              id="confirm"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder=" "
              required
            />
            <label htmlFor="confirm">Confirm Password</label>
          </div>

          {error && <div className="reset-error">{error}</div>}
          {success && <div className="reset-success">Password updated. Redirecting to login…</div>}

          <button className="reset-cta" type="submit" disabled={submitting}>
            {submitting ? "Updating…" : "Update Password"}
          </button>
        </form>
      </div>

      <style>{`
        .reset-page { min-height:100vh; display:flex; align-items:center; justify-content:center; background:linear-gradient(180deg,#f8fbff,#fff); font-family:Inter, system-ui; padding:28px; }
        .reset-card { width:100%; max-width:520px; background:#fff; padding:28px; border-radius:12px; box-shadow:0 18px 50px rgba(2,6,23,0.06); }
        .reset-card h1 { margin:0 0 6px; font-size:1.4rem; color:#0f172a; }
        .reset-desc { color:#475569; margin-bottom:12px; }

        .form-group { position:relative; margin-bottom:12px; }
        .form-group input { width:100%; padding:14px 12px; border:1.5px solid #e6eefc; border-radius:10px; outline:none; font-size:0.98rem; }
        .form-group input:focus { border-color:#2563eb; box-shadow:0 0 0 6px rgba(37,99,235,0.04); }
        .form-group label { position:absolute; top:-10px; left:12px; background:#fff; padding:0 6px; color:#475569; font-size:0.78rem; }

        .strength-row { display:flex; align-items:center; gap:12px; margin-bottom:10px; }
        .strength-bar { flex:1; height:10px; border-radius:8px; background:#f1f5f9; overflow:hidden; position:relative; }
        .strength-bar::after { content:''; position:absolute; left:0; top:0; bottom:0; width:0%; background:linear-gradient(90deg,#f43f5e,#f59e0b,#10b981); transition:width 0.3s; }
        .s-0::after { width:6%; background:#ef4444; }
        .s-1::after { width:28%; background:#f97316; }
        .s-2::after { width:52%; background:#f59e0b; }
        .s-3::after { width:76%; background:#10b981; }
        .s-4::after { width:100%; background:linear-gradient(90deg,#10b981,#06b6d4); }
        .strength-label { width:96px; text-align:right; color:#475569; font-size:0.9rem; }

        .reset-error { color:#b91c1c; background:#fff5f5; padding:10px 12px; border-radius:8px; margin-bottom:12px; font-weight:600; }
        .reset-success { color:#065f46; background:#ecfdf5; padding:10px 12px; border-radius:8px; margin-bottom:12px; font-weight:600; }

        .reset-cta { width:100%; padding:12px; background:linear-gradient(90deg,#2563eb,#38bdf8); color:#fff; border:none; border-radius:10px; font-weight:700; cursor:pointer; }
        @media(max-width:480px) { .strength-label{ display:none; } }
      `}</style>
    </div>
  );
}
