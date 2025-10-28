import React, { useState } from "react";
import HeroBannerSlider from "../components/HeroBannerSlider";
import CompanyMarquee from "../components/CompanyMarquee";
import CourseCard from "../components/CourseCard";
import Testimonials from "../components/Testimonials";
import LearnerTrust from "../components/LearnerTrust";
import SkillBoostBanner from "../components/SkillBoostBanner";

const courses = [
  {
    title: "Full Stack Web Development",
    subtitle: "Master MERN stack: MongoDB, Express, React, Node.js",
    image: "https://img-c.udemycdn.com/course/480x270/1565838_e54e_16.jpg",
    rating: 4.7,
    students: 3200,
    price: 4999,
    slug: "full-stack-web-development",
    bestseller: true,
  },
  {
    title: "Data Science & Machine Learning",
    subtitle: "Python, Pandas, Scikit-learn, Deep Learning & more",
    image: "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg",
    rating: 4.8,
    students: 4100,
    price: 5999,
    slug: "data-science-machine-learning",
    bestseller: true,
  },
  {
    title: "React for Beginners",
    subtitle: "Build modern web apps with React and Hooks",
    image: "https://img-c.udemycdn.com/course/480x270/2195280_49b2_3.jpg",
    rating: 4.6,
    students: 2100,
    price: 2999,
    slug: "react-for-beginners",
    bestseller: false,
  },
  {
    title: "Java Programming Masterclass",
    subtitle: "From basics to advanced Java concepts",
    image: "https://img-c.udemycdn.com/course/480x270/533682_c10c_4.jpg",
    rating: 4.5,
    students: 1800,
    price: 2499,
    slug: "java-programming-masterclass",
    bestseller: false,
  },
  {
    title: "AWS Certified Solutions Architect",
    subtitle: "Crack AWS certification with hands-on labs",
    image: "https://img-c.udemycdn.com/course/480x270/2196488_8fc7_10.jpg",
    rating: 4.7,
    students: 2700,
    price: 3999,
    slug: "aws-certified-solutions-architect",
    bestseller: true,
  },
  {
    title: "UI/UX Design Bootcamp",
    subtitle: "Design stunning interfaces with Figma & Adobe XD",
    image: "https://img-c.udemycdn.com/course/480x270/1430746_2f43_10.jpg",
    rating: 4.6,
    students: 1900,
    price: 3499,
    slug: "ui-ux-design-bootcamp",
    bestseller: false,
  },
  {
    title: "Python for Everybody",
    subtitle: "Learn Python from scratch for data & web",
    image: "https://img-c.udemycdn.com/course/480x270/851712_fc61_6.jpg",
    rating: 4.8,
    students: 5000,
    price: 0,
    slug: "python-for-everybody",
    bestseller: true,
  },
  {
    title: "Digital Marketing Mastery",
    subtitle: "SEO, SEM, Social Media & Analytics in one course",
    image: "https://img-c.udemycdn.com/course/480x270/914296_3670_8.jpg",
    rating: 4.5,
    students: 1600,
    price: 2999,
    slug: "digital-marketing-mastery",
    bestseller: false,
  },
  {
    title: "DevOps Engineer Certification",
    subtitle: "Learn CI/CD, Docker, Kubernetes, Jenkins, and AWS",
    image: "https://img-c.udemycdn.com/course/480x270/2733262_3b5c_4.jpg",
    rating: 4.7,
    students: 3400,
    price: 5499,
    slug: "devops-engineer-certification",
    bestseller: true,
  },
  {
    title: "AI & Deep Learning with TensorFlow",
    subtitle: "Master neural networks, CNNs, RNNs, and TensorFlow 2.0",
    image: "https://img-c.udemycdn.com/course/480x270/1068638_b0f3_4.jpg",
    rating: 4.8,
    students: 2900,
    price: 5999,
    slug: "ai-deep-learning-tensorflow",
    bestseller: true,
  },
  {
    title: "Cyber Security Expert Program",
    subtitle: "Defend against attacks and secure enterprise systems",
    image: "https://img-c.udemycdn.com/course/480x270/1561458_7f3b_6.jpg",
    rating: 4.6,
    students: 2500,
    price: 6499,
    slug: "cyber-security-expert-program",
    bestseller: true,
  },
  {
    title: "Cloud Computing with Microsoft Azure",
    subtitle: "Build and deploy applications using Azure cloud services",
    image: "https://img-c.udemycdn.com/course/480x270/2634490_e343_3.jpg",
    rating: 4.6,
    students: 2000,
    price: 4999,
    slug: "cloud-computing-microsoft-azure",
    bestseller: false,
  },
  {
    title: "Ethical Hacking for Beginners",
    subtitle: "Master penetration testing, Kali Linux, and network security",
    image: "https://img-c.udemycdn.com/course/480x270/857010_8239_3.jpg",
    rating: 4.7,
    students: 4600,
    price: 3999,
    slug: "ethical-hacking-for-beginners",
    bestseller: true,
  },
  {
    title: "Project Management Professional (PMP®)",
    subtitle: "Prepare for PMP certification with full practice exams",
    image: "https://img-c.udemycdn.com/course/480x270/902194_5b29_3.jpg",
    rating: 4.8,
    students: 3800,
    price: 6999,
    slug: "project-management-pmp",
    bestseller: true,
  },
  {
    title: "ChatGPT & Generative AI for Developers",
    subtitle: "Build AI-powered applications using OpenAI APIs",
    image: "https://img-c.udemycdn.com/course/480x270/5285404_58a0_3.jpg",
    rating: 4.9,
    students: 1700,
    price: 2999,
    slug: "chatgpt-generative-ai-for-developers",
    bestseller: true,
  },
  {
    title: "Blockchain Developer Bootcamp",
    subtitle: "Learn Solidity, Ethereum, and smart contract deployment",
    image: "https://img-c.udemycdn.com/course/480x270/2822322_41a9_6.jpg",
    rating: 4.7,
    students: 2100,
    price: 5499,
    slug: "blockchain-developer-bootcamp",
    bestseller: true,
  },
];

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(8);

  return (
    <div style={{ background: "#f8fafc" }}>
      <HeroBannerSlider />

      {/* Company Marquee */}
      <div
        style={{
          background: "linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%)",
          padding: "32px 0 24px 0",
          marginBottom: "32px",
        }}
      >
        <CompanyMarquee />
      </div>

      {/* Course Section */}
      <section
        style={{
          padding: "32px 0 48px 0",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: "#0b4da3",
            fontWeight: 700,
            marginBottom: 24,
            fontSize: "2rem",
            letterSpacing: "0.5px",
            textAlign: "center",
          }}
        >
          Popular Courses
        </h2>
        <div
          style={{
            display: "flex",
            gap: 32,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {courses.slice(0, visibleCount).map((course, idx) => (
            <div
              key={idx}
              style={{
                width: 320,
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                overflow: "hidden",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* Explore / Show Less Buttons */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          {visibleCount < courses.length ? (
            <button
              onClick={() => setVisibleCount(courses.length)}
              style={{
                background: "linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "14px 40px",
                fontWeight: 700,
                fontSize: "1.1rem",
                cursor: "pointer",
                boxShadow: "0 2px 10px rgba(37,99,235,0.15)",
              }}
            >
              Explore More Courses →
            </button>
          ) : (
            <button
              onClick={() => setVisibleCount(8)}
              style={{
                background: "#e0eafc",
                color: "#2563eb",
                border: "none",
                borderRadius: 8,
                padding: "12px 36px",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
              }}
            >
              Show Less
            </button>
          )}
        </div>
      </section>

      <Testimonials />
      <LearnerTrust />
      <SkillBoostBanner />
    </div>
  );
}
