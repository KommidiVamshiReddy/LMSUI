import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import coursesData from "../data/courses.jsx";
import CoursesGrid from "../components/CoursesGrid.jsx";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CoursesPage() {
  const qParams = useQuery();
  const prefill = qParams.get("search") || "";

  const [search, setSearch] = useState(prefill);
  const [category, setCategory] = useState("All");
  const [priceFilter, setPriceFilter] = useState("all"); 

  const categories = useMemo(() => ["All", ...Array.from(new Set(coursesData.map(c => c.category)))], []);

  const filtered = useMemo(() => {
    return coursesData.filter(c => {
      if (category !== "All" && c.category !== category) return false;
      if (priceFilter === "free" && c.price !== 0) return false;
      if (priceFilter === "paid" && c.price === 0) return false;
      if (search && !(`${c.title} ${c.subtitle} ${c.category}`.toLowerCase().includes(search.toLowerCase()))) return false;
      return true;
    });
  }, [category, priceFilter, search]);

  return (
    <div style={{ padding: "28px 0" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 18px" }}>
        <h2 style={{ marginBottom:6 }}>All courses</h2>
        <p style={{ color:"#6b7280", marginTop:0 }}>Filter and find the right course for you</p>

        <div style={{ display:"flex", gap:12, marginTop:18, marginBottom:18, flexWrap:"wrap" }}>
          <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search courses..." style={{padding:10, borderRadius:6, border:"1px solid #e6e9ef", minWidth:220}} />

          <select value={category} onChange={(e)=>setCategory(e.target.value)} style={{padding:10, borderRadius:6, border:"1px solid #e6e9ef"}}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <select value={priceFilter} onChange={(e)=>setPriceFilter(e.target.value)} style={{padding:10, borderRadius:6, border:"1px solid #e6e9ef"}}>
            <option value="all">All prices</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </div>

        <CoursesGrid courses={filtered} />

        {filtered.length === 0 && <p style={{textAlign:"center", color:"#6b7280"}}>No courses match your filters.</p>}
      </div>
    </div>
  );
}
