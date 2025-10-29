import React, { useState } from "react";

export default function Assignments() {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "React Project: ToDo App",
      due: "2025-11-05",
      status: "pending",
      description: "Build a simple task manager using React hooks and local storage.",
    },
    {
      id: 2,
      title: "Quiz: React Hooks",
      due: "2025-11-02",
      status: "submitted",
      description: "Multiple choice quiz testing your understanding of React hooks.",
    },
    {
      id: 3,
      title: "JS Fundamentals",
      due: "2025-10-25",
      status: "overdue",
      description: "Review and refactor provided JS code for optimization.",
    },
  ]);

  function getStatusColor(status) {
    switch (status) {
      case "submitted": return "#10b981";
      case "pending": return "#f59e0b";
      case "overdue": return "#ef4444";
      default: return "#6b7280";
    }
  }

  return (
    <div className="assignments-page">
      <h1>📝 Assignments</h1>
      <p className="muted">Track your submissions and upcoming deadlines</p>

      <div className="assignments-list">
        {assignments.map((a) => (
          <div key={a.id} className="assignment-card">
            <div className="left">
              <h3>{a.title}</h3>
              <p className="desc">{a.description}</p>
              <p className="due">📅 Due: {a.due}</p>
            </div>

            <div className="right">
              <span
                className="status"
                style={{ backgroundColor: getStatusColor(a.status) }}
              >
                {a.status}
              </span>
              {a.status === "pending" && <button className="btn">Submit</button>}
              {a.status === "submitted" && <button className="btn ghost">View</button>}
              {a.status === "overdue" && <button className="btn danger">Resubmit</button>}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .assignments-page {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 8px 30px rgba(15,23,42,0.05);
          padding: 24px;
          max-width: 1000px;
          margin: 0 auto;
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
          margin-bottom: 20px;
        }

        .assignments-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .assignment-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 14px;
          transition: all 0.25s ease;
        }

        .assignment-card:hover {
          background: #fff;
          box-shadow: 0 8px 20px rgba(37,99,235,0.1);
          transform: translateY(-2px);
        }

        .left {
          flex: 1;
        }

        h3 {
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 6px;
        }

        .desc {
          color: #475569;
          font-size: 0.92rem;
          margin-bottom: 10px;
        }

        .due {
          color: #64748b;
          font-size: 0.9rem;
        }

        .right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          min-width: 120px;
        }

        .status {
          padding: 6px 10px;
          border-radius: 8px;
          color: #fff;
          font-weight: 700;
          text-transform: capitalize;
          font-size: 0.85rem;
        }

        .btn {
          background: linear-gradient(90deg, #2563eb, #38bdf8);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 8px 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(37,99,235,0.25);
        }

        .btn.ghost {
          background: transparent;
          color: #2563eb;
          border: 1px solid #cbd5e1;
        }

        .btn.danger {
          background: #ef4444;
        }

        @media (max-width: 700px) {
          .assignment-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .right {
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
