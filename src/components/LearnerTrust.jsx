import React, { useEffect, useState } from "react";

const platforms = [
  {
    name: "Udemy",
    logo: "https://logo.clearbit.com/udemy.com",
    rating: 4.7,
  },
  {
    name: "Coursera",
    logo: "https://logo.clearbit.com/coursera.org",
    rating: 4.8,
  },
];

export default function LearnerTrust() {
  const [count, setCount] = useState(0);
  const target = 8000;

  useEffect(() => {
    if (count < target) {
      const increment = Math.ceil((target - count) / 35);
      const timer = setTimeout(
        () => setCount(Math.min(count + increment, target)),
        25
      );
      return () => clearTimeout(timer);
    }
  }, [count, target]);

  return (
    <section className="lt-section">
      <div className="lt-container">
        <h2 className="lt-title">
          Join{" "}
          <span className="lt-highlight">
            {count.toLocaleString()} Learners
          </span>{" "}
          Who Trust Learning With Us
        </h2>

        <div className="lt-ratings">
          {platforms.map((p, i) => (
            <div className="lt-rating-card" key={i}>
              <div className="lt-rating-score">
                {p.rating}
                <span className="lt-star">★</span>
              </div>
              <div className="lt-rating-logo">
                <img
                  src={p.logo}
                  alt={p.name}
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/100x40?text=Logo")
                  }
                />
                <span>{p.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .lt-section {
          background: #f9fafc;
          padding: 80px 0;
          text-align: center;
        }

        .lt-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .lt-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 48px;
          letter-spacing: 0.5px;
        }

        .lt-highlight {
          color: #f59e42;
        }

        .lt-ratings {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .lt-rating-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(11, 77, 163, 0.08);
          padding: 32px 48px;
          min-width: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .lt-rating-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 30px rgba(37, 99, 235, 0.12);
        }

        .lt-rating-score {
          font-size: 2.2rem;
          font-weight: 700;
          color: #22223b;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .lt-star {
          color: #f59e42;
          font-size: 1.8rem;
        }

        .lt-rating-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .lt-rating-logo img {
          height: 38px;
          width: auto;
          object-fit: contain;
          border-radius: 8px;
          background: #fff;
        }

        .lt-rating-logo span {
          font-size: 1.1rem;
          font-weight: 600;
          color: #0b4da3;
        }

        @media (max-width: 768px) {
          .lt-title {
            font-size: 1.8rem;
            margin-bottom: 32px;
          }

          .lt-rating-card {
            padding: 24px 32px;
          }

          .lt-rating-score {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .lt-section {
            padding: 56px 0;
          }

          .lt-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
