import React from "react";
import { useParams, Link } from "react-router-dom";
import courses from "../data/courses.jsx";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", color: "#0b4da3" }}>Oops! Course Not Found 😕</h2>
        <p style={{ color: "#6b7280", marginTop: 10 }}>
          The course you’re looking for isn’t available right now. It may have been removed or updated.
        </p>
        <Link
          to="/"
          style={{
            display: "inline-block",
            marginTop: 24,
            background: "#2563eb",
            color: "#fff",
            padding: "10px 24px",
            borderRadius: 6,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          ← Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1200, margin: "40px auto", padding: "0 20px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: 30,
          alignItems: "flex-start",
        }}
      >
        {/* LEFT SECTION */}
        <div>
          <img
            src={course.image}
            alt={course.title}
            style={{
              width: "100%",
              borderRadius: 10,
              objectFit: "cover",
              maxHeight: 400,
              boxShadow: "0 3px 12px rgba(0,0,0,0.1)",
            }}
          />
          <h1 style={{ marginTop: 20, color: "#0b4da3" }}>{course.title}</h1>
          <p style={{ color: "#4b5563", fontSize: "1.05rem" }}>{course.subtitle}</p>

          <h3 style={{ marginTop: 30, color: "#1e293b" }}>📘 About this Course</h3>
          <p style={{ color: "#374151", lineHeight: 1.7, marginTop: 8 }}>
            {course.description ||
              "This comprehensive course helps you master both fundamentals and advanced concepts through hands-on projects, quizzes, and practical exercises — preparing you for real-world applications and certifications."}
          </p>

          <h3 style={{ marginTop: 30, color: "#1e293b" }}>🎯 What You'll Learn</h3>
          <ul style={{ marginTop: 12, color: "#374151", lineHeight: 1.7 }}>
            {course.modules && course.modules.length > 0 ? (
              course.modules.map((m) => (
                <li key={m.id}>
                  {m.title} — <small>{m.duration}</small>
                </li>
              ))
            ) : (
              <>
                <li>Understand key concepts with practical demonstrations</li>
                <li>Hands-on projects and assignments</li>
                <li>Build real-world applications step-by-step</li>
                <li>Learn from industry experts and mentors</li>
              </>
            )}
          </ul>

          <h3 style={{ marginTop: 30, color: "#1e293b" }}>👨‍🏫 Instructor</h3>
          <p style={{ color: "#475569" }}>
            <strong>{course.instructor || "John Doe"}</strong> — Senior Trainer with 10+ years of industry experience.
            Specializes in enterprise-grade projects and advanced tools used in modern IT companies.
          </p>

          <h3 style={{ marginTop: 30, color: "#1e293b" }}>⭐ Student Reviews</h3>
          <p style={{ color: "#475569" }}>
            Average Rating: <strong>{course.rating}</strong> / 5.0 — Trusted by{" "}
            <strong>{course.students.toLocaleString()}</strong> learners worldwide.
          </p>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside
          style={{
            border: "1px solid #e6e9ef",
            padding: 20,
            borderRadius: 10,
            boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
            background: "#fff",
            position: "sticky",
            top: 80,
          }}
        >
          <img
            src={course.image}
            alt={course.title}
            style={{
              width: "100%",
              borderRadius: 8,
              objectFit: "cover",
              marginBottom: 16,
            }}
          />
          <div
            style={{
              fontWeight: 700,
              fontSize: 22,
              color: "#111827",
              marginBottom: 6,
            }}
          >
            {course.price === 0 ? "Free" : `₹${course.price}`}
          </div>
          <div style={{ color: "#6b7280", marginBottom: 8 }}>
            ⭐ {course.rating} | {course.students.toLocaleString()} learners
          </div>

          <button
            style={{
              width: "100%",
              background: "linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)",
              color: "#fff",
              padding: "12px 0",
              fontSize: "1rem",
              fontWeight: 700,
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              marginBottom: 14,
              transition: "0.2s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = "linear-gradient(90deg, #1d4ed8 0%, #0ea5e9 100%)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)")
            }
          >
            Enroll Now
          </button>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: 8,
              padding: "10px 12px",
              fontSize: "0.95rem",
              color: "#475569",
            }}
          >
            🎓 Lifetime access<br />
            🧾 Certificate on completion<br />
            💻 Hands-on projects<br />
            💬 24/7 mentor support
          </div>
        </aside>
      </div>
    </div>
  );
}
