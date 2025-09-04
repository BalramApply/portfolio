import React, { useState } from "react";
import "./ProjectsSection.css";
import { useNavigate } from "react-router-dom";

export const ProjectsSection = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");

  const majorProjectsData = [
    {
      id: 1,
      title: "Zerodha The Stock Place",
      description: "A feature-rich stock trading platform inspired by Zerodha.",
      longDescription:
        "It allows users to create accounts, manage funds, buy and sell stocks, track their portfolio,  Designed with a modern UI and responsive layout, it replicates the look and feel of Zerodha while showcasing robust backend integration, authentication, and real-time updates.",

      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Password",
        "zod",
        "jest",
      ],
      category: "Full Stack",
      image: "/Assets/zerodhaHome.png",

      liveUrl: "https://zerodha-balram.vercel.app/",
      featured: true,
      status: "Completed",
      year: "2025",
    },
    {
      id: 2,
      title: "ProConnect Social Place",
      description: "A professional networking platform inspired by LinkedIn.",
      longDescription:
        "designed to replicate core networking features. Users can create and customize profiles, connect with others, share posts, react and comment, and engage with a dynamic news feed. It includes secure authentication, and a responsive modern UI to Built and showcase advanced front-end design, robust backend logic, and scalable architecture.",

      technologies: [
        "Next.js",
        "Express.js",
        "react-redux",
        "pdfkit",
        "MongoDB",
        "bcrypt",
        "multer",
      ],
      category: "Full Stack",
      image: "/Assets/proConnectHome.png",

      liveUrl: "https://we-connect-balram.vercel.app/",
      featured: true,
      status: "Completed",
      year: "2025",
    },
    {
      id: 3,
      title: "Video Connecting",
      description: "A real-time video conferencing platform inspired by Zoom.",
      longDescription:
        "built to enable high-quality video and audio communication. Users can create or join meetings, share screens, chat in real time, It features secure authentication, peer-to-peer WebRTC connections. Designed to replicate the Zoom experience while demonstrating expertise in real-time communication technologies",

      technologies: [
        "React",
        "socket.io",
        "express",
        "crypto",
        "MongoDB",
        "bcrypt",
        "http-status",
      ],
      category: "Full Stack",
      image: "/Assets/videoCall.png",

      liveUrl: "https://connectvideofrontend.onrender.com/",
      featured: true,
      status: "Completed",
      year: "2025",
    },
    {
      id: 4,
      title: "Chat the Conversation Point ",
      description: "A real-time chat platform for fast, secure conversations",
      longDescription:
        "Built with React, Node.js, Express, and MongoDB, this app delivers 1:1 s over Socket.IO with  read receipts, and presence. Features JWT auth, image/file uploads, and a responsive UI tailored for mobile and desktop.",

      technologies: [
        "React",
        "socket.io",
        "express",
        "cloudinary",
        "MongoDB",
        "jsonwebtoken",
        "cookie-parser",
      ],
      category: "Full Stack",
      image: "/Assets/chatApp.png",

      liveUrl: "https://realchat-azes.onrender.com/",
      featured: true,
      status: "Completed",
      year: "2024",
    },
  ];

  const minorProjectsData = [
    {
      id: 101,
      title: "Dice Rolling Guessing Number Game",
      description:
        "A fast, browser-based dice game where you guess 1–6, roll the virtual die, and score points. Built with HTML, CSS, JavaScript, and Bootstrap, with high scores saved in Local Storage.",
      longDescription:
        "A lightweight, mobile-friendly dice guessing game. Pick a number between 1 and 6, tap Roll, and see if your guess matches the die. The app tracks your cur",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Local Storage"],
      category: "Frontend",
      image: "/Assets/diceGame.png",
      liveUrl: "https://gussinggame.netlify.app/",
      githubUrl: "https://github.com/username/exclusive-ecommerce",
      status: "Completed",
      year: "2024",
    },
    {
  id: 102,
  title: "Student Registration Form",
  description:
    "A responsive web-based registration form for students with validation and data persistence.",
  longDescription:
    "The Student Registration Form project allows users to enter and submit their details such as name, age, email, course selection, and more. The form is built with HTML, CSS, and JavaScript to provide real-time validation and a user-friendly experience. It ensures data accuracy with validation checks (e.g., email format, required fields) and stores the submitted data using Local Storage for persistence",
  technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Local Storage"],
  category: "Frontend",
  image: "/Assets/studentData.png",
  liveUrl: "https://student-registration-form-demo.netlify.app/",
  githubUrl: "https://github.com/username/student-registration-form",
  status: "Completed",
  year: "2024"
}
,
    {
  id: 103,
  title: "Coin Toss",
  description:
    "A simple and fun web app to flip a virtual coin and track results.",
  longDescription:
    "The Coin Toss project is an interactive game where users can flip a virtual coin to get Heads or Tails. Built using HTML, CSS, and JavaScript, the app features smooth animations, random outcomes, and real-time result display. It also tracks the total number of flips, heads, and tails using Local Storage so that the stats persist even after page reload.",
  technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Local Storage"],
  category: "Frontend",
  image: "/Assets/coinToss.png",
  liveUrl: "https://cointossapp.netlify.app/",
  githubUrl: "https://github.com/username/cointoss-app",
  status: "Completed",
  year: "2024"
}
,
    {
  id: 104,
  title: "Hidden Numbers",
  description: "An interactive number guessing game with hidden values.",
  longDescription:
    "Hidden Numbers is a fun and challenging browser-based game where players try to guess hidden numbers within a given range. The app provides instant feedback on whether the guess is too high, too low, or correct. It includes score tracking, levels of difficulty, and smooth animations to enhance the gaming experience. Built with HTML, CSS, and JavaScript.",
  technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Local Storage"],
  category: "Frontend",
  image: "/Assets/hideNumbers.png",
  liveUrl: "https://numberinggame.netlify.app/",
  githubUrl: "https://github.com/username/hidden-numbers-game",
  status: "Completed",
  year: "2023"
}
,
    {
  id: 105,
  title: "Background Color Changer",
  description:
    "A simple app to change and experiment with background colors dynamically.",
  longDescription:
    "The Background Color Changer is an interactive web project where users can change the background color of the page with a single click. It includes features like random color generation, manual color input (HEX/RGB), and a copy-to-clipboard option for selected colors. This project demonstrates JavaScript DOM manipulation, event handling, and responsive design with Bootstrap.",
  technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Local Storage"],
  category: "Frontend",
  image: "/Assets/bgColorChanger.png",
  liveUrl: "https://bgchangersite.netlify.app/",
  githubUrl: "https://github.com/username/bg-color-changer",
  status: "Completed",
  year: "2024"
},
  ];

  const featuredProjects = majorProjectsData.filter(
    (project) => project.featured
  );

  // Filter function
  const getFilteredProjects = () => {
    switch (activeFilter) {
      case "major":
        return { major: featuredProjects, minor: [] };
      case "minor":
        return { major: [], minor: minorProjectsData };
      default:
        return { major: featuredProjects, minor: minorProjectsData };
    }
  };

  const filteredData = getFilteredProjects();

  return (
    <div className="projects-showcase" id="projects">
      <header className="hero-section">
        <div className="projects-container">
          <h1 className="hero-title">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="hero-subtitle">
            Crafting digital experiences through code, creativity, and
            innovation
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">
                {majorProjectsData.length + minorProjectsData.length}+
              </span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </header>

      <section className="featured-section">
        <div className="featured-bg" />
        <div className="project-container">
          <h2 className="section-title">
            My <span className="highlight-projects">Projects</span>
          </h2>

          {/* Filter Buttons */}
          <div className="filter-container">
            <button
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              <i className="fa-solid fa-grip"></i>
              All Projects
              <span className="filter-count">
                ({majorProjectsData.length + minorProjectsData.length})
              </span>
            </button>
            <button
              className={`filter-btn ${
                activeFilter === "major" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("major")}
            >
              <i className="fa-solid fa-star"></i>
              Featured
              <span className="filter-count">({featuredProjects.length})</span>
            </button>
            <button
              className={`filter-btn ${
                activeFilter === "minor" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("minor")}
            >
              <i className="fa-solid fa-code"></i>
              Other Projects
              <span className="filter-count">({minorProjectsData.length})</span>
            </button>
          </div>

          {/* Major/Featured Projects */}
          {filteredData.major.length > 0 && (
            <>
              <h3 className="subsection-title">Featured Projects</h3>
              <div className="featured-grid">
                {filteredData.major.map((project) => (
                  <div className="flip-card" key={project.id}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-image"
                        />
                        <div className="card-content">
                          <h3 className="project-title">{project.title}</h3>
                          <div className="project-meta">
                            <span
                              className={`status-badge ${project.status
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            >
                              {project.status}
                            </span>
                            {project.title === "Personal Finance Tracker" && (
                              <span className="status-badge group-project">
                                Group Project
                              </span>
                            )}
                          </div>
                          <span className="touch-to-flip">
                            Touch To See Details
                          </span>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="back-content">
                          <h3 className="back-title">{project.title}</h3>
                          <p className="back-description">
                            {project.description}
                          </p>
                          <p className="back-description">
                            {project.longDescription}
                          </p>
                          <div className="back-tech">
                            {project.technologies.slice(0, 7).map((tech, i) => (
                              <span key={i} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="back-actions">
                            {project.title !== "Automatic Bill Generator" &&
                              project.title !== "Movie Streaming Website" && (
                                <button
                                  className="action-btn"
                                  onClick={() => {
                                    if (
                                      project.title ===
                                        "School Management System" ||
                                      project.title ===
                                        "Personal Finance Tracker"
                                    ) {
                                      navigate(
                                        `/project-gallery/${project.id}`
                                      );
                                    } else {
                                      window.open(project.liveUrl, "_blank");
                                    }
                                  }}
                                >
                                  {project.title ===
                                    "School Management System" ||
                                  project.title ===
                                    "Personal Finance Tracker" ? (
                                    <>
                                      <i className="fa-solid fa-eye"></i>
                                      View Images
                                    </>
                                  ) : (
                                    <>
                                      <i className="fa-solid fa-up-right-from-square"></i>
                                      Live Demo
                                    </>
                                  )}
                                </button>
                              )}

                            {project.title === "Automatic Bill Generator" && (
                              <button className="action-btn" disabled>
                                <i
                                  className="fa-solid fa-hourglass-half"
                                  style={{ marginRight: "6px" }}
                                ></i>
                                To Be Added Later
                              </button>
                            )}

                            {project.title === "Movie Streaming Website" && (
                              <button className="action-btn" disabled>
                                <i
                                  className="fa-solid fa-wrench"
                                  style={{ marginRight: "6px" }}
                                ></i>
                                Project in Progress
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {filteredData.minor.length > 0 && (
            <>
              <h3 className="subsection-title">Mini Projects</h3>
              <div className="featured-grid">
                {filteredData.minor.map((project) => (
                  <div className="flip-card" key={project.id}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-image"
                        />
                        <div className="card-content">
                          <h3 className="project-title">{project.title}</h3>
                          <div className="project-meta">
                            <span
                              className={`status-badge ${project.status
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            >
                              {project.status}
                            </span>
                            {project.title === "Personal Finance Tracker" && (
                              <span className="status-badge group-project">
                                Group Project
                              </span>
                            )}
                          </div>
                          <span className="touch-to-flip">
                            Touch To See Details
                          </span>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="back-content">
                          <h3 className="back-title">{project.title}</h3>
                          <p className="back-description">
                            {project.description}
                          </p>
                          <p className="back-description">
                            {project.longDescription}
                          </p>
                          <div className="back-tech">
                            {project.technologies.slice(0, 7).map((tech, i) => (
                              <span key={i} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="back-actions">
                            {project.title !== "Automatic Bill Generator" &&
                              project.title !== "Movie Streaming Website" && (
                                <button
                                  className="action-btn"
                                  onClick={() => {
                                    if (
                                      project.title ===
                                        "School Management System" ||
                                      project.title ===
                                        "Personal Finance Tracker"
                                    ) {
                                      navigate(
                                        `/project-gallery/${project.id}`
                                      );
                                    } else {
                                      window.open(project.liveUrl, "_blank");
                                    }
                                  }}
                                >
                                  {project.title ===
                                    "School Management System" ||
                                  project.title ===
                                    "Personal Finance Tracker" ? (
                                    <>
                                      <i className="fa-solid fa-eye"></i>
                                      View Images
                                    </>
                                  ) : (
                                    <>
                                      <i className="fa-solid fa-up-right-from-square"></i>
                                      Live Demo
                                    </>
                                  )}
                                </button>
                              )}

                            {project.title === "Automatic Bill Generator" && (
                              <button className="action-btn" disabled>
                                <i
                                  className="fa-solid fa-hourglass-half"
                                  style={{ marginRight: "6px" }}
                                ></i>
                                To Be Added Later
                              </button>
                            )}

                            {project.title === "Movie Streaming Website" && (
                              <button className="action-btn" disabled>
                                <i
                                  className="fa-solid fa-wrench"
                                  style={{ marginRight: "6px" }}
                                ></i>
                                Project in Progress
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Minor Projects Section */}
      {/* {filteredData.minor.length > 0 && (
        <section className="minor-projects-section">
          <div className="project-container">
            <h3 className="subsection-title">Other Projects</h3>
            <p className="section-subtitle">
              Exploring different technologies and building practical solutions
            </p>
            
            <div className="minor-projects-grid">
              {filteredData.minor.map((project) => (
                <div key={project.id} className="minor-project-card">
                  <div className="minor-card-header">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="minor-project-image"
                    />
                    <div className="minor-card-overlay">
                      <span className={`minor-status-badge ${project.status.toLowerCase().replace(/\s+/g, "-")}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="minor-card-content">
                    <h3 className="minor-project-title">{project.title}</h3>
                    <p className="minor-project-description">{project.description}</p>
                    
                    <div className="minor-tech-stack">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span key={i} className="minor-tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="minor-tech-tag more">+{project.technologies.length - 4}</span>
                      )}
                    </div>
                    
                    <div className="minor-card-actions">
                      <button 
                        className="minor-action-btn live-btn"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <i className="fa-solid fa-external-link-alt"></i>
                        Live Demo
                      </button>
                      {project.githubUrl && (
                        <button 
                          className="minor-action-btn github-btn"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <i className="fab fa-github"></i>
                          Code
                        </button>
                      )}
                    </div>
                    
                    <div className="minor-project-meta">
                      <span className="minor-category">{project.category}</span>
                      <span className="minor-year">{project.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )} */}
    </div>
  );
};
