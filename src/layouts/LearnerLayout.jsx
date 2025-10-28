// src/components/layouts/LearnerLayout.jsx
import React from "react";
import LearnerNavbar from "../components/Navbar/LearnerNavbar.jsx";
import LearnerSidebar from "../components/Sidebar/LearnerSidebar.jsx";

const LearnerLayout = ({ children }) => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 fixed h-full bg-[#0a1025] text-white">
        <LearnerSidebar />
      </aside>

      {/* Main Section */}
      <div className="ml-64 flex-1 flex flex-col">
        <LearnerNavbar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default LearnerLayout;
