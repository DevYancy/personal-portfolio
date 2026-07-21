import React from 'react';
import './Hero.css';
import myPic from '../assets/2050.png';
import resumePdf from '../assets/YANCY ALMIRAÑEZ RESUME 2026.pdf';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-layout">
        <div className="hero-avatar">
          <img src={myPic} alt="Yancy Canejo Almirañez" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Yancy Canejo Almirañez</h1>
          <p className="hero-role">Backend & Data Engineer</p>
          <p className="hero-subtitle">
            Specializing in Node.js, Dagster, and Python. Building scalable APIs 
            and production-grade data pipelines.
          </p>
          <a href={resumePdf} download="Yancy_Almiranez_Resume_2026.pdf" className="download-btn">
            Download Resume 📥
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
