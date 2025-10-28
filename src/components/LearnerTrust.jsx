import React, { useEffect, useState } from "react";

const platforms = [
  {
    name: "Udemy",
    logo: "https://logo.svgcdn.com/logos/udemy.png",
    rating: 4.7,
  },
  {
    name: "Coursera",
    logo: "https://logo.svgcdn.com/logos/coursera.png",
    rating: 4.8,
  },
  
];


export default function LearnerTrust() {
  const [count, setCount] = useState(0);
  const target = 8000;

  useEffect(() => {
    if (count < target) {
      const increment = Math.ceil((target - count) / 40);
      const timer = setTimeout(() => setCount(Math.min(count + increment, target)), 25);
      return () => clearTimeout(timer);
    }
  }, [count, target]);

  return (
    <section className="lt-section">
      <h2 className="lt-title">
        Join <span className="lt-highlight">{count.toLocaleString()} Learners</span> Who Trust Learning with Us
      </h2>

      <div className="lt-ratings">
        {platforms.map((p, i) => (
          <div className="lt-rating-card" key={i}>
            <div className="lt-rating-score">
              {p.rating} <span className="lt-star">★</span>
            </div>
            <div className="lt-rating-logo">
              <img
                src={p.logo}
                alt={p.name}
                onError={(e) => (e.target.src = "https://via.placeholder.com/100x40?text=Logo")}
              />
              <span>{p.name}</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .lt-section {
          background: #fff;
          padding: 56px 0 36px 0;
        }
        .lt-title {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 800;
          color: #22223b;
          margin-bottom: 38px;
        }
        .lt-highlight {
          color: #f59e42;
        }
        .lt-ratings {
          display: flex;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
        }
        .lt-rating-card {
          background: #f8fafc;
          border-radius: 18px;
          box-shadow: 0 2px 16px rgba(11,77,163,0.07);
          padding: 28px 38px 22px 38px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 200px;
          min-height: 120px;
        }
        .lt-rating-score {
          font-size: 2rem;
          font-weight: 700;
          color: #22223b;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .lt-star {
          color: #f59e42;
          font-size: 1.5rem;
        }
        .lt-rating-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .lt-rating-logo img {
          height: 36px;
          width: auto;
          object-fit: contain;
          background: #fff;
          border-radius: 8px;
        }
        .lt-rating-logo span {
          font-size: 1.08rem;
          color: #22223b;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}
