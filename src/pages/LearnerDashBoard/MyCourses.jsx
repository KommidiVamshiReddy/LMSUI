import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const demo = [
  { id: "c1", title: "React for Beginners", instructor: "Asha K", progress: 42 },
  { id: "c2", title: "Advanced JavaScript", instructor: "Ravi P", progress: 78 },
  { id: "c3", title: "UI/UX Fundamentals", instructor: "Sneha R", progress: 12 },
];

export default function MyCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses([
      {
        id: 1,
        title: "React Fundamentals",
        instructor: "John Smith",
        progress: 78,
        thumbnail: "https://picsum.photos/400/220?random=1",
      },
      {
        id: 2,
        title: "UI/UX Design Masterclass",
        instructor: "Emily Davis",
        progress: 45,
        thumbnail: "https://picsum.photos/400/220?random=2",
      },
      {
        id: 3,
        title: "JavaScript Data Structures",
        instructor: "Michael Johnson",
        progress: 90,
        thumbnail: "https://picsum.photos/400/220?random=3",
      },
    ]);
  }, []);

  return (
    <div className="my-courses-page">
      <h1 className="page-title">🎓 My Courses</h1>
      <p className="muted">Continue where you left off and track your progress</p>

      <div className="grid">
        {demo.map((c) => (
          <article key={c.id} className="course-card">
            <div className="meta">
              <div className="title">{c.title}</div>
              <div className="sub">{c.instructor}</div>
            </div>

            <div className="progress-wrap">
              <div className="progress-bar"><div style={{ width: `${c.progress}%` }} /></div>
              <div className="pct">{c.progress}%</div>
            </div>

            <div className="actions">
              <Link to={`/dashboard/course/${c.id}`} className="btn">Open</Link>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .my-courses-page {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 8px 30px rgba(15,23,42,0.05);
          padding: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .page-title{ font-size:1.5rem; margin-bottom:12px; color:#0f172a; }
        .muted {
          color: #64748b;
          font-size: 0.95rem;
          margin-bottom: 20px;
        }

        .grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:12px; }
        .course-card{ background:#fff; padding:12px; border-radius:12px; box-shadow:0 8px 30px rgba(2,6,23,0.05); display:flex; flex-direction:column; gap:10px; }

        .meta {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .title{ font-weight:800; }
        .sub{ color:#6b7280; font-size:0.9rem; }

        .progress-wrap{ display:flex; align-items:center; gap:8px; }
        .progress-bar{ flex:1; height:8px; background:#eef2ff; border-radius:8px; overflow:hidden; }
        .progress-bar > div{ height:100%; background:linear-gradient(90deg,#2563eb,#06b6d4); }
        .pct{ font-weight:800; color:#0f172a; width:48px; text-align:right; }

        .actions{ display:flex; justify-content:flex-end; }
        .btn{ padding:8px 10px; background:#2563eb; color:#fff; border-radius:8px; text-decoration:none; font-weight:700; }

        @media (max-width: 700px) {
          .my-courses-page {
            padding: 16px;
          }
          .grid{ grid-template-columns:1fr; }
        }
      `}</style>
    </div>
  );
}
