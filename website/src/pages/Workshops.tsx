import React from 'react';
import workshopsData from '../data/workshops.json';

const REPO = 'https://github.com/StMarys-IEEE/2025-2026-Workshops';
const TREE = `${REPO}/tree/main`;

interface WorkshopPath {
  label: string;
  repoPath: string;
}

interface Attribution {
  source: string;
  license: string;
  holder: string;
}

interface Workshop {
  id: string;
  title: string;
  date: string;
  blurb: string;
  hardware: string[];
  software: string[];
  paths: WorkshopPath[];
  quickStart: string;
  quickStartNote: string;
  attribution: Attribution | null;
}

const workshops = workshopsData as Workshop[];

function formatDate(isoDate: string): string {
  if (!isoDate) return '';
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

const WorkshopSection: React.FC<{ workshop: Workshop }> = ({ workshop }) => (
  <article className="mb-10 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
    {/* Blue header — the G treatment's section anchor */}
    <header className="bg-ieee-primary px-6 py-5">
      <h2 className="text-2xl font-medium text-white leading-tight">{workshop.title}</h2>
      <p className="text-sm text-[#B5D4F4] mt-1">
        {[formatDate(workshop.date), ...workshop.hardware.slice(0, 2)]
          .filter(Boolean)
          .join(' · ')}
      </p>
    </header>

    <div className="bg-white dark:bg-gray-800 px-6 py-5">
      <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-2xl">
        {workshop.blurb}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-[11px] tracking-wider text-gray-500 dark:text-gray-400 mb-2">
            HARDWARE
          </p>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            {workshop.hardware.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-wider text-gray-500 dark:text-gray-400 mb-2">
            SOFTWARE
          </p>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            {workshop.software.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Dense file listing — label left, monospace path right */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        {workshop.paths.map((p) => (
          <a
            key={p.repoPath}
            href={`${TREE}/${p.repoPath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-baseline gap-4 py-2 border-b border-gray-100 dark:border-gray-700/60 hover:bg-gray-50 dark:hover:bg-gray-700/40 -mx-2 px-2 rounded transition-colors"
          >
            <span className="text-sm text-gray-800 dark:text-gray-200">{p.label}</span>
            <span className="font-mono text-[11px] text-gray-500 dark:text-gray-400 truncate">
              {decodeURIComponent(p.repoPath)}
            </span>
          </a>
        ))}
      </div>

      {workshop.quickStart && (
        <div className="mb-6">
          <p className="text-[11px] tracking-wider text-gray-500 dark:text-gray-400 mb-2">
            QUICK START
          </p>
          <pre className="bg-[#14161A] text-gray-100 rounded-lg p-4 overflow-x-auto text-[13px] leading-relaxed">
            <code>{workshop.quickStart}</code>
          </pre>
          {workshop.quickStartNote && (
            <p className="text-[13px] text-gray-600 dark:text-gray-400 mt-2">
              {workshop.quickStartNote}
            </p>
          )}
        </div>
      )}

      {workshop.attribution && (
        <p className="text-[13px] text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
          Adapted from {workshop.attribution.source}, {workshop.attribution.license}{' '}
          {workshop.attribution.holder}. The original license is kept in the workshop
          folder.
        </p>
      )}
    </div>
  </article>
);

const Workshops: React.FC = () => (
  <div className="min-h-screen">
    <section className="bg-[#14161A] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] tracking-[0.1em] text-[#85B7EB] mb-4">
          CODE LIBRARY
        </p>
        <h1 className="text-4xl font-medium text-white leading-tight mb-3">Workshops</h1>
        <p className="text-[15px] text-gray-400 max-w-2xl">
          Starter code you can build on and complete versions to compare against. Every
          workshop lives in our public repository — clone it, break it, bring questions.
        </p>
      </div>
    </section>

    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {workshops.length > 0 ? (
          <>
            {workshops.map((w) => (
              <WorkshopSection key={w.id} workshop={w} />
            ))}
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Browse the full repository
            </a>
          </>
        ) : (
          <div className="card">
            <h2 className="text-xl font-semibold mb-2 text-ieee-dark dark:text-white">
              Workshop materials are being organized
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Code from past workshops is on its way here.
            </p>
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Browse the repository
            </a>
          </div>
        )}
      </div>
    </section>
  </div>
);

export default Workshops;
