import React from 'react';
import { Link } from 'react-router-dom';
import {
  getNextEvent,
  formatEventDate,
  formatTimeRange,
  eventTypeLabel,
} from '../services/events';

/**
 * The hero is a deliberately dark band, not dark mode. It stays near-black in
 * light mode, so text inside it is fixed white/blue rather than themed.
 * Everything below the hero themes normally.
 */
const Home: React.FC = () => {
  const nextEvent = getNextEvent();

  return (
    <div className="min-h-screen">
      <section className="bg-[#14161A] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] tracking-[0.1em] text-[#85B7EB] mb-6">
            IEEE STUDENT CHAPTER &middot; ST. MARY'S UNIVERSITY
          </p>

          <h1 className="text-4xl md:text-6xl font-medium text-white leading-[1.05] mb-5">
            Build it, then
            <br />
            ship the code.
          </h1>

          <p className="text-[15px] md:text-base text-gray-400 leading-relaxed mb-8 max-w-xl">
            Arduino, robotics, machine learning, and the tools engineers actually use.
            Everything we build is public on GitHub. Open to every major, no
            experience needed.
          </p>

          {nextEvent ? (
            <>
              {/* The one yellow element on the page. It is the primary action. */}
              <Link
                to="/events"
                className="inline-block bg-[#FFB81C] text-[#412402] font-medium text-[15px] px-6 py-3 rounded-lg hover:bg-[#EF9F27] transition-colors"
              >
                {eventTypeLabel[nextEvent.type]} &middot; {formatEventDate(nextEvent.date)}
              </Link>
              <p className="text-sm text-gray-400 mt-4">
                {nextEvent.title} &middot;{' '}
                {formatTimeRange(nextEvent.startTime, nextEvent.endTime)}
                {nextEvent.location ? ` \u00b7 ${nextEvent.location}` : ''}
              </p>
            </>
          ) : (
            <>
              <Link
                to="/contact"
                className="inline-block bg-[#FFB81C] text-[#412402] font-medium text-[15px] px-6 py-3 rounded-lg hover:bg-[#EF9F27] transition-colors"
              >
                Get in touch
              </Link>
              <p className="text-sm text-gray-400 mt-4">
                Next semester's schedule is being planned.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Three entry points. Metadata line under each so they aren't empty labels. */}
      <section className="border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <Link
              to="/workshops"
              className="px-2 sm:px-6 py-6 sm:border-r border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <p className="text-[15px] font-medium text-ieee-dark dark:text-white mb-1">
                Workshops
              </p>
              <p className="text-[13px] text-gray-500 dark:text-gray-400">
                Arduino, robotics, starter code
              </p>
            </Link>
            <Link
              to="/projects"
              className="px-2 sm:px-6 py-6 sm:border-r border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <p className="text-[15px] font-medium text-ieee-dark dark:text-white mb-1">
                Projects
              </p>
              <p className="text-[13px] text-gray-500 dark:text-gray-400">
                What the chapter is building
              </p>
            </Link>
            <Link
              to="/contact"
              className="px-2 sm:px-6 py-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <p className="text-[15px] font-medium text-ieee-dark dark:text-white mb-1">
                Join
              </p>
              <p className="text-[13px] text-gray-500 dark:text-gray-400">
                Open to every major
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-x-8 gap-y-3">
          <a
            href="https://github.com/StMarys-IEEE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-ieee-primary dark:text-ieee-secondary hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/stmu_ieee/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-ieee-primary dark:text-ieee-secondary hover:underline"
          >
            Instagram
          </a>
          <a
            href="mailto:stmuieee1852@gmail.com"
            className="text-[15px] text-ieee-primary dark:text-ieee-secondary hover:underline"
          >
            stmuieee1852@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
