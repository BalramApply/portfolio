import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Calendar, Code, ChevronRight, GraduationCap, Award } from "lucide-react";
import "./ExperienceSection.css";

const experiences = [
  {
    type: "experience",
    title: "Development and Support Intern",
    company: "Heedkeep Private Limited",
    address: "South City 2, Gurugram, Haryana",
    duration: "Jun '24 – Oct '24",
    fullDuration: "Jun 2024 – Oct 2024 (5 Months)",
    tech: [
      "React.js",
      "C#",
      ".NET MAUI",
      "MySQL",
      "Express.js",
      "Node.js",
    ],
    highlights: [
      "Collaborated with the team to debug issues, improve performance, and enhance user experience",
      "Optimized applications using React, C#, .NET MAUI and MySQL",
      "Enhanced logs forwarding to clients in PDF format",
      "Created .NET MAUI components for multi-platform mobile applications"
    ],
    projectLinks: {
      ecommerce: "https://exclusive-ecommerce-website-five.vercel.app/",
      maui: "/project-gallery/2",
    },
    certificateLink: "/Assets/Heedkeep.jpg",
    icon: "💼",
    date: "2024-10",
    status: "completed",
    order: 3,
  },
  {
    type: "experience",
    title: "Development Intern",
    company: "TalentGro Global Private Limited",
    address: "Virtual Internship",
    duration: "Feb '24 – Mar '24",
    fullDuration: "Feb 2024 – Mar 2024 (2 Months)",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Deployment",
    ],
    highlights: [
      "Collaborated with the team to design and develop the FAQ module for the company",
      "Built responsive and interactive web components using HTML, CSS, and JavaScript",
      "Gained valuable teamwork experience and application understanding within organizations",
      "Contributed to enhancing user experience for website visitors"
    ],
    projectLinks: {
      ecommerce: "https://exclusive-ecommerce-website-five.vercel.app/",
      schoolMgmt: "https://your-school-management.vercel.app",
    },
    certificateLink: "/Assets/talentGrow.jpg",
    icon: "💼",
    date: "2024-03",
    status: "completed",
    order: 4,
  }
];

const education = [
  {
    type: "education",
    title: "Master of Computer Applications",
    institution: "Gurugram University",
    grade: "CGPA: 7.9",
    duration: "Pursuing",
    status: "ongoing",
    icon: "🎓",
    date: "current",
    order: 2, 
    marksheetLink: "/Assets/MCA-marksheet.pdf",
  },
  {
    type: "education",
    title: "Bachelor of Computer Applications",
    institution: "Gurugram University",
    grade: "CGPA: 6.7",
    duration: "Jun 2021 – Aug 2024",
    status: "completed",
    icon: "🎓",
    date: "2024-08",
    order: 5,
    marksheetLink: "/Assets/bca-marksheet.pdf",
  },
  {
    type: "education",
    title: "XII (HBSE)",
    institution: "Govt. Sr. Sec. School, Gurugram",
    grade: "90.2%",
    duration: "2021",
    status: "completed",
    icon: "📚",
    date: "2021",
    order: 6,
    marksheetLink: "/Assets/12th-marksheet.jpg",
  },
  {
    type: "education",
    title: "X (HBSE)",
    institution: "Govt. Sr. Sec. School, Gurugram",
    grade: "82%",
    duration: "2019",
    status: "completed",
    icon: "📚",
    date: "2019",
    order: 7,
    marksheetLink: "/Assets/10th-marksheet.jpg",
  }
];

const placeholder = {
  isPlaceholder: true,
  message: "More experiences coming soon...",
  icon: "🚀",
  date: "future",
  order: 1, // At the very top
};

// Combine all items and sort by order (ascending - bottom to top)
const allItems = [...experiences, ...education, placeholder].sort((a, b) => {
  return a.order - b.order;
});

