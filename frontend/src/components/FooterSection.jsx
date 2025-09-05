import React from 'react';
import { ArrowUp, Eye } from "lucide-react";
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

        {/* Direct FreeCounterStat Integration */}
        <div className="site-footer__visitor-counter">
          <div className="visitor-counter-display">
            {/* <Eye size={16} className="visitor-icon" /> */}
            {/* <span className="visitor-label">Visitors:</span> */}
            
            {/* Direct HTML integration - exactly as provided by FreeCounterStat */}
            <div className="counter-container">
              <div 
                id="sfcwxpc39h6c43dygw57esjf22645jtqdq7"
                dangerouslySetInnerHTML={{ __html: '' }}
              ></div>
              
              <noscript>
                <a href="https://www.freecounterstat.com" title="counter widget">
                  <img 
                    src="https://counter5.optistats.ovh/private/freecounterstat.php?c=wxpc39h6c43dygw57esjf22645jtqdq7" 
                    border="0" 
                    title="counter widget" 
                    alt="counter widget"
                    style={{
                      maxHeight: '18px',
                      filter: 'invert(1) brightness(0.9)'
                    }}
                  />
                </a>
              </noscript>
            </div>
          </div>
        </div>

        <div className="site-footer__copyright">
          © {new Date().getFullYear()} Balram Patel. All rights reserved.
        </div>
        
      </div>
      
      {/* Load script at the bottom of the component */}
      <script 
        type="text/javascript" 
        src="https://counter5.optistats.ovh/private/counter.js?c=wxpc39h6c43dygw57esjf22645jtqdq7&down=async" 
        async
      ></script>
    </footer>
  );
};