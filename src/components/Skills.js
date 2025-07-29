import React from 'react';
import { FiBox, FiCpu, FiCode, FiZap, FiSettings, FiMonitor } from 'react-icons/fi';

const Skills = () => {
  const skills = [
    {
      name: 'CAD Design',
      icon: <FiBox className="w-8 h-8" />,
      progress: 95,
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'FEA Analysis',
      icon: <FiCpu className="w-8 h-8" />,
      progress: 90,
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Design Review Processes',
      icon: <FiCode className="w-8 h-8" />,
      progress: 85,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'GD&T per ASME Y14.5',
      icon: <FiSettings className="w-8 h-8" />,
      progress: 92,
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'AI Tools',
      icon: <FiZap className="w-8 h-8" />,
      progress: 88,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Prototyping',
      icon: <FiMonitor className="w-8 h-8" />,
      progress: 87,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring engineering solutions to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 