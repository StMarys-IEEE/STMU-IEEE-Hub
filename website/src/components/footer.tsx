import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-ieee-gray-dark text-ieee-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* IEEE Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-ieee-blue-primary rounded-lg flex items-center justify-center">
                <span className="text-ieee-white font-bold text-sm">IEEE</span>
              </div>
              <span className="text-xl font-bold text-ieee-white">
                IEEE STMU Hub
              </span>
            </div>
            <p className="text-ieee-gray-light/80 mb-4 max-w-md">
              The IEEE Student Chapter at St. Mary&apos;s University fosters innovation, 
              technical excellence, and community among engineering students.
            </p>
            <div className="flex items-center space-x-2 text-sm text-ieee-gray-light/80">
              <MapPin className="h-4 w-4" />
              <span>St. Mary&apos;s University, San Antonio, TX</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-ieee-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-ieee-gray-light/80 hover:text-ieee-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-ieee-gray-light/80 hover:text-ieee-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-ieee-gray-light/80 hover:text-ieee-white transition-colors">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ieee-gray-light/80 hover:text-ieee-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ieee-gray-light/80 hover:text-ieee-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-ieee-white mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:ieee@stmu.edu"
                className="flex items-center space-x-2 text-ieee-gray-light/80 hover:text-ieee-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>ieee@stmu.edu</span>
              </a>
              <a
                href="https://github.com/ieee-stmu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-ieee-gray-light/80 hover:text-ieee-white transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/company/ieee-stmu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-ieee-gray-light/80 hover:text-ieee-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-ieee-gray-light/60">
              © 2024 IEEE St. Mary&apos;s University Student Chapter. All rights reserved.
            </p>
            <p className="text-sm text-ieee-gray-light/60 mt-2 md:mt-0">
              Proudly affiliated with St. Mary&apos;s University
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
