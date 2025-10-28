import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function OtpVerifyPage() {
  const location = useLocation();
  const { email = "va****@gmail.com", phone = "98*****21" } =
    location.state || {}; 

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) {
      setError("Please enter a 6-digit OTP.");
      return;
    }

    setError("");
    setSuccess(true);
    console.log("Entered OTP:", enteredOtp);

    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
  };

  const handleResend = () => {
    setTimer(30);
    setOtp(["", "", "", "", "", ""]);
    console.log("Resending OTP...");
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <h1>🔐 Verify Your Account</h1>
        <p className="subtitle">
          Enter the 6-digit OTP sent to <br />
          <span className="highlight">{email || phone}</span>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
              />
            ))}
          </div>

          {error && <p className="error-msg">{error}</p>}
          {success && (
            <p className="success-msg">✅ OTP Verified! Redirecting...</p>
          )}

          <button className="verify-btn" type="submit">
            Verify OTP
          </button>
        </form>

        <div className="resend-section">
          {timer > 0 ? (
            <p className="timer">⏳ Resend OTP in {timer}s</p>
          ) : (
            <a href="#" onClick={handleResend} className="resend-link">
              🔄 Resend OTP
            </a>
          )}
        </div>

        <p className="info-msg">
          Didn’t receive the code? Check your spam folder or ensure your phone
          has network coverage 📡
        </p>
      </div>

      <style>{`
        * { box-sizing: border-box; margin:0; padding:0; font-family: 'Inter', sans-serif; }
        .otp-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #2563eb, #38bdf8);
          padding: 20px;
        }
        .otp-box {
          background: #fff;
          padding: 40px 32px;
          border-radius: 20px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
          text-align: center;
          width: 100%;
          max-width: 420px;
          animation: fadeIn 0.6s ease-in-out;
        }
        .otp-box h1 {
          font-size: 1.8rem;
          margin-bottom: 12px;
          color: #111827;
        }
        .subtitle {
          color: #6b7280;
          margin-bottom: 20px;
          font-size: 1rem;
        }
        .highlight {
          font-weight: 600;
          color: #2563eb;
        }
        .otp-inputs {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          gap: 10px;
        }
        .otp-inputs input {
          width: 50px;
          height: 55px;
          font-size: 1.5rem;
          text-align: center;
          border: 2px solid #d1d5db;
          border-radius: 12px;
          background: #f9fafb;
          outline: none;
          transition: 0.2s;
        }
        .otp-inputs input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 8px rgba(37,99,235,0.3);
        }
        .verify-btn {
          width: 100%;
          padding: 14px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }
        .verify-btn:hover { background: #1e40af; transform: scale(1.02); }
        .resend-section {
          margin-top: 16px;
        }
        .timer {
          color: #6b7280;
          font-size: 0.9rem;
        }
        .resend-link {
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.95rem;
        }
        .resend-link:hover { text-decoration: underline; }
        .info-msg {
          margin-top: 16px;
          font-size: 0.85rem;
          color: #6b7280;
        }
        .error-msg {
          color: #dc2626;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .success-msg {
          margin-bottom: 12px;
          color: green;
          font-weight: 600;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media(max-width: 480px) {
          .otp-inputs { gap: 6px; }
          .otp-inputs input { width: 42px; height: 45px; font-size: 1.2rem; }
        }
      `}</style>
    </div>
  );
}
