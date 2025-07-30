import React from 'react';
import { FiLinkedin, FiMail, FiTwitter, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Anu Bonthalapati</h3>
            <p className="text-gray-300 max-w-md">
              Mechanical Engineer specializing in aerospace mechanisms and deployable structures. 
              Building the future of space technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#hero" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/anuragbs/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/anu_bonth"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@just_rocket_science"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                aria-label="YouTube"
              >
                <FiYoutube className="w-5 h-5" />
              </a>
              <a
                href="mailto:anurag.bonth@gmail.com"
                className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Anu Bonthalapati. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 