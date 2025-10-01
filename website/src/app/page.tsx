import Link from 'next/link'
import { ArrowRight, Users, Code, Calendar, BookOpen, Github, Linkedin } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ieee-blue-primary to-ieee-blue-secondary text-ieee-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-ieee-white rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-ieee-blue-primary font-bold text-2xl">IEEE</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IEEE St. Mary&apos;s University
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-ieee-white/90 max-w-3xl mx-auto">
              Fostering innovation, technical excellence, and community among engineering students
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-3 bg-ieee-yellow text-ieee-blue-primary font-semibold rounded-lg hover:bg-ieee-yellow/90 transition-colors"
              >
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/members"
                className="inline-flex items-center px-8 py-3 bg-ieee-white/20 text-ieee-white font-semibold rounded-lg hover:bg-ieee-white/30 transition-colors"
              >
                Meet Our Members
                <Users className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-ieee-gray-light dark:bg-ieee-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-ieee-blue-primary dark:text-ieee-white">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://github.com/ieee-stmu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ieee-white dark:bg-ieee-gray-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <Github className="h-8 w-8 text-ieee-blue-primary mr-3" />
                <h3 className="text-xl font-semibold text-ieee-blue-primary dark:text-ieee-white">
                  GitHub Organization
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Explore our open-source projects, contribute to ongoing development, and collaborate with fellow engineers.
              </p>
            </a>

            <a
              href="https://linkedin.com/company/ieee-stmu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ieee-white dark:bg-ieee-gray-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <Linkedin className="h-8 w-8 text-ieee-blue-primary mr-3" />
                <h3 className="text-xl font-semibold text-ieee-blue-primary dark:text-ieee-white">
                  LinkedIn Community
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with our professional network, stay updated on industry events, and build your career connections.
              </p>
            </a>

            <Link
              href="/contact"
              className="bg-ieee-white dark:bg-ieee-gray-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-ieee-blue-primary mr-3" />
                <h3 className="text-xl font-semibold text-ieee-blue-primary dark:text-ieee-white">
                  Events Calendar
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Stay informed about upcoming workshops, competitions, and networking events hosted by our chapter.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-ieee-white dark:bg-ieee-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-ieee-blue-primary dark:text-ieee-white">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              The IEEE Student Chapter at St. Mary&apos;s University is dedicated to advancing technology 
              and engineering excellence. We provide a platform for students to develop technical skills, 
              collaborate on innovative projects, and connect with industry professionals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Code className="h-12 w-12 text-ieee-blue-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-ieee-blue-primary dark:text-ieee-white">
                  Technical Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Hands-on workshops and projects to enhance your engineering skills
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-ieee-blue-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-ieee-blue-primary dark:text-ieee-white">
                  Community Building
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connect with like-minded peers and build lasting professional relationships
                </p>
              </div>
              <div className="text-center">
                <BookOpen className="h-12 w-12 text-ieee-blue-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-ieee-blue-primary dark:text-ieee-white">
                  Continuous Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Stay updated with the latest technologies and industry trends
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-ieee-blue-primary to-ieee-blue-secondary text-ieee-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-ieee-white/90">
            Whether you&apos;re a beginner or an experienced engineer, there&apos;s a place for you in our chapter.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-ieee-yellow text-ieee-blue-primary font-semibold rounded-lg hover:bg-ieee-yellow/90 transition-colors"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
