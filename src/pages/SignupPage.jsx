import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:8080/api/addLearner";

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.password
    ) {
      setError("Please fill all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      
      const learnerData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
      };

      const response = await axios.post(API_URL, learnerData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("✅ Registered Learner:", response.data);
      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error("❌ Registration Error:", err.response || err.message);
      if (err.response) {
        setError(
          `Error ${err.response.status}: ${
            err.response.data.message || "Registration failed."
          }`
        );
      } else {
        setError("Cannot connect to server. Please ensure backend is running.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="brand-logo">TalentMinds LMS</div>
        <div className="signup-box">
          <h1>Create Your Account ✨</h1>
          <p className="subtitle">
            Join TalentMinds to access personalized learning experiences.
          </p>

          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label>First Name</label>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label>Last Name</label>
              </div>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label>Email</label>
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label>Phone Number</label>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label>Password</label>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label>Confirm Password</label>
              </div>
            </div>

            {error && <p className="error-msg">{error}</p>}
            {success && (
              <p className="success-msg">
                ✅ Registration successful! You can now{" "}
                <Link to="/login">log in</Link>.
              </p>
            )}

            <button className="signup-btn" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Sign Up"}
            </button>
          </form>

          <div className="divider">OR</div>

          <div className="social-login">
            <button className="google-btn" type="button">
              Continue with Google
            </button>
            <button className="linkedin-btn" type="button">
              Continue with LinkedIn
            </button>
          </div>

          <div className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>

      <div className="signup-right">
        <div className="overlay">
          <h2>Learn Without Limits 🌍</h2>
          <p>
            5M+ learners empowered 🚀 <br />
            1500+ live sessions monthly 🎓 <br />
            85% achieved career growth 💼
          </p>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
        .signup-container {
          display: flex;
          min-height: 100vh;
        }
        .signup-left {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f9fafb;
          padding: 40px;
          position: relative;
        }
        .brand-logo {
          position: absolute;
          top: 20px;
          left: 30px;
          font-size: 1.2rem;
          font-weight: 700;
          color: #2563eb;
        }
        .signup-box {
          background: #fff;
          padding: 40px 32px;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          width: 100%;
          max-width: 420px;
        }
        .signup-box h1 {
          font-size: 1.8rem;
          margin-bottom: 8px;
          color: #111827;
        }
        .subtitle {
          color: #6b7280;
          margin-bottom: 28px;
          font-size: 0.95rem;
        }
        .form-group {
          position: relative;
          margin-bottom: 20px;
          flex: 1;
        }
        .form-row {
          display: flex;
          gap: 12px;
        }
        .form-group input {
          width: 100%;
          padding: 14px 12px;
          border: 1.5px solid #d1d5db;
          border-radius: 8px;
          outline: none;
          background: #f9fafb;
          transition: all 0.2s;
          font-size: 1rem;
        }
        .form-group input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37,99,235,0.2);
        }
        .form-group label {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          font-size: 0.95rem;
          color: #9ca3af;
          transition: 0.2s;
          background: #fff;
          padding: 0 4px;
        }
        .form-group input:focus + label,
        .form-group input:not(:placeholder-shown) + label {
          top: -8px;
          font-size: 0.75rem;
          color: #2563eb;
        }
        .signup-btn {
          width: 100%;
          padding: 14px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s;
        }
        .signup-btn:hover { background: #1e40af; }
        .divider {
          margin: 20px 0;
          text-align: center;
          color: #9ca3af;
          font-size: 0.9rem;
        }
        .social-login button {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 8px;
          margin-bottom: 12px;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.95rem;
        }
        .google-btn {
          background: #fff;
          border: 1px solid #d1d5db;
          color: #111;
        }
        .linkedin-btn {
          background: #0a66c2;
          color: white;
        }
        .login-link {
          margin-top: 16px;
          font-size: 0.9rem;
          color: #6b7280;
        }
        .login-link a {
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
        }
        .login-link a:hover { text-decoration: underline; }
        .error-msg {
          color: #dc2626;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .success-msg {
          margin-top: 16px;
          color: green;
          font-weight: 600;
        }
        .signup-right {
          flex: 1;
          background: url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b") no-repeat center center/cover;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .overlay {
          background: rgba(0,0,0,0.6);
          color: white;
          padding: 40px;
          border-radius: 12px;
          text-align: center;
        }
        .overlay h2 {
          font-size: 1.8rem;
          margin-bottom: 12px;
        }
        .overlay p {
          font-size: 1rem;
          line-height: 1.6;
        }
        @media(max-width: 768px) {
          .signup-container { flex-direction: column; }
          .signup-right { display: none; }
          .signup-left { width: 100%; }
          .form-row { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
