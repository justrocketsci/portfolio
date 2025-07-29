import React from 'react';
import { FiEye } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';

const About = () => {
  const handleViewResume = () => {
    // Open resume PDF in a new tab
    window.open('/Anu_Bonthalapati_Resume.pdf', '_blank');
  };



  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I am a seasoned Mechanical Engineer with 9 years of experience in the aerospace industry. I specialize in the design, development, and deployment of high-performance mechanical systems.
              </p>
              <p>
                My career highlights include contributions to the NASA CRS UltraFlex Solar Arrays, NASA Lucy Mission to the Trojan Asteroids and the Artemis Power and Propulsion Element (PPE). I have a proven track record of ensuring mission success through reliable engineering solutions and cross-functional collaboration.
              </p>
              <p>
                I also host the Just Rocket Science Show, a podcast we tell the stories of the companies and entrepreneurs building the New Space economy. Give it a listen on YouTube.
              </p>
              <p>
                If you'd like to connect, reach me on LinkedIn. Let's talk about space!
              </p>
            </div>

            {/* Decorative Line */}
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleViewResume}
                className="btn-secondary"
              >
                <FiEye className="w-5 h-5 mr-2" />
                View Resume
              </button>
              <a
                href="https://www.youtube.com/@just_rocket_science"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                <FiYoutube className="w-5 h-5 mr-2" />
                The Just Rocket Science Show
              </a>
            </div>
          </div>

                    {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-primary-400 to-blue-500 flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src="/anu-profile-pic.png" 
                  alt="Anurag Bonth - Mechanical Engineer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 