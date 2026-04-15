import React from 'react';
import './Hero.css';
import myPic from '../assets/2050.png'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hello, I'm <span className="highlight">Yancy</span>
          <br />
          I'm a Developer
        </h1>
        <p className="hero-subtitle">
          a Backend & Data Engineer specializing
          <br />
          in Node.js, Dagster, and Python.
        </p>
        <button className="download-btn">
          Download Resume 📥
        </button>
      </div>
      <div className = "hero-image">
        <img src={myPic} alt="logo" />
      </div>
    </section>
  );
};

export default Hero;