export const ExperienceSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(
              (prev) => new Set([...prev, entry.target.dataset.index])
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".roadmap-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);
  
  const navigate = useNavigate();
  
  return (
    <section className="roadmap-section" id="experience">
      <div className="roadmap-header">
        <h2 className="roadmap-title">
          My Professional <span className="highlight-journey">Journey</span>
        </h2>
        <p className="roadmap-subtitle">
          Navigate through my career milestones, education, and achievements - from foundation to present
        </p>
      </div>

      <div className="roadmap-container">
        <div className="roadmap-line"></div>

        {allItems.map((item, idx) => (
          <div
            key={idx}
            data-index={idx}
            className={`roadmap-card ${
              visibleCards.has(idx.toString()) ? "visible" : ""
            } ${item.isPlaceholder ? "placeholder-card" : ""} ${item.type === "education" ? "education-card" : "experience-card"}`}
            style={{ "--delay": `${idx * 0.2}s` }}
          >
            <div className="roadmap-marker">
              <div className="marker-icon">
                {item.isPlaceholder ? (
                  <img src="/Assets/444.gif" alt="Coming Soon" />
                ) : item.type === "education" ? (
                  <GraduationCap size={24} />
                ) : (
                  <img src="/Assets/bag.gif" alt="Experience" />
                )}
              </div>
              <div className="marker-pulse"></div>
            </div>

            <div className="roadmap-content">
              {item.isPlaceholder ? (
                <div className="placeholder-content">
                  <div className="placeholder-icon">
                    <img src="/Assets/444.gif" alt="Coming Soon" />
                  </div>
                  <h3>{item.message}</h3>
                  <p>
                    New to the corporate world, but full of energy and
                    curiosity, ready to dive into exciting opportunities!
                  </p>
                </div>
              ) : (
                <>
                  <div className="card-header">
                    <div className={`card-badge ${item.type === "education" ? "education-badge" : "experience-badge"}`}>
                      {item.type === "education" 
                        ? (item.status === "ongoing" ? "Pursuing" : "Completed")
                        : (item.status === "completed" ? "Completed" : "In Progress")
                      }
                    </div>
                    <div className="card-date">
                      <Calendar size={16} />
                      {item.fullDuration || item.duration}
                    </div>
                  </div>

                  <h3 className="card-title">{item.title}</h3>

                  <div className="company-info">
                    <div className="company-name">
                      {item.type === "education" ? (
                        <>
                          <GraduationCap size={16} />
                          {item.institution}
                        </>
                      ) : (
                        <>
                          <i className="fa-solid fa-briefcase"></i>
                          {item.company}
                        </>
                      )}
                    </div>
                    {item.address && (
                      <div className="company-address">
                        <i className="fa-solid fa-location-dot"></i>
                        {item.address}
                      </div>
                    )}
                    {item.grade && (
                      <div className="grade-info">
                        <Award size={16} />
                        {item.grade}
                      </div>
                    )}
                  </div>

                  {item.tech && (
                    <div className="tech-stack">
                      <Code size={16} />
                      <span>Tech Stack:</span>
                      <div className="tech-tags">
                        {item.tech.map((tech, techIdx) => (
                          <span key={techIdx} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.highlights && (
                    <div className="highlights-section">
                      <h4>
                        {item.type === "education" ? "Key Details:" : "Key Achievements:"}
                      </h4>
                      <ul className="highlights-list">
                        {item.highlights.map((point, pi) => (
                          <li key={pi}>
                            <ChevronRight size={14} />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.type === "experience" && item.title === "Development and Support Intern" && (
                    <div className="card-actions">
                      <button
                        className="action-btn gallery-btn"
                        onClick={() => navigate(`/project-gallery/2`)}
                      >
                        <i className="fa-solid fa-images"></i> View Gallery
                      </button>
                      {item.certificateLink && (
                        <a
                          href={item.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-btn certificate-btn"
                        >
                          <i className="fa-solid fa-medal"></i> Certificate
                        </a>
                      )}
                    </div>
                  )}

                  {item.type === "experience" && item.title === "Development Intern" && item.certificateLink && (
                    <div className="card-actions">
                      <a
                        href={item.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn certificate-btn"
                      >
                        <i className="fa-solid fa-medal"></i> Certificate
                      </a>
                    </div>
                  )}

                  {item.type === "education" && (item.degreeLink || item.marksheetLink) && (
                    <div className="card-actions">
                      {item.degreeLink && (
                        <a
                          href={item.degreeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-btn degree-btn"
                        >
                          <i className="fa-solid fa-graduation-cap"></i> 
                          {item.title.includes("Master") ? "Degree" : 
                           item.title.includes("Bachelor") ? "Degree" : "Certificate"}
                        </a>
                      )}
                      {item.marksheetLink && (
                        <a
                          href={item.marksheetLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-btn marksheet-btn"
                        >
                          <i className="fa-solid fa-file-text"></i> Marksheet
                        </a>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};