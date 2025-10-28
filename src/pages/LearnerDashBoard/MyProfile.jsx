import React from "react";

export default function Profile() {
  const learner = {
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    enrolled: "2024-06-10",
  };

  return (
    <div>
      <h2>My Profile</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> {learner.name}</p>
        <p><strong>Email:</strong> {learner.email}</p>
        <p><strong>Phone:</strong> {learner.phone}</p>
        <p><strong>Joined On:</strong> {learner.enrolled}</p>
      </div>

      <style>{`
        .profile-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }
        p { margin-bottom: 8px; color: #374151; }
      `}</style>
    </div>
  );
}
