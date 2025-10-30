import React from "react";

const companies = [
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
  { name: "Capgemini", logo: "https://logo.clearbit.com/capgemini.com" },
  { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
  { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
  { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
  { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
  { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "HCLTech", logo: "https://logo.clearbit.com/hcltech.com" },
];

export default function CompanyMarquee() {
  return (
    <div className="marquee-wrapper">
      <h2>Our Hiring Partners</h2>

      <div className="marquee">
        <div className="track">
          {companies.concat(companies).map((c, i) => (
            <div className="logo" key={i}>
              <img src={c.logo} alt={c.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Basic container */
        .marquee-wrapper {
          text-align: center;
          padding: 50px 0;
          background: #f8fafc;
          overflow: hidden;
        }

        .marquee-wrapper h2 {
          color: #0f172a;
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 30px;
        }

        /* Marquee area */
        .marquee {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .track {
          display: flex;
          animation: scroll 25s linear infinite;
          width: fit-content;
        }

        .logo {
          flex: 0 0 auto;
          margin: 0 40px;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.1);
        }

        .logo img {
          height: 50px;
          width: auto;
          object-fit: contain;
          filter: grayscale(20%);
          transition: filter 0.3s;
        }

        .logo img:hover {
          filter: grayscale(0%);
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* Responsive tweaks */
        @media (max-width: 768px) {
          .marquee-wrapper h2 {
            font-size: 1.4rem;
          }
          .logo {
            margin: 0 20px;
          }
          .logo img {
            height: 38px;
          }
        }

        /* Global fix: Prevent body scrollbar */
        html, body {
          overflow-x: hidden !important;
        }
      `}</style>
    </div>
  );
}
