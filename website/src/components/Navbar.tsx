import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/events', label: 'Events' },
  { path: '/workshops', label: 'Workshops' },
  { path: '/projects', label: 'Projects' },
  { path: '/members', label: 'People' },
  { path: '/contact', label: 'Join' },
];

const ThemeButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, cycleTheme } = useTheme();

  const label =
    theme === 'system'
      ? 'Theme: follow system'
      : theme === 'light'
      ? 'Theme: light'
      : 'Theme: dark';

  return (
    <button
      onClick={cycleTheme}
      className={`p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${className}`}
      aria-label={label}
      title={label}
    >
      {theme === 'system' && (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="13" rx="2" />
          <path strokeLinecap="round" d="M8 21h8M12 17v4" />
        </svg>
      )}
      {theme === 'light' && (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      )}
      {theme === 'dark' && (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
        </svg>
      )}
    </button>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-[#14161A] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-[15px] font-medium text-ieee-dark dark:text-white">
              IEEE St. Mary's
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[14px] transition-colors ${
                  isActive(item.path)
                    ? 'text-ieee-primary dark:text-ieee-secondary'
                    : 'text-gray-600 dark:text-gray-400 hover:text-ieee-dark dark:hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeButton />
          </div>

          <div className="md:hidden flex items-center gap-1">
            <ThemeButton />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-3 border-t border-gray-200 dark:border-gray-800 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-2 py-2.5 rounded-md text-[15px] ${
                  isActive(item.path)
                    ? 'text-ieee-primary dark:text-ieee-secondary'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
