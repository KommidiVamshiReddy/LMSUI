import React from "react";
import CourseCard from "./CourseCard.jsx";

export default function CoursesGrid({ courses }) {
  return (
    <section className="tm-grid">
      {courses.map((c) => (
        <CourseCard course={c} key={c.id} />
      ))}

      <style>{`
        .tm-grid { max-width:1100px; margin:30px auto; display:grid; gap:18px; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); padding:0 18px; }
      `}</style>
    </section>
  );
}
