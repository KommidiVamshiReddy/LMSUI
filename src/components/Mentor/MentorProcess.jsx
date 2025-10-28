import React from "react";
import "./mentor.css";

const steps = [
  { step: "1", title: "Apply Online", desc: "Fill out a quick application form." },
  { step: "2", title: "Get Reviewed", desc: "Our team will review your application." },
  { step: "3", title: "Start Mentoring", desc: "Once approved, begin mentoring learners!" }
];

export default function MentorProcess() {
  return (
    <section className="mentor-process">
      <h2>How It Works</h2>
      <div className="mentor-process-steps">
        {steps.map((s, idx) => (
          <div key={idx} className="mentor-step">
            <span className="mentor-step-number">{s.step}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
