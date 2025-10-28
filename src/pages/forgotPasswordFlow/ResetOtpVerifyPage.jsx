import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResetOtpVerifyPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialEmail = location?.state?.email || sessionStorage.getItem("tm_reset_email") || "";
  const [email] = useState(initialEmail);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [resendPending, setResendPending] = useState(false);
  const [hint, setHint] = useState("");

  useEffect(() => {
    const stored = sessionStorage.getItem("tm_reset_otp");
    if (stored) {
      setHint("A code was sent (demo). Check console for OTP.");
      // log stored OTP for developer testing
      console.log("Simulated OTP (ResetOtpVerifyPage):", stored);
    }
  }, []);

  const handleVerify = (e) => {
    e.preventDefault();
    setError("");
    if (!otp.trim()) {
      setError("Enter the verification code.");
      return;
    }
    setVerifying(true);
    setTimeout(() => {
      const stored = sessionStorage.getItem("tm_reset_otp");
      if (stored && otp.trim() === stored) {
        sessionStorage.removeItem("tm_reset_otp");
        navigate("/reset-password", { state: { email } });
      } else {
        setError("Invalid code. Try again.");
      }
      setVerifying(false);
    }, 600);
  };

  const handleResend = () => {
    setError("");
    setResendPending(true);
    setTimeout(() => {
      const newOtp = String(Math.floor(100000 + Math.random() * 900000));
      sessionStorage.setItem("tm_reset_otp", newOtp);
      // log resent OTP for developer testing
      console.log("Resent simulated OTP (ResetOtpVerifyPage):", newOtp);
      setResendPending(false);
      setHint("New code sent (demo). Check console for OTP.");
    }, 700);
  };

  return (
    <div className="otp-page">
      <div className="otp-card">
        <h1>Enter Verification Code</h1>
        <p className="otp-desc">
          We sent a 6‑digit code to <strong>{email || "your email"}</strong>. Enter it below.
        </p>

        <form onSubmit={handleVerify} className="otp-form">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            placeholder="------"
            className="otp-input"
            required
          />

          {hint && <div className="otp-hint">{hint}</div>}
          {error && <div className="otp-error">{error}</div>}

          <button className="otp-cta" type="submit" disabled={verifying}>
            {verifying ? "Verifying…" : "Verify & Continue"}
          </button>
        </form>

        <div className="otp-actions">
          <button className="resend-btn" type="button" onClick={handleResend} disabled={resendPending}>
            {resendPending ? "Resending…" : "Resend Code"}
          </button>
          <button className="back-btn" type="button" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>

      <style>{`
        .otp-page { min-height:100vh; display:flex; align-items:center; justify-content:center; font-family:Inter, system-ui; background:linear-gradient(180deg,#f8fbff,#fff); padding:32px; }
        .otp-card { width:100%; max-width:520px; background:#fff; padding:28px; border-radius:12px; box-shadow:0 18px 50px rgba(2,6,23,0.06); text-align:center; }
        .otp-card h1 { margin:0 0 6px; font-size:1.4rem; color:#0f172a; }
        .otp-desc { color:#475569; margin-bottom:16px; }
        .otp-form { display:flex; flex-direction:column; gap:12px; align-items:center; }
        .otp-input { font-size:1.6rem; letter-spacing:12px; text-align:center; padding:12px 18px; width:240px; border-radius:10px; border:1.5px solid #e6eefc; outline:none; }
        .otp-input:focus { border-color:#2563eb; box-shadow:0 0 0 6px rgba(37,99,235,0.04); }
        .otp-hint { color:#374151; font-size:0.9rem; margin-top:6px; }
        .otp-error { color:#b91c1c; background:#fff5f5; padding:10px 12px; border-radius:8px; width:100%; margin-top:6px; font-weight:600; }
        .otp-cta { width:100%; max-width:320px; padding:12px; background:linear-gradient(90deg,#2563eb,#38bdf8); color:#fff; border:none; border-radius:10px; font-weight:700; cursor:pointer; }
        .otp-actions { display:flex; gap:12px; justify-content:center; margin-top:12px; }
        .resend-btn, .back-btn { background:transparent; border:none; color:#2563eb; cursor:pointer; font-weight:700; }
        .resend-btn[disabled]{ opacity:0.6; cursor:default; }
        @media(max-width:480px) { .otp-input{ width:200px; letter-spacing:10px; } }
      `}</style>
    </div>
  );
}
