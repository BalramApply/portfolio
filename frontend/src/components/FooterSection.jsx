import React from 'react';
import { ArrowUp } from "lucide-react";
import "./FooterSection.css";

export const FooterSection = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        
        <div className="site-footer__brand">
          <div className="site-footer__name">
            <span className="site-footer__name--first">Balram</span>
            <span className="site-footer__name--last">Patel</span>
          </div>
        </div>

        <nav className="site-footer__nav">
          <a href="#home" className="site-footer__link">Home</a>
          <a href="#about" className="site-footer__link">About</a>
          <a href="#leetcode" className="site-footer__link">Leetcode</a>
          <a href="#skills" className="site-footer__link">Skills</a>
          <a href="#projects" className="site-footer__link">Projects</a>
          <a href="#experience" className="site-footer__link">Experience</a>
          <a href="#resume" className="site-footer__link">Resume</a>
        </nav>

        <div className="site-footer__copyright">
          © {new Date().getFullYear()} Balram Patel. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};