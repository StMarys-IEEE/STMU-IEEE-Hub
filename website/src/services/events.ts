import eventsData from '../data/events.json';

export type EventType = 'meeting' | 'workshop' | 'social' | 'competition';

export interface ChapterEvent {
  id: string;
  title: string;
  type: EventType;
  /** ISO date, local calendar day: "YYYY-MM-DD" */
  date: string;
  /** 24-hour "HH:MM" */
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  url: string | null;
}

/**
 * Parse "YYYY-MM-DD" as a LOCAL date.
 *
 * Do not use `new Date("2026-09-17")` here. The ES spec parses a bare
 * date-only string as UTC midnight, which renders as Sept 16 for anyone
 * in US Central — every event would display one day early. Splitting the
 * parts and using the Date(y, m, d) constructor keeps it local.
 */
function parseLocalDate(isoDate: string): Date {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(year, month - 1, day);
}

/** End of the event's calendar day, so an event stays "upcoming" all day. */
function endOfDay(isoDate: string): Date {
  const d = parseLocalDate(isoDate);
  d.setHours(23, 59, 59, 999);
  return d;
}

const allEvents = eventsData as ChapterEvent[];

export function getUpcomingEvents(now: Date = new Date()): ChapterEvent[] {
  return allEvents
    .filter((e) => endOfDay(e.date) >= now)
    .sort((a, b) => parseLocalDate(a.date).getTime() - parseLocalDate(b.date).getTime());
}

export function getPastEvents(now: Date = new Date()): ChapterEvent[] {
  return allEvents
    .filter((e) => endOfDay(e.date) < now)
    .sort((a, b) => parseLocalDate(b.date).getTime() - parseLocalDate(a.date).getTime());
}

export function getNextEvent(now: Date = new Date()): ChapterEvent | null {
  return getUpcomingEvents(now)[0] ?? null;
}

export function formatEventDate(isoDate: string): string {
  return parseLocalDate(isoDate).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

/** "6:00 – 7:00 PM" */
export function formatTimeRange(startTime: string, endTime: string): string {
  const to12h = (hhmm: string) => {
    const [h, m] = hhmm.split(':').map(Number);
    const period = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    return { text: `${hour12}:${String(m).padStart(2, '0')}`, period };
  };
  const start = to12h(startTime);
  const end = to12h(endTime);
  // Drop the redundant first period when both sides share it: "6:00 – 7:00 PM"
  return start.period === end.period
    ? `${start.text} – ${end.text} ${end.period}`
    : `${start.text} ${start.period} – ${end.text} ${end.period}`;
}

export const eventTypeLabel: Record<EventType, string> = {
  meeting: 'Meeting',
  workshop: 'Workshop',
  social: 'Social',
  competition: 'Competition',
};
