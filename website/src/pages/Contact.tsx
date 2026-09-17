import React from 'react';
import { Link } from 'react-router-dom';
import { getNextEvent, formatEventDate, formatTimeRange } from '../services/events';

const EMAIL = 'stmuieee1852@gmail.com';

/**
 * The previous version of this page had a contact form that called
 * setTimeout, cleared the fields, and told the user "Message Sent!" without
 * sending anything. GitHub Pages is static, so there is no backend to POST to.
 *
 * If you want a working form later, Formspree / Getform / Web3Forms all give
 * a free endpoint you can POST to from a static site — swap the mailto block
 * below for a <form action="https://formspree.io/f/xxxx" method="POST">.
 * Until then, a mailto that actually opens the user's mail client is honest
 * and takes the same number of clicks.
 */
const Contact: React.FC = () => {
  const nextEvent = getNextEvent();

  return (
    <div className="min-h-screen">
      <section className="bg-[#14161A] py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] tracking-[0.1em] text-[#85B7EB] mb-4">
            GET INVOLVED
          </p>
          <h1 className="text-4xl font-medium text-white leading-tight mb-3">Join</h1>
          <p className="text-[15px] text-gray-400 max-w-2xl">
            Open to every major. You don't need to be an IEEE member, or know
            anything about electronics, to come to your first meeting.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Next meeting — the most actionable thing on the page */}
        {nextEvent && (
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-12">
            <p className="text-[11px] tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              NEXT MEETING
            </p>
            <h2 className="text-xl font-medium text-ieee-dark dark:text-white mb-2">
              {nextEvent.title}
            </h2>
            <p className="text-[15px] text-gray-600 dark:text-gray-300 mb-4">
              {formatEventDate(nextEvent.date)} &middot;{' '}
              {formatTimeRange(nextEvent.startTime, nextEvent.endTime)}
              {nextEvent.location ? ` \u00b7 ${nextEvent.location}` : ''}
            </p>
            <Link to="/events" className="text-[15px] text-ieee-primary dark:text-ieee-secondary hover:underline">
              See the full schedule
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-medium text-ieee-dark dark:text-white mb-4">
              Who we are
            </h2>
            <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We're the IEEE student branch at St. Mary's University. We run
              hands-on workshops in Arduino, robotics, and the tools engineers
              actually use, and everything we build is public on GitHub.
            </p>
            <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We're part of the{' '}
              <a
                href="https://r5.ieee.org/lonestar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ieee-primary dark:text-ieee-secondary hover:underline"
              >
                Lone Star Section
              </a>
              , IEEE's section for Central and South Texas, based in San Antonio.
              That connects the chapter to professional engineers across the
              region — their meetings, talks, and networking events are open to
              student members too.
            </p>
            <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
              Come to a meeting first. If you like it, we'll walk you through
              signing up for IEEE membership.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium text-ieee-dark dark:text-white mb-4">
              Get in touch
            </h2>

            <a
              href={`mailto:${EMAIL}?subject=Interested%20in%20joining%20IEEE%20St.%20Mary's`}
              className="block bg-[#FFB81C] text-[#412402] font-medium text-[15px] px-6 py-3 rounded-lg hover:bg-[#EF9F27] transition-colors text-center mb-6"
            >
              Email the chapter
            </a>

            <div className="space-y-5 text-[15px]">
              <div>
                <p className="text-[11px] tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                  EMAIL
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-ieee-primary dark:text-ieee-secondary hover:underline break-all"
                >
                  {EMAIL}
                </a>
              </div>

              <div>
                <p className="text-[11px] tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                  CAMPUS
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  St. Mary's University
                  <br />
                  One Camino Santa Maria
                  <br />
                  San Antonio, TX 78228
                </p>
              </div>

              <div>
                <p className="text-[11px] tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                  ONLINE
                </p>
                <a
                  href="https://github.com/StMarys-IEEE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ieee-primary dark:text-ieee-secondary hover:underline block"
                >
                  github.com/StMarys-IEEE
                </a>
                <a
                  href="https://www.instagram.com/stmu_ieee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ieee-primary dark:text-ieee-secondary hover:underline block"
                >
                  instagram.com/stmu_ieee
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
