import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-name">Yancy Canejo Almirañez</span>
          <span className="footer-divider">·</span>
          <span className="footer-role">Backend & Data Engineer</span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/DevYancy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yancy-canejo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="mailto:yancyalmiranez@gmail.com" aria-label="Email">
            Email
          </a>
        </div>
        <p className="footer-copy">© {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
