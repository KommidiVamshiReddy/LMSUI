import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function generateOtp() {
    return String(Math.floor(100000 + Math.random() * 900000));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setSending(true);
    const otp = generateOtp();
    sessionStorage.setItem("tm_reset_otp", otp);
    sessionStorage.setItem("tm_reset_email", email.trim());
    console.log("Simulated OTP (ForgotPasswordPage):", otp);

    setTimeout(() => {
      setSent(true);
      setSending(false);
      navigate("/reset-otp-verify", { state: { email: email.trim() } });
    }, 800);
  };

  return (
    <div className="fp-page">
      <div className="fp-left">
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop&s=5a6c7e6a1a6c1a6e6d6a1a6c"
          alt="learning"
        />
        <div className="fp-left-center">
          <div className="fp-badge">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect width="24" height="24" rx="8" fill="url(#g)"></rect>
              <path d="M8 12.5l2 2 6-6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#2563eb"/>
                  <stop offset="1" stopColor="#06b6d4"/>
                </linearGradient>
              </defs>
            </svg>
            <h2>TalentMinds</h2>
            <p>Reset password & get back to learning</p>
          </div>
        </div>
      </div>

      <div className="fp-right">
        <div className="fp-card">
          <h1>Forgot Password?</h1>
          <p className="fp-sub">Enter your email — we'll send a verification code to reset your password.</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                required
              />
              <label htmlFor="email">Email</label>
            </div>

            {error && <div className="fp-error">{error}</div>}
            {sent && <div className="fp-success">Verification code sent. Redirecting…</div>}

            <button type="submit" className="fp-cta" disabled={sending}>
              {sending ? "Sending…" : "Send Verification Code"}
            </button>
          </form>

          <div className="fp-hint">
            Tip: This demo accepts any email. The simulated OTP is printed in the browser console for testing.
          </div>
        </div>
      </div>

      <style>{`
        .fp-page { display:flex; min-height:100vh; font-family:Inter, system-ui, Arial; }
        .fp-left { flex:1; position:relative; display:flex; align-items:center; justify-content:center; overflow:hidden; }
        .fp-left img { width:100%; height:100vh; object-fit:cover; filter:brightness(0.45); transform:scale(1.03); transition:transform .6s ease; }
        .fp-left:hover img { transform:scale(1.04); }
        .fp-left-center {
          position:absolute;
          inset:0;
          display:flex;
          align-items:center;
          justify-content:center;
          pointer-events:none;
        }
        .fp-badge {
          pointer-events:auto;
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          backdrop-filter: blur(6px);
          border-radius:14px;
          padding:28px;
          text-align:center;
          color:#fff;
          box-shadow: 0 12px 40px rgba(2,6,23,0.5);
          max-width:360px;
          transform: translateY(-10px);
        }
        .fp-badge svg { display:block; margin:0 auto 10px; }
        .fp-badge h2 { margin:0 0 6px; font-size:1.4rem; letter-spacing:0.2px; }
        .fp-badge p { margin:0; opacity:0.95; font-size:0.95rem; }

        .fp-right { flex:1; display:flex; align-items:center; justify-content:center; background:linear-gradient(180deg,#f7fbff,#ffffff); padding:48px 24px; }
        .fp-card { width:100%; max-width:520px; background:#fff; padding:38px; border-radius:14px; box-shadow:0 20px 60px rgba(2,6,23,0.06); }
        .fp-card h1 { margin:0 0 6px; font-size:1.6rem; color:#0f172a; }
        .fp-sub { margin:0 0 18px; color:#374151; }

        .form-group { position:relative; margin-bottom:16px; }
        .form-group input { width:100%; padding:14px 12px; border:1.5px solid #e6eefc; border-radius:10px; outline:none; background:#fff; font-size:0.98rem; }
        .form-group input:focus { border-color:#2563eb; box-shadow:0 6px 24px rgba(37,99,235,0.08); }
        .form-group label { position:absolute; top:-10px; left:12px; background:#fff; padding:0 6px; color:#475569; font-size:0.78rem; }

        .fp-cta { width:100%; padding:12px; background:linear-gradient(90deg,#2563eb,#38bdf8); color:#fff; border:none; border-radius:10px; font-weight:700; cursor:pointer; }
        .fp-cta:disabled { opacity:0.7; cursor:default; }

        .fp-error { color:#b91c1c; background:#fff5f5; padding:10px 12px; border-radius:8px; margin-bottom:12px; font-weight:600; }
        .fp-success { color:#065f46; background:#ecfdf5; padding:10px 12px; border-radius:8px; margin-bottom:12px; font-weight:600; }

        .fp-hint { margin-top:14px; color:#6b7280; font-size:0.9rem; }

        @media(max-width:900px) {
          .fp-page { flex-direction:column; }
          .fp-left{ height:200px; }
          .fp-left img{ height:200px; }
          .fp-left-center { align-items:flex-start; padding-top:18px; }
          .fp-badge { transform:none; padding:18px; max-width:320px; }
          .fp-right { padding:28px 16px; }
        }
      `}</style>
    </div>
  );
}
