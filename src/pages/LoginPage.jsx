import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("email");
  const [loginData, setLoginData] = useState({ email: "", phone: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((p) => ({ ...p, [name]: value }));
  };

  const switchLoginType = () => {
    setLoginType((t) => (t === "email" ? "phone" : "email"));
    setError("");
    setLoginData({ email: "", phone: "", password: "" });
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (loginType === "email" && !loginData.email.trim()) {
      setError("Email is required");
      return;
    }
    if (loginType === "phone" && !loginData.phone.trim()) {
      setError("Phone number is required");
      return;
    }
    if (!loginData.password.trim()) {
      setError("Password is required");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const identifier = (loginType === "email" ? loginData.email : loginData.phone).trim();
      const firstName = (identifier.split(/[@.]/)[0] || "Learner").replace(/\d+/g, "");
      const demoLearner = {
        id: Date.now(),
        firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
        lastName: "",
        email: loginType === "email" ? identifier : "",
        phone: loginType === "phone" ? identifier : "",
        token: "demo-token",
      };
      localStorage.setItem("learner", JSON.stringify(demoLearner));
      setSuccess(true);
      setLoading(false);
      setTimeout(() => navigate("/dashboard"), 700);
    }, 700);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="brand-logo">TalentMinds</div>
        <div className="login-box">
          <h1>Welcome Back 👋</h1>
          <p className="subtitle">
            Sign in to continue your learning journey. Access courses, mentors and track progress.
          </p>

          <form onSubmit={handleSubmit} autoComplete="off">
            {loginType === "email" ? (
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label>Email</label>
              </div>
            ) : (
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={loginData.phone}
                  onChange={handleChange}
                  placeholder=" "
                  pattern="[0-9]{6,15}"
                  required
                />
                <label>Phone Number</label>
              </div>
            )}

            <div className="form-group">
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label>Password</label>
            </div>

            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            {error && <p className="error-msg">{error}</p>}
            {success && <p className="success-msg">Login successful — redirecting…</p>}

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>

          <div className="divider">OR</div>

          <div className="social-login">
            <button className="social google" type="button">Continue with Google</button>
            <button className="social linkedin" type="button">Continue with LinkedIn</button>
          </div>

          <div className="switch-type" onClick={switchLoginType}>
            {loginType === "email" ? "Sign in with Phone instead" : "Sign in with Email instead"}
          </div>

          <div className="signup-link">Don't have an account? <Link to="/signup">Sign Up</Link></div>
        </div>
      </div>

      <div className="login-right">
        <div className="overlay">
          <h2>Get Certified. Get Ahead.</h2>
          <p>5M+ careers advanced • 1500+ live classes monthly • 85% learners got promoted</p>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        .login-container { display:flex; min-height:100vh; font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial; }
        .login-left { flex:1; display:flex; justify-content:center; align-items:center; background:#f9fafb; padding:40px; position:relative; }
        .brand-logo { position:absolute; top:20px; left:30px; font-size:1.1rem; font-weight:800; color:#2563eb; }
        .login-box { background:#fff; padding:40px 32px; border-radius:16px; box-shadow:0 8px 32px rgba(0,0,0,0.08); width:100%; max-width:420px; }
        .login-box h1 { font-size:1.8rem; margin-bottom:8px; color:#111827; }
        .subtitle { color:#6b7280; margin-bottom:24px; font-size:0.95rem; }

        .form-group { position:relative; margin-bottom:18px; }
        .form-group input { width:100%; padding:14px 12px; border:1.5px solid #d1d5db; border-radius:8px; outline:none; background:#fff; transition:all .15s; font-size:1rem; }
        .form-group input:focus { border-color:#2563eb; box-shadow:0 0 0 6px rgba(37,99,235,0.08); }
        .form-group label { position:absolute; top:50%; left:12px; transform:translateY(-50%); font-size:0.95rem; color:#9ca3af; transition:0.15s; background:#fff; padding:0 4px; pointer-events:none; }
        .form-group input:focus + label, .form-group input:not(:placeholder-shown) + label { top:-8px; font-size:0.75rem; color:#2563eb; }

        .forgot-password { text-align:right; margin-bottom:12px; }
        .forgot-password a { color:#2563eb; text-decoration:none; font-size:0.9rem; }
        .forgot-password a:hover { text-decoration:underline; }

        .login-btn { width:100%; padding:14px; background:#2563eb; color:#fff; border:none; border-radius:8px; font-weight:700; cursor:pointer; }
        .login-btn:hover { background:#1e40af; }

        .divider { margin:18px 0; text-align:center; color:#9ca3af; }

        .social-login { display:flex; gap:12px; flex-direction:column; }
        .social { padding:12px; border-radius:8px; font-weight:700; border:none; cursor:pointer; font-size:0.95rem; }
        .social.google { background:#fff; border:1px solid #d1d5db; color:#111; }
        .social.linkedin { background:#0a66c2; color:#fff; }

        .switch-type { margin-top:14px; color:#2563eb; cursor:pointer; font-weight:700; }
        .signup-link { margin-top:12px; color:#6b7280; }
        .signup-link a { color:#2563eb; font-weight:700; }

        .error-msg { color:#dc2626; font-weight:700; margin-bottom:12px; }
        .success-msg { color:#065f46; font-weight:700; margin-bottom:12px; }

        .login-right { flex:1; background-image:url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop&s=9b5b9e"); background-size:cover; background-position:center; display:flex; align-items:center; justify-content:center; }
        .overlay { background:rgba(0,0,0,0.56); color:#fff; padding:40px; border-radius:12px; max-width:520px; text-align:center; box-shadow:0 20px 50px rgba(2,6,23,0.4); }
        .overlay h2 { font-size:1.6rem; margin-bottom:8px; }
        .overlay p { line-height:1.6; opacity:0.95; }

        @media(max-width:768px) {
          .login-container { flex-direction:column; }
          .login-right { display:none; }
          .brand-logo { left:16px; top:12px; }
          .login-box { max-width:520px; padding:28px; }
        }
      `}</style>
    </div>
  );
}
