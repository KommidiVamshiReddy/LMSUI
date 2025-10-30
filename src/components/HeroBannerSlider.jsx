import React, { useState, useEffect, useRef } from "react";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    heading: "Get Certified. Get Ahead.",
    stats: [
      "8,000+ Careers advanced",
      "1,500+ Live classes every month",
      "85% Report career success",
    ],
    primaryButton: "Explore Programs",
    secondaryButton: "Try TalentMinds for Business",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    heading: "Accelerate Your Career with HG’s TalentMinds",
    stats: [
      "Industry-Ready Courses",
      "Expert-Led Learning",
      "Career Mentorship Support",
    ],
    primaryButton: "Browse Courses",
    secondaryButton: "Learn More",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    heading: "Join a Global Learner Community",
    stats: [
      "Hands-on Projects",
      "Global Certification",
      "Placement Assistance",
    ],
    primaryButton: "Join Now",
    secondaryButton: "Explore Learning Paths",
  },
];

export default function HeroBannerSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startTimer() {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % heroSlides.length);
    }, 5000);
  }
  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function goto(i) {
    setCurrent(i % heroSlides.length);
    startTimer();
  }
  function prev() {
    goto((current - 1 + heroSlides.length) % heroSlides.length);
  }
  function next() {
    goto((current + 1) % heroSlides.length);
  }

  const slide = heroSlides[current];

  return (
    <section className="hero-section" aria-roledescription="carousel">
      <div className="hero-container">
        <div className="hero-content">
          <h1>{slide.heading}</h1>

          <ul className="hero-stats" aria-hidden="false">
            {slide.stats.map((item, i) => (
              <li key={i}>
                <span className="check">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="hero-buttons">
            <button className="primary-btn" type="button">
              {slide.primaryButton}
            </button>
            <button className="secondary-btn" type="button">
              {slide.secondaryButton}
            </button>
          </div>

          <div className="mobile-image-preview" aria-hidden="true">
            <img src={slide.image} alt="" />
          </div>

          <div className="dots" role="tablist" aria-label="Slides">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                onClick={() => goto(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === current}
                role="tab"
              />
            ))}
          </div>
        </div>

        <div className="hero-visual" onMouseEnter={stopTimer} onMouseLeave={startTimer}>
          <img src={slide.image} alt={slide.heading} />
          <div className="controls">
            <button className="ctrl prev" onClick={prev} aria-label="Previous slide">‹</button>
            <button className="ctrl next" onClick={next} aria-label="Next slide">›</button>
          </div>
        </div>
      </div>

      <style>{`
        /* container & reset */
        .hero-section { width:100%; overflow:hidden; box-sizing:border-box; padding:48px 16px; background:#fff; }
        .hero-container { max-width:1200px; margin:0 auto; display:flex; gap:32px; align-items:center; box-sizing:border-box; }

        /* left content */
        .hero-content { flex:1 1 520px; min-width:0; }
        .hero-content h1 { font-size:2.6rem; line-height:1.05; margin:0 0 18px; color:#0f172a; font-weight:800; }
        .hero-stats { list-style:none; padding:0; margin:0 0 20px; color:#334155; font-size:1rem; display:grid; gap:10px; }
        .hero-stats li { display:flex; align-items:center; gap:10px; }
        .check { color:#10b981; font-weight:800; }

        .hero-buttons { display:flex; gap:12px; flex-wrap:wrap; margin-top:8px; }
        .primary-btn, .secondary-btn { padding:12px 24px; border-radius:8px; font-weight:700; cursor:pointer; border:0; }
        .primary-btn { background:#2563eb; color:#fff; }
        .secondary-btn { background:transparent; color:#2563eb; border:2px solid #2563eb; }

        /* right visual */
        .hero-visual { flex:0 0 520px; display:flex; align-items:center; justify-content:center; position:relative; min-height:320px; }
        .hero-visual img { width:100%; height:100%; max-height:420px; object-fit:cover; border-radius:10px; display:block; }

        /* controls and dots */
        .controls { position:absolute; inset:auto 12px 12px auto; display:flex; gap:8px; right:12px; bottom:12px; }
        .ctrl { background:rgba(2,6,23,0.6); color:#fff; border:0; width:36px; height:36px; border-radius:8px; cursor:pointer; font-size:20px; line-height:1; display:flex; align-items:center; justify-content:center; }
        .dots { margin-top:18px; display:flex; gap:8px; }
        .dot { width:10px; height:10px; border-radius:10px; border:1px solid #cbd5e1; background:transparent; cursor:pointer; }
        .dot.active { background:#2563eb; border-color:#2563eb; }

        /* mobile image preview inside left column (shown on small) */
        .mobile-image-preview { display:none; margin-top:18px; }
        .mobile-image-preview img { width:100%; height:auto; border-radius:10px; display:block; object-fit:cover; }

        /* accessibility focus states */
        .primary-btn:focus, .secondary-btn:focus, .ctrl:focus, .dot:focus { outline:3px solid rgba(37,99,235,0.25); outline-offset:2px; }

        /* responsive */
        @media (max-width: 1000px) {
          .hero-container { gap:20px; }
          .hero-visual { min-height:280px; flex:0 0 48%; }
          .hero-content { flex:1 1 52%; }
          .hero-content h1 { font-size:2rem; }
        }

        @media (max-width: 700px) {
          .hero-container { flex-direction:column-reverse; padding:28px 12px; align-items:stretch; }
          .hero-content { order:2; text-align:center; padding:0; }
          .hero-content h1 { font-size:1.45rem; margin-top:4px; }
          .hero-stats { font-size:0.95rem; }
          .hero-buttons { justify-content:center; }
          .hero-visual { order:1; width:100%; min-height:180px; }
          .hero-visual img { max-height:260px; }
          .controls { right:12px; bottom:12px; }
          .mobile-image-preview { display:block; }
          .hero-visual { display:block; }
          .controls { position:absolute; display:flex; }
        }

        /* prevent accidental horizontal scroll */
        @media (max-width: 420px) {
          .hero-section { padding-left:12px; padding-right:12px; }
          .primary-btn, .secondary-btn { padding:10px 16px; font-size:0.95rem; }
        }
      `}</style>
    </section>
  );
}
