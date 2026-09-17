import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChapterEvent,
  getUpcomingEvents,
  getPastEvents,
  formatEventDate,
  formatTimeRange,
  eventTypeLabel,
} from '../services/events';

const EventCard: React.FC<{ event: ChapterEvent; past?: boolean }> = ({
  event,
  past = false,
}) => (
  <article className={`card ${past ? 'opacity-75' : ''}`}>
    <p className="text-sm font-semibold text-ieee-primary dark:text-ieee-secondary mb-2">
      {eventTypeLabel[event.type]}
    </p>
    <h3 className="text-xl font-semibold mb-3 text-ieee-dark dark:text-white">
      {event.title}
    </h3>
    <dl className="text-gray-600 dark:text-gray-300 space-y-1 mb-4">
      <div>
        <dt className="sr-only">Date</dt>
        <dd>{formatEventDate(event.date)}</dd>
      </div>
      <div>
        <dt className="sr-only">Time</dt>
        <dd>{formatTimeRange(event.startTime, event.endTime)}</dd>
      </div>
      <div>
        <dt className="sr-only">Location</dt>
        <dd>{event.location}</dd>
      </div>
    </dl>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
    {event.url && (
      <a
        href={event.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        {past ? 'Workshop materials' : 'More details'}
      </a>
    )}
  </article>
);

const Events: React.FC = () => {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <div className="min-h-screen">
      <section className="bg-ieee-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Events</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Meetings are open to every major. You don't need to be an IEEE member
            to come to your first one.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-ieee-dark dark:text-white">
            Upcoming
          </h2>

          {upcoming.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="card">
              <h3 className="text-xl font-semibold mb-2 text-ieee-dark dark:text-white">
                Nothing scheduled yet
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We're between semesters. Email the chapter and we'll add you to
                the list for next term's schedule.
              </p>
              <Link to="/contact" className="btn-primary">
                Get in touch
              </Link>
            </div>
          )}
        </div>
      </section>

      {past.length > 0 && (
        <section className="py-16 bg-ieee-light dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-ieee-dark dark:text-white">
              Past events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {past.map((event) => (
                <EventCard key={event.id} event={event} past />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Events;
