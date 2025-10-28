import React from "react";

export default function ContactPage() {
  return (
    <div style={{ padding:"40px 18px" }}>
      <div style={{ maxWidth:700, margin:"0 auto" }}>
        <h2>Contact us</h2>
        <p>For sales or partnerships, write to us at <strong>hgtalentminds@gmail.com</strong></p>

        <form style={{ display:"grid", gap:10, marginTop:14 }}>
          <input placeholder="Your name" style={{ padding:10, borderRadius:6, border:"1px solid #e6e9ef" }} />
          <input placeholder="Your email" style={{ padding:10, borderRadius:6, border:"1px solid #e6e9ef" }} />
          <textarea placeholder="How can we help?" style={{ padding:10, borderRadius:6, border:"1px solid #e6e9ef" }} rows={6} />
          <button style={{ padding:"10px 14px", background:"#0b4da3", color:"white", borderRadius:6, border:"none", cursor:"pointer" }}>Send message</button>
        </form>
      </div>
    </div>
  );
}
