import React from "react";
import "./mentor.css";

const benefits = [
  {
    title: "Make an Impact",
    desc: "Guide learners and help them achieve their career goals."
  },
  {
    title: "Grow Your Network",
    desc: "Connect with professionals, educators, and industry leaders."
  },
  {
    title: "Flexible Engagement",
    desc: "Choose how and when you contribute as a mentor."
  }
];

export default function MentorBenefits() {
  return (
    <section className="mentor-benefits">
      <h2>Why Become a Mentor?</h2>
      <div className="mentor-benefits-grid">
        {benefits.map((b, idx) => (
          <div key={idx} className="mentor-benefit-card">
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
