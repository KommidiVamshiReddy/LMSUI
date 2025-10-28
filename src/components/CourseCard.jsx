import React from "react";
import { Link } from "react-router-dom";


export default function CourseCard({ course }) {
 
  const studentsCount = course?.students ?? 0; 
  const rating = course?.rating ?? 0;
  const price = course?.price ?? 0;
  const subtitle = course?.subtitle ?? "";
  const slug = course?.slug ?? "";
  const title = course?.title ?? "Untitled Course";
  const image = course?.image ?? "https://via.placeholder.com/300x160?text=No+Image";
  const isBestseller = course?.bestseller ?? false; 

  return (
    <article className="tm-course-card">
      <Link to={`/courses/${slug}`}>
        <div className="tm-thumb">
          <img src={image} alt={title} />
          {isBestseller && <span className="tm-badge">Bestseller</span>}
        </div>
      </Link>

      <div className="tm-body">
        <h3 className="tm-title">
          <Link to={`/courses/${slug}`}>{title}</Link>
        </h3>
        <p className="tm-sub">{subtitle}</p>
        <div className="tm-meta">
          <span className="tm-rating">
            <span className="star">★</span> {rating}
          </span>
          <span className="tm-students">{studentsCount.toLocaleString()} learners</span>
        </div>
        <div className="tm-bottom">
          <span className={`tm-price ${price === 0 ? "free" : ""}`}>
            {price === 0 ? "Free" : `₹${price}`}
          </span>
          <Link to={`/courses/${slug}`} className="tm-enroll">
            View Course
          </Link>
        </div>
      </div>

      <style>{`
        .tm-course-card {
          border-radius: 12px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.2s;
          height: 100%;
        }
        .tm-course-card:hover {
          box-shadow: 0 6px 24px rgba(11,77,163,0.13);
        }
        .tm-thumb {
          position: relative;
          height: 170px;
          background: #f6f7fb;
          overflow: hidden;
        }
        .tm-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .tm-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #ffd700;
          color: #22223b;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 4px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
        }
        .tm-body {
          padding: 18px 16px 16px 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .tm-title {
          margin: 0 0 8px;
          font-size: 19px;
          color: #0b4da3;
          font-weight: 700;
          line-height: 1.2;
        }
        .tm-title a {
          color: inherit;
          text-decoration: none;
        }
        .tm-sub {
          margin: 0 0 12px;
          color: #4b5563;
          font-size: 15px;
          min-height: 36px;
        }
        .tm-meta {
          display: flex;
          gap: 12px;
          align-items: center;
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 14px;
        }
        .tm-rating {
          color: #f59e42;
          font-weight: 600;
        }
        .star {
          color: #f59e42;
          font-size: 15px;
          margin-right: 2px;
        }
        .tm-students {
          color: #6b7280;
        }
        .tm-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }
        .tm-price {
          font-size: 17px;
          font-weight: 700;
          color: #0b4da3;
        }
        .tm-price.free {
          color: #059669;
        }
        .tm-enroll {
          display: inline-block;
          padding: 8px 18px;
          background: #0b4da3;
          color: #fff;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          font-size: 15px;
          transition: background 0.2s;
        }
        .tm-enroll:hover {
          background: #083b7a;
        }
      `}</style>
    </article>
  );
}
