import React from "react";

export default function CourseDetails() {
  const course = {
    title: "React for Beginners",
    instructor: "John Doe",
    progress: 42,
    description:
      "Learn the fundamentals of React.js, including components, state management, hooks, and project structure. Build modern, interactive user interfaces and dynamic web apps from scratch.",
    lessons: [
      "Introduction to React",
      "JSX and Components",
      "Props & State",
      "Hooks and Context",
      "Project: Build a Todo App",
    ],
    banner:
      "https://images.unsplash.com/photo-1581276879432-15a19d654956?auto=format&fit=crop&w=1600&q=60",
  };

  return (
    <div>
      <div className="banner">
        <img src={course.banner} alt="Course Banner" />
        <div className="overlay">
          <h1>{course.title}</h1>
          <p>Instructor: {course.instructor}</p>
        </div>
      </div>

      <div className="details">
        <h2>Course Overview</h2>
        <p className="desc">{course.description}</p>

        <div className="progress">
          <div className="bar" style={{ width: `${course.progress}%` }}></div>
        </div>
        <p className="progress-text">{course.progress}% complete</p>

        <div className="section">
          <h3>Lessons</h3>
          <ul>
            {course.lessons.map((lesson, index) => (
              <li key={index}>{lesson}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="#">Download Course Materials (PDF)</a>
            </li>
            <li>
              <a href="#">Project Source Code (GitHub)</a>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .banner {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .banner img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          filter: brightness(75%);
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 20px;
          color: #fff;
          background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6));
        }

        .overlay h1 {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .overlay p {
          font-size: 1rem;
          opacity: 0.9;
        }

        .details {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
        }

        .details h2 {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .desc {
          color: #475569;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .progress {
          background: #e2e8f0;
          height: 10px;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .bar {
          height: 100%;
          background: linear-gradient(90deg, #2563eb, #38bdf8);
          border-radius: 8px;
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: 0.9rem;
          color: #64748b;
          margin-bottom: 20px;
        }

        .section {
          margin-top: 20px;
        }

        .section h3 {
          font-size: 1.1rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 8px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        ul li {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 10px 12px;
          margin-bottom: 6px;
          font-size: 0.95rem;
          color: #334155;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        ul li:hover {
          background: #e0f2fe;
          transform: translateX(4px);
        }

        a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 600;
        }

        a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .overlay {
            align-items: center;
            text-align: center;
          }
          .overlay h1 {
            font-size: 1.4rem;
          }
          .banner img {
            height: 180px;
          }
        }
      `}</style>
    </div>
  );
}
