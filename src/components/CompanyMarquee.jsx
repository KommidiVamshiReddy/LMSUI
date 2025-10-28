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
    <div className="company-marquee-container">
      <div className="company-marquee-title">
        <span>Our Hiring Partners</span>
      </div>

      <div className="company-marquee">
        <div className="company-marquee-track">
          {companies.concat(companies).map((company, idx) => (
            <div className="company-marquee-item" key={idx}>
              <img
                src={company.logo}
                alt={company.name}
                onError={(e) => (e.target.src = "/fallback-logo.png")}
              />
              <span>{company.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .company-marquee-container {
          border-radius: 14px;
          margin: 0 auto;
          padding: 0;
          max-width: 1100px;
          background: transparent;
          user-select: none;
        }

        .company-marquee-title {
          font-weight: 800;
          color: #0b4da3;
          font-size: 1.6rem;
          margin-left: 24px;
          margin-bottom: 16px;
          letter-spacing: 0.4px;
        }

        .company-marquee {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .company-marquee-track {
          display: flex;
          align-items: center;
          animation: marquee 20s linear infinite;
          width: max-content;
        }

        .company-marquee:hover .company-marquee-track {
          animation-play-state: paused;
        }

        .company-marquee-item {
          display: flex;
          align-items: center;
          margin: 0 48px;
          gap: 14px;
          font-size: 1.1rem;
          color: #22223b;
          font-weight: 600;
          white-space: nowrap;
          transition: transform 0.2s ease;
        }

        .company-marquee-item:hover {
          transform: scale(1.05);
        }

        .company-marquee-item img {
          height: 50px;
          max-width: 120px;
          object-fit: contain;
          background: #fff;
          border-radius: 8px;
          padding: 8px 14px;
          box-shadow: 0 1px 8px rgba(0,0,0,0.08);
          border: 1px solid #e5e7eb;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 600px) {
          .company-marquee-title {
            font-size: 1.1rem;
            margin-left: 10px;
          }
          .company-marquee-item {
            margin: 0 18px;
            font-size: 0.9rem;
          }
          .company-marquee-item img {
            height: 32px;
            padding: 4px 8px;
          }
        }
      `}</style>
    </div>
  );
}
