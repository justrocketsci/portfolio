import React from 'react';
import { FiPenTool, FiCode, FiZap, FiSmartphone } from 'react-icons/fi';

const Toolkit = () => {
  const tools = [
    {
      title: 'Modern CAD Design',
      description: 'Creating precise, detailed mechanical designs using advanced CAD software with industry best practices and standards.',
      icon: <FiPenTool className="w-8 h-8" />
    },
    {
      title: 'Clean Engineering',
      description: 'Writing maintainable, efficient engineering solutions following best practices and modern development standards.',
      icon: <FiCode className="w-8 h-8" />
    },
    {
      title: 'Performance Optimization',
      description: 'Ensuring optimal system performance through efficient design, analysis, and continuous improvement methodologies.',
      icon: <FiZap className="w-8 h-8" />
    },
    {
      title: 'Prototype Development',
      description: 'Building functional prototypes that work flawlessly across various conditions, from concept to production.',
      icon: <FiSmartphone className="w-8 h-8" />
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's in my Toolkit</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything needed to build great engineering solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div
              key={tool.title}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 text-center"
            >
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-600 dark:text-primary-400">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Line */}
        <div className="relative mt-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white dark:bg-dark-900 px-4 text-gray-500 dark:text-gray-400">
              Engineering Excellence
            </span>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📐</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Design Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Comprehensive design analysis including stress, thermal, and fluid dynamics
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔧</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Manufacturing Support</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Design for manufacturability and production optimization
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Testing & Validation</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Comprehensive testing protocols and validation procedures
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toolkit; 