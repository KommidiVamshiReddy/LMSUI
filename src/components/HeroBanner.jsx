// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function HeroBanner() {
//   const [q, setQ] = useState("");
//   const navigate = useNavigate();

//   const submit = (e) => {
//     e.preventDefault();
//     navigate(`/courses?search=${encodeURIComponent(q)}`);
//   };

//   return (
//     <section className="tm-hero">
//       <div className="tm-hero-inner">
//         <h1>Upskill with industry-relevant courses</h1>
//         <p>Live classes • Expert mentors • Certificates</p>

//         <form onSubmit={submit} className="tm-search">
//           <input
//             value={q}
//             onChange={(e) => setQ(e.target.value)}
//             placeholder="Search courses (e.g. React, Data Science)"
//           />
//           <button type="submit">Search</button>
//         </form>
//       </div>

//       <style>{`
//         .tm-hero { background: linear-gradient(90deg, #083d88 0%, #0d61aa 100%); color:white; padding:64px 20px; }
//         .tm-hero-inner { max-width:1100px; margin:0 auto; text-align:center; }
//         .tm-hero h1 { font-size:40px; margin:0 0 8px; }
//         .tm-hero p { margin:0 0 18px; opacity:0.95; }
//         .tm-search { display:flex; justify-content:center; gap:8px; max-width:720px; margin:0 auto; }
//         .tm-search input { flex:1; padding:12px 14px; border-radius:6px; border:none; font-size:16px; }
//         .tm-search button { padding:12px 18px; background:#ff8b00; border:none; color:white; font-weight:600; border-radius:6px; cursor:pointer; }
//         @media (max-width:600px) {
//           .tm-hero h1 { font-size:28px; }
//           .tm-search { flex-direction:column; }
//           .tm-search button { width:100%; }
//         }
//       `}</style>
//     </section>
//   );
// }
