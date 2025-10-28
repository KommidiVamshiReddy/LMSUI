import React, { useState, useEffect, useRef } from "react";

const testimonials = [
	{
		name: "Priya Sharma",
		role: "Software Engineer at Infosys",
		text: "TalentMinds helped me land my dream job! The courses are practical and the mentors are very supportive.",
		image: "https://randomuser.me/api/portraits/women/44.jpg",
	},
	{
		name: "Rahul Verma",
		role: "Full Stack Developer at TCS",
		text: "The hands-on projects and career support were game changers for me. Highly recommended!",
		image: "https://randomuser.me/api/portraits/men/32.jpg",
	},
	{
		name: "Sneha Patil",
		role: "Data Scientist at Wipro",
		text: "I loved the interactive learning experience and the community. I upskilled and got placed quickly.",
		image: "https://randomuser.me/api/portraits/women/68.jpg",
	},
	{
		name: "Amit Singh",
		role: "Cloud Engineer at IBM",
		text: "The curriculum is up-to-date and the support team is always ready to help. Great experience!",
		image: "https://randomuser.me/api/portraits/men/45.jpg",
	},
];

export default function Testimonials() {
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);
	const timerRef = useRef();

	useEffect(() => {
		if (!paused) {
			timerRef.current = setInterval(() => {
				setIndex((prev) => (prev + 1) % testimonials.length);
			}, 4000);
		}
		return () => clearInterval(timerRef.current);
	}, [paused]);

	const goTo = (dir) => {
		setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
	};

	return (
		<section
			className="tm-testimonials-section"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<h2 className="tm-testimonials-title">What Our Learns Say</h2>
			<div className="tm-testimonials-carousel">
				<button
					className="tm-arrow tm-arrow-left"
					onClick={() => goTo(-1)}
					aria-label="Previous"
				>
					<svg width="24" height="24" fill="none">
						<path
							d="M15 19l-7-7 7-7"
							stroke="#2563eb"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
				<div className="tm-testimonial-card">
					<img
						src={testimonials[index].image}
						alt={testimonials[index].name}
						className="tm-testimonial-img"
					/>
					<div className="tm-testimonial-content">
						<p className="tm-testimonial-text">"{testimonials[index].text}"</p>
						<div className="tm-testimonial-meta">
							<span className="tm-testimonial-name">{testimonials[index].name}</span>
							<span className="tm-testimonial-role">{testimonials[index].role}</span>
						</div>
					</div>
				</div>
				<button
					className="tm-arrow tm-arrow-right"
					onClick={() => goTo(1)}
					aria-label="Next"
				>
					<svg width="24" height="24" fill="none">
						<path
							d="M9 5l7 7-7 7"
							stroke="#2563eb"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
			<div className="tm-dots">
				{testimonials.map((_, i) => (
					<span
						key={i}
						className={`tm-dot${i === index ? " active" : ""}`}
						onClick={() => setIndex(i)}
					/>
				))}
			</div>
			<style>{`
        .tm-testimonials-section {
          background: linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%);
          padding: 56px 0 64px 0;
        }
        .tm-testimonials-title {
          text-align: center;
          color: #0b4da3;
          font-size: 2.1rem;
          font-weight: 800;
          margin-bottom: 38px;
          letter-spacing: 0.5px;
        }
        .tm-testimonials-carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          max-width: 600px;
          margin: 0 auto;
        }
        .tm-testimonial-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 24px rgba(11,77,163,0.08);
          padding: 32px 28px 28px 28px;
          max-width: 340px;
          min-width: 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .tm-testimonial-card:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 8px 32px rgba(37,99,235,0.13);
        }
        .tm-testimonial-img {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 18px;
          border: 3px solid #2563eb;
          box-shadow: 0 2px 8px rgba(37,99,235,0.10);
        }
        .tm-testimonial-content {
          text-align: center;
        }
        .tm-testimonial-text {
          font-size: 1.08rem;
          color: #374151;
          margin-bottom: 18px;
          font-style: italic;
        }
        .tm-testimonial-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .tm-testimonial-name {
          font-weight: 700;
          color: #0b4da3;
          font-size: 1.08rem;
        }
        .tm-testimonial-role {
          color: #64748b;
          font-size: 0.98rem;
        }
        .tm-arrow {
          background: #e0eafc;
          border: none;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
          box-shadow: 0 2px 8px rgba(37,99,235,0.10);
        }
        .tm-arrow:hover {
          background: #2563eb;
        }
        .tm-arrow:hover svg path {
          stroke: #fff;
        }
        .tm-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 22px;
        }
        .tm-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #b6c6e3;
          display: inline-block;
          cursor: pointer;
          transition: background 0.2s;
        }
        .tm-dot.active {
          background: #2563eb;
        }
        @media (max-width: 900px) {
          .tm-testimonials-carousel {
            gap: 8px;
          }
          .tm-testimonial-card {
            max-width: 95vw;
            padding: 24px 10vw 24px 10vw;
          }
        }
        @media (max-width: 600px) {
          .tm-testimonials-section {
            padding: 36px 0 38px 0;
          }
          .tm-testimonials-title {
            font-size: 1.3rem;
            margin-bottom: 18px;
          }
          .tm-testimonials-carousel {
            flex-direction: row;
            gap: 4px;
          }
          .tm-testimonial-card {
            padding: 18px 8vw 18px 8vw;
          }
        }
      `}</style>
		</section>
	);
}
