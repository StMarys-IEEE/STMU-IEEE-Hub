import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ieee-dark dark:text-white mb-4">
            About IEEE St. Mary's Hub
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Advancing technology for the benefit of humanity
          </p>
        </div>

        {/* Mission */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-ieee-dark dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The IEEE Student Chapter at St. Mary's University is dedicated to fostering innovation, 
            collaboration, and professional development in engineering and technology. We provide 
            students with opportunities to develop technical skills, engage in cutting-edge projects, 
            and build professional networks that will shape the future of technology.
          </p>
        </div>

        {/* Goals */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-ieee-dark dark:text-white mb-4">Our Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-ieee-primary dark:text-ieee-secondary mb-2">
                Technical Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Develop and showcase innovative projects that solve real-world problems using cutting-edge technology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ieee-primary dark:text-ieee-secondary mb-2">
                Professional Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Build leadership skills, industry connections, and career opportunities for our members.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ieee-primary dark:text-ieee-secondary mb-2">
                Community Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Contribute to the local community through technology education and outreach programs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ieee-primary dark:text-ieee-secondary mb-2">
                Innovation & Research
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Foster a culture of innovation and support research initiatives in engineering and technology.
              </p>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-ieee-dark dark:text-white mb-4">Our Activities</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-ieee-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-ieee-dark dark:text-white">Technical Workshops</h3>
                <p className="text-gray-600 dark:text-gray-300">Hands-on learning sessions covering Arduino, IoT, web development, and more.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-ieee-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-ieee-dark dark:text-white">Project Development</h3>
                <p className="text-gray-600 dark:text-gray-300">Collaborative projects that solve real-world problems and showcase our technical skills.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-ieee-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-ieee-dark dark:text-white">Industry Networking</h3>
                <p className="text-gray-600 dark:text-gray-300">Connect with professionals, attend conferences, and explore career opportunities.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-ieee-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-ieee-dark dark:text-white">Competitions</h3>
                <p className="text-gray-600 dark:text-gray-300">Participate in regional and national IEEE competitions and hackathons.</p>
              </div>
            </div>
          </div>
        </div>

        {/* University Affiliation */}
        <div className="card">
          <h2 className="text-2xl font-bold text-ieee-dark dark:text-white mb-4">University Affiliation</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            We are proud to be part of St. Mary's University, a leading institution in engineering 
            and technology education. Our chapter works closely with the university's engineering 
            departments to provide students with comprehensive learning experiences that combine 
            theoretical knowledge with practical application.
          </p>
          <div className="bg-ieee-light dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-ieee-dark dark:text-white mb-2">St. Mary's University</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              One Camino Santa Maria, San Antonio, TX 78228<br />
              School of Science, Engineering and Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


