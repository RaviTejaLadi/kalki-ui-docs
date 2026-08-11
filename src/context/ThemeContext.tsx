import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemePreference = 'system' | 'light' | 'dark';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemePreference) => void;
}

const STORAGE_KEY = 'theme';
const LEGACY_COLOR_KEYS = ['colorTheme', 'colorThemeDayIndex'] as const;
const COLOR_THEME_CLASSES = ['ocean', 'purple', 'emerald', 'amber', 'rose', 'teal'] as const;

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getSystemTheme = (): ResolvedTheme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const resolveTheme = (preference: ThemePreference): ResolvedTheme =>
  preference === 'system' ? getSystemTheme() : preference;

const isThemePreference = (value: string | null): value is ThemePreference =>
  value === 'system' || value === 'light' || value === 'dark';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemePreference>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return isThemePreference(saved) ? saved : 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => resolveTheme(theme));

  const setTheme = (next: ThemePreference) => {
    setThemeState(next);
  };

  useEffect(() => {
    LEGACY_COLOR_KEYS.forEach((key) => localStorage.removeItem(key));
    localStorage.setItem(STORAGE_KEY, theme);

    const apply = (resolved: ResolvedTheme) => {
      const root = document.documentElement;
      root.classList.toggle('dark', resolved === 'dark');
      COLOR_THEME_CLASSES.forEach((cls) => root.classList.remove(cls));
      root.style.colorScheme = resolved;
      setResolvedTheme(resolved);
    };

    apply(resolveTheme(theme));

    if (theme !== 'system') return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => apply(getSystemTheme());
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
