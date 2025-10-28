// src/components/Sidebar/LearnerSidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const LearnerSidebar = () => {
  const menuItems = [
    { path: "/learner/dashboard", label: "Dashboard", icon: "🏠" },
    { path: "/learner/my-courses", label: "My Courses", icon: "📚" },
    { path: "/learner/assignments", label: "Assignments", icon: "📝" },
    { path: "/learner/profile", label: "Profile", icon: "👤" },
    { path: "/learner/settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <aside className="p-6">
      <h2 className="text-xl font-bold mb-6">TalentMinds</h2>
      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-blue-700 text-white"
                    : "text-gray-300 hover:bg-blue-800 hover:text-white"
                }`
              }
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LearnerSidebar;
