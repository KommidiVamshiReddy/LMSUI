import React from "react";
import CourseCard from "../../components/CourseCard";

export default function MyCourses() {
  const courses = [
    { id: 1, title: "React for Beginners", progress: 60 },
    { id: 2, title: "Python Programming", progress: 45 },
  ];

  return (
    <div>
      <h2>My Courses</h2>
      <div className="grid">
        {courses.map((c) => (
          <CourseCard key={c.id} title={c.title} progress={c.progress} />
        ))}
      </div>

      <style>{`
        h2 { margin-bottom: 20px; color: #111827; }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
        }
      `}</style>
    </div>
  );
}
