import React, { useState } from 'react';
import { useMembers } from '../hooks/useMembers';
import { Person } from '../classes/Person';

const Members: React.FC = () => {
  const { 
    currentMembers, 
    alumniMembers, 
    loading, 
    error, 
    getFilteredMembers, 
    getMemberStats 
  } = useMembers();
  
  const [filter, setFilter] = useState<'current' | 'alumni' | 'all'>('current');
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const stats = getMemberStats();

  const getRoleColor = (role: string) => {
    if (role.toLowerCase().includes('president')) {
      return 'bg-ieee-primary text-white';
    }
    if (role.toLowerCase().includes('vice') || role.toLowerCase().includes('advisor')) {
      return 'bg-ieee-secondary text-white';
    }
    if (role.toLowerCase().includes('treasurer') || role.toLowerCase().includes('secretary')) {
      return 'bg-ieee-accent text-ieee-dark';
    }
    return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ieee-dark dark:text-white mb-4">
            Our Members
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the talented individuals who make up our IEEE Student Chapter leadership and community.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { key: 'current', label: 'Current Officers', count: stats.current },
            ...(stats.hasAlumni ? [{ key: 'alumni', label: 'Alumni', count: stats.alumni }] : []),
            ...(stats.hasAlumni ? [{ key: 'all', label: 'All Members', count: stats.total }] : [])
          ].map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key as any)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                filter === key
                  ? 'bg-ieee-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-ieee-primary"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading members...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">
              Error Loading Members
            </h3>
            <p className="text-red-500 dark:text-red-400">
              {error}
            </p>
          </div>
        )}

        {/* Members Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredMembers(filter).map((member: Person) => (
            <div key={member.getId()} className="card group hover:shadow-xl transition-shadow duration-300">
              {/* Compact Header */}
              <div className="flex items-center space-x-4 mb-4">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-ieee-primary to-ieee-secondary relative flex-shrink-0">
                  {member.getAvatar() ? (
                    <img
                      src={member.getAvatar()}
                      alt={member.getName()}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <div className={`w-full h-full flex items-center justify-center ${member.getAvatar() ? 'hidden' : ''}`}>
                    <div className="text-center">
                      <svg className="w-6 h-6 text-white mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                      <span className="text-xs text-white font-medium">IEEE</span>
                    </div>
                  </div>
                </div>

                {/* Name and Role */}
                <div className="flex-grow min-w-0">
                  <h3 className="text-lg font-semibold text-ieee-dark dark:text-white truncate">
                    {member.getName()}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(member.getRole())}`}>
                      {member.getRole()}
                    </span>
                    {member.isAlumni() && member.getAlumniInfo()?.graduationYear && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                        Class of {member.getAlumniInfo()?.graduationYear}
                      </span>
                    )}
                  </div>
                </div>

                {/* View More Button */}
                <button
                  onClick={() => setExpandedMember(expandedMember === member.getId() ? null : member.getId())}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex-shrink-0"
                  aria-label="View more"
                >
                  <svg 
                    className={`w-4 h-4 text-gray-600 dark:text-gray-300 transition-transform ${
                      expandedMember === member.getId() ? 'rotate-180' : ''
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Brief Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {member.getBio() || `IEEE ${member.getRole().toLowerCase()} contributing to our chapter's success.`}
              </p>

              {/* Expanded Content */}
              {expandedMember === member.getId() && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-4">
                  {/* Full Bio */}
                  {member.getBio() && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">About Me</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {member.getBio()}
                      </p>
                    </div>
                  )}

                  {/* Fun Facts */}
                  {member.getFunFacts().length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Fun Facts</h4>
                      <div className="space-y-1">
                        {member.getFunFacts().map((fact, index) => (
                          <p key={index} className="text-sm text-gray-600 dark:text-gray-300">
                            {fact}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Current Position (for alumni) */}
                  {member.isAlumni() && member.getAlumniInfo()?.currentPosition && (
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
                        Current Position
                      </h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        {member.getAlumniInfo()?.currentPosition}
                        {member.getAlumniInfo()?.company && ` at ${member.getAlumniInfo()?.company}`}
                      </p>
                    </div>
                  )}

                  {/* Contributions */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Contributions</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.getContributions().map((contribution, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                        >
                          {contribution}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links - Only show if member has contact info */}
                  {member.hasContactInfo() && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Connect</h4>
                      <div className="flex space-x-3">
                        {member.hasGitHub() && (
                          <a
                            href={member.getContactInfo().github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="GitHub"
                          >
                            <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                        )}
                        {member.hasInstagram() && (
                          <a
                            href={member.getContactInfo().instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Instagram"
                          >
                            <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </a>
                        )}
                        {member.hasLinkedIn() && (
                          <a
                            href={member.getContactInfo().linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="LinkedIn"
                          >
                            <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        )}
                        {member.hasEmail() && (
                          <a
                            href={`mailto:${member.getContactInfo().email}`}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Email"
                          >
                            <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && getFilteredMembers(filter).length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
              No members found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try selecting a different filter or check back later.
            </p>
          </div>
        )}

        {/* Join Us Section */}
        <div className="mt-16 text-center">
          <div className="card max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-ieee-dark dark:text-white mb-4">
              Want to Join Our Chapter?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're always looking for passionate students who want to make a difference in the world of technology.
            </p>
            <a
              href="mailto:stmuieee1852@gmail.com"
              className="btn-primary"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;


