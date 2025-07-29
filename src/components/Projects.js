import React, { useState } from 'react';
import { FiExternalLink, FiTarget, FiCheckCircle, FiZap, FiTrendingUp, FiAward } from 'react-icons/fi';
import Modal from './Modal';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'NASA PPE Roll Out Solar Array',
      description: [
        'Lead mechanical engineer for NASA\'s Personal Protective Equipment Roll Out Solar Array project.',
        'Led structural qualification testing of 10+ units and implemented NASA-STD-5019 fracture control testing program for 40+ critical metallic components.'
      ],
      image: '/ppe-pic.png',
      demo: 'https://youtu.be/0CFejld5r_I?si=s7vPR_sCzg5kOQJc',
      featured: true
    },
    {
      title: 'NASA Cygnus UltraFlex Solar Array',
      description: [
        'Led 9 successful on-orbit deployments and served as primary non-conformance disposition authority.',
        'Led 48-hour emergency response team to resolve on-orbit deployment anomalies, ensuring 100% mission success.'
      ],
      image: '/cygnus-pic.png',
      demo: 'https://youtu.be/bnDeJ7saLQY?si=Ynmw3BWb4kvq5m33',
      featured: true
    },
    {
      title: 'Lucy UltraFlex Solar Array',
      description: [
        'Designed and developed large displacement leaf spring mechanism and deployment motors.',
        'Supported critical anomaly resolution that identified snagged lanyard and enabled recovery strategy achieving 100% mission success.'
      ],
      image: '/lucy-pic.png',
      demo: 'https://www.youtube.com/watch?v=6vjK9vGEw5Q',
      featured: true
    },
    {
      title: 'Commercial UltraFlex Solar Array',
      description: [
        'Designed high tension, long-life torsion spring mechanism and high reliability tie-down mechanism.',
        'Led motor shock qualification campaign recovery after shock failure, achieving 100% deployment success rate across 16 flight units.'
      ],
      image: '/uf-pic.png',
      demo: null,
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);

  const designOverview = (
    <div className="space-y-8">
      {/* Project Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-blue-600 rounded-lg">
            <FiTarget className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Project Overview</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Designed tensioner subsystem to maintain high blanket tension for a deployed solar array,
          ensuring ultra-high modal stiffness over 10-year mission life.
        </p>
      </div>

      {/* Key Requirements */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-green-600 rounded-lg">
            <FiCheckCircle className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Key Requirements</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Tension:</span>
                <span className="text-gray-700 dark:text-gray-300"> X lbs/in derived from system stiffness</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Life:</span>
                <span className="text-gray-700 dark:text-gray-300"> Qualified for 20 years (2x mission), 55,000 thermal cycles in Low Earth Orbit</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Tolerate:</span>
                <span className="text-gray-700 dark:text-gray-300"> Manufacturing variances, +/- 80°C extremes, blanket creep</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Envelope:</span>
                <span className="text-gray-700 dark:text-gray-300"> Fit stowed in solar array midline; stay within deployed volume</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Approach */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-purple-600 rounded-lg">
            <FiZap className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Design Approach</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">Analyzed gap variations from tolerances, thermal fluctuations, creep</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">Selected 17-7PH CH900 torsion spring for performance, stress margins, envelope compliance</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">Ensured tension was maintained in worst-case conditions</span>
          </div>
        </div>
      </div>

      {/* Prototyping & Testing */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-orange-600 rounded-lg">
            <FiTrendingUp className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Prototyping & Testing</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">Built rapid prototype; tested kinematics, force output, cycling</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">Early failures due to cable/pin wear (high friction) and arm/mandrel abrasion</span>
          </div>
        </div>
      </div>

      {/* Iterations */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-indigo-600 rounded-lg">
            <FiAward className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Iterations</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">Redesign: Added Vespel SP-3 pulley; hard-anodized aluminum arm; TDC-coated mandrel; dry-film lubricated spring</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">Minimized friction at interfaces; re-tested successfully</span>
          </div>
        </div>
      </div>

      {/* Lessons Learned */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-teal-600 rounded-lg">
            <FiCheckCircle className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Lessons Learned</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">Use dissimilar materials with appropriate coatings for wear surfaces</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">Incorporate Vespel SP-3 for low-friction</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">Minimize small parts to improve assembly times and optimize production flow</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent aerospace engineering work
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                  {project.description.map((sentence, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{sentence}</span>
                    </div>
                  ))}
                </div>



                {/* Action Button */}
                {project.demo && (
                  <div className="flex">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>See it in action</span>
                    </a>
                  </div>
                )}
                
                {/* Design Example Button for Commercial UltraFlex */}
                {project.title === 'Commercial UltraFlex Solar Array' && (
                  <div className="flex mt-2">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      <span>See a Design Example</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Design Example Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Design Example: Blanket Tensioner"
        >
          {designOverview}
        </Modal>

      </div>
    </section>
  );
};

export default Projects; 