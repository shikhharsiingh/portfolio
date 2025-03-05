import React from 'react';
import { Github, Linkedin, Mail, FileText, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold gradient-text mb-2">Shikhhar Siingh</h2>
            <p className="text-gray-400 max-w-md">
              Computer Science professional specializing in innovative solutions and cutting-edge research.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/shikhharsiingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="http://www.linkedin.com/in/shikhharsiingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:shikhharsiingh@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://drive.google.com/file/d/1kkBq7MlKLWrnYt7xS9sdY5KbSA77ppjd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Resume"
              >
                <FileText size={20} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="mr-2" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shikhhar Siingh. All rights reserved.
          </p>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">About</a>
            <a href="#experience" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Experience</a>
            <a href="#skills" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Projects</a>
            <a href="#publications" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Publications</a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;