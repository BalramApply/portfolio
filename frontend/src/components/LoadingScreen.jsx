import React, { useEffect, useState, useMemo, memo, useRef } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const hasCompleted = useRef(false); // prevents double calls

  // Progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1, 100));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Call parent ONLY when progress reaches 100
  useEffect(() => {
    if (progress === 100 && !hasCompleted.current) {
      hasCompleted.current = true;
      onLoadingComplete();
    }
  }, [progress, onLoadingComplete]);

  const letters = useMemo(() => ['L', 'O', 'A', 'D', 'I', 'N', 'G'], []);

  const milestoneMessages = useMemo(() => ({
    0: 'Initializing My Portfolio...',
    20: 'Processing Details...',
    40: 'Configuring All Sections...',
    60: 'Optimizing UI...',
    80: 'Finalizing My Portfolio...',
    100: 'Portfolio Loaded',
  }), []);

  const currentMessage = useMemo(() => {
    if (progress >= 80) return milestoneMessages[80];
    if (progress >= 60) return milestoneMessages[60];
    if (progress >= 40) return milestoneMessages[40];
    if (progress >= 20) return milestoneMessages[20];
    return milestoneMessages[0];
  }, [progress, milestoneMessages]);

  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <div className="loader-container">
      <div className="gradient-overlay" />

      <div className="particles">
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="letters-row">
        {letters.map((letter, index) => (
          <svg
            key={index}
            className="letter-svg"
            style={{ animationDelay: `${index * 0.1}s` }}
            width="50"
            height="70"
            viewBox="0 0 50 70"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="svg-text"
            >
              {letter}
            </text>
          </svg>
        ))}
      </div>

      <div className="milestone-text">{currentMessage}</div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
        <div className="progress-bar-glow" />
        <div className="progress-bar-shine" />
      </div>

      <div className="progress-text">
        <span className="progress-number">{progress}</span>
        <span className="progress-percent">%</span>
      </div>
    </div>
  );
};

export default memo(LoadingScreen);
