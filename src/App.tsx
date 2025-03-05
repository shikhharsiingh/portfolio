import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, FileText, ExternalLink, Menu, X } from 'lucide-react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Check system preference for dark mode on initial load
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);

    // Apply dark mode class to body
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <CustomCursor />
      <div className="App min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
        />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Publications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;