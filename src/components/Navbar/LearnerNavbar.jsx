// src/components/Navbar/LearnerNavbar.jsx
import React from "react";

const LearnerNavbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-[#1E3A8A]">HG's TalentMinds</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">👋 Hello, Learner</span>
        <button className="bg-[#1E3A8A] text-white px-3 py-1 rounded-md hover:bg-blue-800">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default LearnerNavbar;
