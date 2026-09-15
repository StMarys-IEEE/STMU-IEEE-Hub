import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type ThemePreference = 'system' | 'light' | 'dark';
export type ResolvedTheme = 'light' | 'dark';

const STORAGE_KEY = 'ieee-theme';

interface ThemeContextValue {
  /** What the user picked. 'system' means follow the OS. */
  theme: ThemePreference;
  /** What is actually on screen right now. */
  resolvedTheme: ResolvedTheme;
  setTheme: (t: ThemePreference) => void;
  /** Cycles system -> light -> dark -> system. */
  cycleTheme: () => void;
  /** Kept for backwards compatibility with older components. */
  isDark: boolean;
  /** Kept for backwards compatibility. Sets an explicit preference. */
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function systemPrefersDark(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function readStoredPreference(): ThemePreference {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : 'system';
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemePreference>(() => readStoredPreference());
  const [systemDark, setSystemDark] = useState<boolean>(() => systemPrefersDark());

  // Follow the OS live. If someone's machine flips to dark at sunset and they
  // are on 'system', the page should change with it rather than on next reload.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const resolvedTheme: ResolvedTheme =
    theme === 'system' ? (systemDark ? 'dark' : 'light') : theme;

  // Tailwind is configured with darkMode: 'class', so everything keys off this.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const setTheme = useCallback((next: ThemePreference) => {
    setThemeState(next);
    // Store nothing for 'system' — absence of a key IS the signal to keep
    // tracking the OS. Writing 'system' would work too, but removing it keeps
    // the inline script in index.html as simple as possible.
    if (next === 'system') {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const cycleTheme = useCallback(() => {
    setTheme(theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system');
  }, [theme, setTheme]);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme, setTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        cycleTheme,
        isDark: resolvedTheme === 'dark',
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
};
