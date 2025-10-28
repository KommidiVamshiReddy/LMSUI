import React, { useState } from "react";
import "./mentor.css";

export default function MentorForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    expertiseIn: "",
    qualification: "",
    experience: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    // TODO: Connect to backend API
    console.log("Mentor Application:", formData);

    // Reset after submission (optional)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      expertiseIn: "",
      qualification: "",
      experience: "",
    });
  };

  return (
    <section className="mentor-form-section" id="mentor-form">
      <div className="mentor-form-card">
        <h2>Become a Mentor at HG's TalentMinds LMS</h2>
        <p className="mentor-form-subtitle">
          Share your expertise and guide learners worldwide 🚀
        </p>

        {success ? (
          <div className="mentor-success-msg">
            <h2>✅ Thank you for applying!</h2>
            <p>
              Your application has been received. <br />
              Our team will review and contact you soon. <br />
              Meanwhile, explore our mentor resources and community!
            </p>
          </div>
        ) : (
          <form className="mentor-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label>First Name *</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder=" "
              />
              <label>Last Name</label>
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
              <label>Email *</label>
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder=" "
                required
                minLength={6}
              />
              <label>Password *</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder=" "
                pattern="^[0-9]{10,15}$"
              />
              <label>Phone</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="expertiseIn"
                value={formData.expertiseIn}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label>Area of Expertise *</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder=" "
              />
              <label>Qualification</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder=" "
              />
              <label>Experience (years)</label>
            </div>

            <button type="submit" className="mentor-cta-btn">
              Submit Application
            </button>
          </form>
        )}
      </div>

      {/* Inline CSS */}
      <style>{`
        .mentor-form-section {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #f9fafb;
          padding: 40px 20px;
        }
        .mentor-form-card {
          background: #fff;
          padding: 40px 32px;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          width: 100%;
          max-width: 520px;
          text-align: center;
        }
        .mentor-form-card h2 {
          font-size: 1.8rem;
          margin-bottom: 8px;
          color: #111827;
        }
        .mentor-form-subtitle {
          color: #6b7280;
          margin-bottom: 28px;
          font-size: 0.95rem;
        }
        .mentor-form {
          text-align: left;
        }
        .form-group {
          position: relative;
          margin-bottom: 20px;
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
        .mentor-cta-btn {
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
        .mentor-cta-btn:hover {
          background: #1e40af;
        }
        .mentor-success-msg {
          background: #f8fafc;
          border-radius: 14px;
          box-shadow: 0 2px 12px rgba(37,99,235,0.08);
          padding: 32px 24px;
          margin-top: 32px;
          text-align: center;
          color: #2563eb;
        }
        .mentor-success-msg h2 {
          margin-bottom: 12px;
          font-size: 1.5rem;
          font-weight: 800;
        }
        .mentor-success-msg p {
          color: #374151;
          font-size: 1.08rem;
        }
      `}</style>
    </section>
  );
}
