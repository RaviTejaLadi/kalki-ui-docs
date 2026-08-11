import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const STORAGE_KEY = 'theme';
const LEGACY_COLOR_KEYS = ['colorTheme', 'colorThemeDayIndex'] as const;
const COLOR_THEME_CLASSES = ['ocean', 'purple', 'emerald', 'amber', 'rose', 'teal'] as const;

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getSystemTheme = (): ThemeMode => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const isThemeMode = (value: string | null): value is ThemeMode => value === 'light' || value === 'dark';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    // Migrate old "system" preference to the current OS theme
    if (saved === 'system' || !isThemeMode(saved)) return getSystemTheme();
    return saved;
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    LEGACY_COLOR_KEYS.forEach((key) => localStorage.removeItem(key));
    localStorage.setItem(STORAGE_KEY, theme);

    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    COLOR_THEME_CLASSES.forEach((cls) => root.classList.remove(cls));
    root.style.colorScheme = theme;
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
