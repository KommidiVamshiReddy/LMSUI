import React from "react";

export default function Assignments() {
  const assignments = [
    { id: 1, title: "JavaScript Basics Quiz", due: "2025-11-10", status: "Pending" },
    { id: 2, title: "React Mini Project", due: "2025-11-20", status: "Submitted" },
  ];

  return (
    <div>
      <h2>Assignments</h2>
      <table className="assign-table">
        <thead>
          <tr><th>Title</th><th>Due Date</th><th>Status</th></tr>
        </thead>
        <tbody>
          {assignments.map((a) => (
            <tr key={a.id}>
              <td>{a.title}</td>
              <td>{a.due}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        h2 { margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; background: white; }
        th, td { padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: left; }
        th { background: #f3f4f6; }
      `}</style>
    </div>
  );
}
