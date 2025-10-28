import React, { useState, useEffect } from "react";

const heroSlides = [
{
  image:
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  heading: "Accelerate Your Career with HG’s TalentMinds",
  subheading: "Empowering You to Learn and Lead",
  description:
    "Upgrade your skills with real-world, industry-aligned programs designed for modern professionals.",
  button: "Explore Programs",
},


  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    heading: "Master Future-Ready Technologies",
    subheading: "AI, Data Science, Cloud & More",
    description:
      "Stay ahead of the curve by mastering the most in-demand technologies with hands-on learning.",
    button: "Browse Courses",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    heading: "Join a Global Learner Community",
    subheading: "Learn, Collaborate, and Get Hired",
    description:
      "Our learners work at top companies worldwide. Learn with expert mentors and get placement support.",
    button: "Join Now",
  },
];

export default function HeroBannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="hero-slider-section">
      <div className="hero-slider-content">
        <div className="hero-slider-left">
          <h1>{slide.heading}</h1>
          <h2>{slide.subheading}</h2>
          <p>{slide.description}</p>
          <button className="hero-slider-btn">{slide.button}</button>
        </div>
        <div className="hero-slider-right">
          <img src={slide.image} alt="Hero Slide" />
        </div>
      </div>

      <style>{`
        .hero-slider-section {
          background: #f8fafc;
          padding: 64px 20px 48px 20px;
          transition: all 0.4s ease;
        }

        .hero-slider-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }

        .hero-slider-left {
          flex: 1;
        }

        .hero-slider-left h1 {
          font-size: 2.8rem;
          color: #0b4da3;
          font-weight: 800;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .hero-slider-left h2 {
          font-size: 1.9rem;
          color: #1f2937;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .hero-slider-left p {
          font-size: 1.1rem;
          color: #4b5563;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .hero-slider-btn {
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 14px 36px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-slider-btn:hover {
          background: #174ea6;
          transform: translateY(-2px);
        }

        .hero-slider-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }

        .hero-slider-right img {
          width: 100%;
          max-width: 460px;
          height: 340px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
        }

        .hero-slider-right img:hover {
          transform: scale(1.03);
        }

        @media (max-width: 900px) {
          .hero-slider-content {
            flex-direction: column-reverse;
            align-items: center;
            text-align: center;
          }

          .hero-slider-left h1 {
            font-size: 2.2rem;
          }

          .hero-slider-left h2 {
            font-size: 1.4rem;
          }

          .hero-slider-right img {
            width: 100%;
            max-width: 360px;
            height: 240px;
          }
        }
      `}</style>
    </section>
  );
}
