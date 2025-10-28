import React from "react";
import "./mentor.css";

export default function MentorHero() {
  return (
    <section className="mentor-hero">
      <div className="mentor-hero-content">
        <h1>Share Your Knowledge. Inspire Learners. Become a Mentor.</h1>
        <p>
          Join our growing mentor community and help shape the future of learners worldwide.
        </p>
        <a href="#mentor-form" className="mentor-cta-btn">
          Apply Now
        </a>
      </div>
    </section>
  );
}
