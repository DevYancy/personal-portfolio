import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    const savedMode = storedMode !== null ? storedMode === 'true' : true;
    setDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode);
    localStorage.setItem('darkMode', savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((current) => {
      const nextMode = !current;
      document.body.classList.toggle('dark-mode', nextMode);
      localStorage.setItem('darkMode', nextMode);
      return nextMode;
    });
  };

  return (
    <div className="App">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
