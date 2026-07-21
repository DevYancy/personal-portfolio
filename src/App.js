import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EventsModal from './components/EventsModal';
import ChatWidget from './components/ChatWidget';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [eventsOpen, setEventsOpen] = useState(false);

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
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} onEventsClick={() => setEventsOpen(true)} />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <EventsModal isOpen={eventsOpen} onClose={() => setEventsOpen(false)} />
      <ChatWidget />
    </div>
  );
}

export default App;
