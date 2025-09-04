import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useInView as useIntersectionObserver } from "react-intersection-observer";
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaPython, 
  FaDatabase, 
  FaGitAlt,
  FaFigma,
  FaBootstrap,
  FaCode
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress, 
  SiMysql,
  SiPostman,
  SiVscodium,
  SiRedux,
  SiNextdotjs,
  SiFirebase
} from "react-icons/si";

import { cn } from "@/lib/utils";
import "./SkillsSection.css";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  // Skills data with ratings out of 100
  const skillsData = {
    frontend: [
      { name: "React.js", rating: 90, icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", rating: 85, icon: FaJs, color: "#F7DF1E" },
      { name: "HTML5", rating: 95, icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", rating: 90, icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", rating: 88, icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", rating: 82, icon: FaBootstrap, color: "#7952B3" },
    ],
    backend: [
      { name: "Node.js", rating: 82, icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", rating: 80, icon: SiExpress, color: "#000000" },
      { name: "MongoDB", rating: 85, icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", rating: 78, icon: SiMysql, color: "#4479A1" },
      { name: "REST APIs", rating: 88, icon: FaDatabase, color: "#10B981" }
    ],
    other: [
      { name: "Git & GitHub", rating: 90, icon: FaGitAlt, color: "#F05032" },
      { name: "VS Code", rating: 95, icon: SiVscodium, color: "#007ACC" },
      { name: "Postman", rating: 85, icon: SiPostman, color: "#FF6C37" },
      { name: "Framer Motion", rating: 80, icon: FaReact, color: "#0055FF" }
    ]
  };

  const categories = [
    { id: "frontend", label: "Frontend", count: skillsData.frontend.length },
    { id: "backend", label: "Backend", count: skillsData.backend.length },
    { id: "other", label: "Tools & Others", count: skillsData.other.length }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="skills-section" ref={sectionRef}>
      
      <div className="skills-header">
        <div className="bg-galaxy">
                    {/*galaxy starts */}
                  </div>
        <motion.h2 
          className="skills-title"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.p 
          className="skills-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          My technical proficiency across different domains
        </motion.p>
      </div>

      <div className="skills-container">
        {/* Category Tabs */}
        <motion.div 
          className="skills-categories"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              variants={categoryVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="category-label">{category.label}</span>
              <span className="category-count">{category.count}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="skills-grid"
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {skillsData[activeCategory].map((skill, index) => (
            <SkillCard 
              key={`${activeCategory}-${skill.name}`} 
              skill={skill} 
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>

        {/* Overall Stats */}
        <motion.div 
          className="skills-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="stat-item">
            
            <span className="stat-number">
              {skillsData.frontend.length + skillsData.backend.length + skillsData.other.length}+
            </span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects Built</span>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

const SkillCard = ({ skill, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const progressRef = useRef();
  const [ref, inView] = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  // Animated counter for rating
  const AnimatedCounter = ({ value, duration = 2 }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (inView) {
        let start = 0;
        const end = value;
        const incrementTime = (duration * 1000) / end;
        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start === end) clearInterval(timer);
        }, incrementTime);
        
        return () => clearInterval(timer);
      }
    }, [inView, value, duration]);
    
    return count;
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="skill-card"
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="skill-icon" style={{ color: skill.color }}>
        <skill.icon />
        <div 
          className="icon-glow" 
          style={{ 
            backgroundColor: skill.color,
            opacity: isHovered ? 0.3 : 0
          }}
        />
      </div>
      
      <div className="skill-info">
        <h3 className="skill-name">{skill.name}</h3>
        <div className="skill-rating">
          <span className="rating-text">
            <AnimatedCounter value={skill.rating} />%
          </span>
        </div>
      </div>

      <div className="skill-progress">
        <motion.div
          className="progress-bar"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.rating}%` } : { width: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: index * 0.1 + 0.5,
            ease: "easeOut"
          }}
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
          }}
        />
        <div className="progress-track" />
      </div>

      {/* Hover Effect */}
      <motion.div 
        className="skill-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `linear-gradient(135deg, ${skill.color}20, transparent)`
        }}
      />
    </motion.div>
  );
};