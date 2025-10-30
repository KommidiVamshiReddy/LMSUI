import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../../state/AppState.jsx";

const demoCourses = [
  { id: "c1", title: "React for Beginners", progress: 42, price: 499 },
  { id: "c2", title: "Advanced JavaScript", progress: 20, price: 699 },
  { id: "c3", title: "UI/UX Fundamentals", progress: 12, price: 299 },
];

export default function MyCourses() {
  const { addToCart, addToWishlist, cart, wishlist } = useAppState();

  return (
    <div className="page-wrap">
      <header className="page-head">
        <h1>My Courses</h1>
        <p className="muted">Continue where you left off</p>
      </header>

      <section className="courses">
        {demoCourses.map((c) => {
          const inCart = cart.find((x) => x.id === c.id);
          const inWishlist = wishlist.find((x) => x.id === c.id);
          return (
            <article className="course" key={c.id}>
              <div className="info">
                <h3>{c.title}</h3>
                <div className="progress-bar">
                  <div
                    className="fill"
                    style={{ width: c.progress + "%" }}
                  />
                </div>
                <div className="muted" style={{ marginTop: 6 }}>
                  Price: ₹{c.price}
                </div>
              </div>

              <div className="actions">
                <Link to={`/dashboard/course/${c.id}`} className="btn">
                  Open
                </Link>
                <button
                  className="btn alt"
                  onClick={() => addToCart(c)}
                  disabled={!!inCart}
                >
                  {inCart ? "In cart" : "Add to cart"}
                </button>
                <button
                  className="btn ghost"
                  onClick={() => addToWishlist(c)}
                  disabled={!!inWishlist}
                >
                  {inWishlist ? "Saved" : "Wishlist"}
                </button>
              </div>
            </article>
          );
        })}
      </section>

      <style>{`
        .page-wrap{ max-width:1100px; margin:18px auto; padding:12px; font-family:Inter,system-ui,Arial; }
        .courses{ display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:14px; margin-top:12px; }
        .course{ background:#fff; padding:14px; border-radius:10px; display:flex; justify-content:space-between; align-items:center; box-shadow:0 8px 24px rgba(2,6,23,0.04); }
        .progress-bar{ width:220px; height:10px; background:#eef2ff; border-radius:999px; overflow:hidden; margin-top:8px; }
        .fill{ height:100%; background:linear-gradient(90deg,#3b82f6,#06b6d4); transition: width .5s; }
        .btn{ background:#2563eb; color:#fff; padding:8px 12px; border-radius:8px; text-decoration:none; font-weight:700; border:none; cursor:pointer; }
        .btn.alt{ background:#06b6d4; margin-left:8px; }
        .btn.ghost{ background:transparent; color:#0f172a; border:1px solid #e6eef9; margin-left:8px; }
        .btn[disabled]{ opacity:0.6; cursor:default; }
        @media(max-width:700px){ .course{ flex-direction:column; align-items:flex-start; gap:10px; } .progress-bar{ width:100% } }
      `}</style>
    </div>
  );
}
