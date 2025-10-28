import React from "react";
import HeroBanner from "../components/HeroBanner.jsx";
import CoursesGrid from "../components/CoursesGrid.jsx";
import Testimonials from "../components/Testimonials.jsx";
import courses from "../data/courses.jsx";


export default function HomePage() {
  const popular = courses.slice(0, 4);
  return (
    <div>
      <HeroBanner />
      <section style={{ padding: "30px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 18px" }}>
          <h2 style={{ margin: 0 }}>Popular courses</h2>
         // <p style={{ color: "#6b7280", marginTop: 6 }}>Top trending courses people enroll in</p>
        </div>
        <CoursesGrid courses={popular} />
      </section>

      <Testimonials />
    </div>
  );
}
