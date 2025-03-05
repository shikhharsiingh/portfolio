import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Add animation class after component mounts
    const timer = setTimeout(() => {
      if (heroRef.current) {
        const elements = heroRef.current.querySelectorAll('.animate-on-load');
        elements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('visible');
          }, index * 200);
        });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="max-w-4xl">
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 animate-on-load fade-in">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-on-load fade-in">
            Shikhhar
          </h1>

          <h2 className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 font-medium mb-8 animate-on-load fade-in">
            <span className="gradient-text">Computer Science</span> Graduate
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10 animate-on-load fade-in">
            I specialize in developing software solutions and conducting research in computer science, focusing on full-stack development, machine learning, and scalable systems to build impactful technology.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-on-load fade-in">
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="#about" className="btn btn-outline">
              Learn More
            </a>
          </div>

          <div className="flex space-x-6 animate-on-load fade-in">
            <a
              href="https://github.com/shikhharsiingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="http://www.linkedin.com/in/shikhharsiingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shikhharsiingh@gmail.com"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://drive.google.com/file/d/1kkBq7MlKLWrnYt7xS9sdY5KbSA77ppjd/view?usp=sharing"
              // target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="Resume"
            >
              <FileText size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;