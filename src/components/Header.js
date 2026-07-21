import { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode, onEventsClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">YCA</div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >Career Summary</a>
          <a 
            href="#experience" 
            className={activeSection === 'experience' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >Experience</a>
          <a 
            href="#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >Projects</a>
          <a 
            href="#education" 
            className={activeSection === 'education' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >Education</a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >Contact</a>
          <a 
            href="#events"
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onEventsClick(); }}
          >Events</a>
        </nav>

        <div className="header-right">
          <button 
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <span className="toggle-icon">{darkMode ? '☀️' : '🌙'}</span>
            <span className="toggle-label">{darkMode ? 'Light' : 'Dark'}</span>
          </button>
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
