import React, { useState } from "react";
import "./ResumeSection.css";

const ResumeSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pdfError, setPdfError] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handlePdfLoad = () => {
    setIsLoading(false);
  };

  const handlePdfError = () => {
    setIsLoading(false);
    setPdfError(true);
  };

  const handleDownload = (e) => {
    e.preventDefault(); 
    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);

     
      const link = document.createElement("a");
      link.href = "/Assets/Balram_Resume.pdf";
      link.download = "Balram_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 5000);
  };

  return (
    <section className="resume-section" id="resume">
      
      <div className="resume-header">
    
        <h2 className="resume-title">My Resume</h2>
        <p className="resume-subtitle">
          Explore my professional journey, skills, and achievements
        </p>
      </div>

      <div className="resume-container">
       
        <div className="resume-preview">
          <div className="image-container">
            <img
              src="/Assets/Balram_Resume.png"
              alt="Resume Preview"
              className="resume-image"
              onLoad={handlePdfLoad}
              onError={handlePdfError}
            />
            {isLoading && (
              <div className="loading-spinner">
                <div className="spinner"></div>
                <p>Loading preview...</p>
              </div>
            )}
            {pdfError && (
              <div className="pdf-fallback">
                <div className="fallback-icon">📄</div>
                <h3>Preview Unavailable</h3>
                <p>Unable to load the preview image.</p>
              </div>
            )}
          </div>
        </div>

        <div className="resume-info">
          
          <div className="info-content">
            
            <h3 className="info-title">Professional Summary</h3>
            <p className="resume-text">
              Download my comprehensive resume to discover my technical expertise,
              project experience, and professional accomplishments. Get insights into
              my skills, education, and career progression.
            </p>

            <div className="resume-stats">
              <div className="stats-item">
                <span className="stats-number">5+</span>
                <span className="stats-label">Projects Completed</span>
              </div>
              <div className="stats-item">
                <span className="stats-number">10+</span>
                <span className="stats-label">Technologies</span>
              </div>
            </div>

            <div className="resume-actions">
              <a
                href="/Assets/Balram_Resume.pdf"
                className={`resume-button primary ${isDownloading ? "loading" : ""}`}
                onClick={handleDownload}
              >
                {isDownloading ? (
                  <>
                    <span className="button-spinner"></span> Preparing Download...
                  </>
                ) : (
                  <>
                    <span className="button-icon">
                      <i className="fa-solid fa-download"></i>
                    </span>
                    Download Resume
                  </>
                )}
              </a>

              <a
                href="/Assets/Balram_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button secondary"
              >
                <span className="button-icon">
                  <i className="fa-solid fa-globe"></i>
                </span>
                View in Browser
              </a>
            </div>

            <div className="file-info">
              <small>
                <span className="file-type">PDF</span> •
                <span className="file-size">63.5KB</span> •
                <span className="last-updated">Updated Sep 2025</span>
              </small>
            </div>
          </div>
        </div>
      </div>
   </section>
  );
};

export default ResumeSection;
