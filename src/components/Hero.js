import React, { useState, useEffect } from 'react';
import { FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/cygnus-pic.png',
    '/lucy-pic.png', 
    '/ppe-pic.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Anu Bonthalapati <span className="gradient-text">Mechanical Engineer</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Seasoned Mechanical Engineer with 9 years of flight proven experience in building <span className="font-bold italic text-primary-600 dark:text-primary-400">mechanisms</span> and <span className="font-bold italic text-primary-600 dark:text-primary-400">deployable structures</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-primary text-lg px-8 py-3"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('#about')}
                className="btn-secondary text-lg px-8 py-3"
              >
                Learn More
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/anuragbs/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/anu_bonth"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FiTwitter className="w-6 h-6" />
              </a>
              <a
                href="mailto:anurag.bonth@gmail.com"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
              {/* Image Container */}
              <div className="relative h-96 w-full">
                {images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Project ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
              
              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 