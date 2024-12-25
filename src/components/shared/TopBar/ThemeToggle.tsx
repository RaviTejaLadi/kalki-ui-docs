import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import Button from '@/components/common/Button';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant={'ghost'} onClick={toggleTheme} aria-label="Toggle theme" rounded>
      {theme === 'light' ? (
        <Moon className="size-4 text-gray-800 dark:text-gray-200" />
      ) : (
        <Sun className="size-4 text-gray-800 dark:text-gray-200" />
      )}
    </Button>
  );
};
