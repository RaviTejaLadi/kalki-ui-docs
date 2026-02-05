import React, { useState } from 'react';
import { Check, Moon, Palette, Sparkles, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/schadcn/popover';
import Button from '@/components/common/Button';

export const ThemeToggle: React.FC = () => {
  const colorThemes = [
    {
      id: 'ocean',
      name: 'Ocean',
      description: 'Deep blue serenity',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      preview: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      icon: '🌊',
    },
    {
      id: 'purple',
      name: 'Purple',
      description: 'Royal elegance',
      gradient: 'from-purple-500 via-violet-500 to-indigo-500',
      preview: 'bg-gradient-to-br from-purple-500 to-violet-600',
      icon: '💜',
    },
    {
      id: 'emerald',
      name: 'Emerald',
      description: 'Natural vitality',
      gradient: 'from-emerald-500 via-green-500 to-teal-500',
      preview: 'bg-gradient-to-br from-emerald-500 to-green-600',
      icon: '💚',
    },
    {
      id: 'amber',
      name: 'Amber',
      description: 'Warm sunshine',
      gradient: 'from-amber-500 via-orange-500 to-yellow-500',
      preview: 'bg-gradient-to-br from-amber-500 to-orange-600',
      icon: '🌟',
    },
    {
      id: 'rose',
      name: 'Rose',
      description: 'Soft romance',
      gradient: 'from-rose-500 via-pink-500 to-red-500',
      preview: 'bg-gradient-to-br from-rose-500 to-pink-600',
      icon: '🌹',
    },
    {
      id: 'teal',
      name: 'Teal',
      description: 'Cool breeze',
      gradient: 'from-teal-500 via-cyan-500 to-blue-500',
      preview: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      icon: '🎨',
    },
  ];

  const { theme, colorTheme, toggleTheme, setColorTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [hoveredTheme, setHoveredTheme] = useState(null);

  const currentTheme = colorThemes.find((t) => t.id === colorTheme) || colorThemes[0];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          // className="relative group p-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          aria-label="Theme settings"
        >
          <div className="relative">
            <Palette className="w-5 h-5 text-gray-700 dark:text-gray-200 transition-transform group-hover:rotate-12" />
            <div
              className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full ${currentTheme.preview} ring-2 ring-white dark:ring-gray-800`}
            />
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-[25rem] p-0 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl overflow-hidden"
        sideOffset={8}
      >
        {/* Header with gradient */}
        <div
          className={`relative bg-gradient-to-r ${
            hoveredTheme ? colorThemes.find((t) => t.id === hoveredTheme)?.gradient : currentTheme.gradient
          } p-6 text-white overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Customize Theme
              </h3>
              <p className="text-sm text-white/90 mt-1">Make it yours</p>
            </div>
            <div className="text-3xl animate-bounce">
              {hoveredTheme ? colorThemes.find((t) => t.id === hoveredTheme)?.icon : currentTheme.icon}
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* Appearance Mode */}
          <div>
            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3 block">
              Appearance
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  if (theme !== 'light') toggleTheme();
                }}
                className={`group relative p-4 rounded-xl border-2 transition-all duration-300 ${
                  theme === 'light'
                    ? 'border-gray-900 dark:border-gray-100 bg-gray-50 dark:bg-gray-700 shadow-md'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <Sun
                      className={`w-6 h-6 transition-all duration-300 ${
                        theme === 'light'
                          ? 'text-amber-500 scale-110'
                          : 'text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'
                      }`}
                    />
                    {theme === 'light' && (
                      <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      theme === 'light' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    Light
                  </span>
                </div>
              </button>

              <button
                onClick={() => {
                  if (theme !== 'dark') toggleTheme();
                }}
                className={`group relative p-4 rounded-xl border-2 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'border-gray-900 dark:border-gray-100 bg-gray-50 dark:bg-gray-700 shadow-md'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <Moon
                      className={`w-6 h-6 transition-all duration-300 ${
                        theme === 'dark'
                          ? 'text-indigo-500 scale-110'
                          : 'text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'
                      }`}
                    />
                    {theme === 'dark' && (
                      <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    Dark
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Color Themes */}
          <div>
            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3 block">
              Color Theme
            </label>
            <div className="grid grid-cols-3 gap-2">
              {colorThemes.map((themeOption) => (
                <button
                  key={themeOption.id}
                  onClick={() => {
                    setColorTheme(themeOption.id as any);
                    setHoveredTheme(null);
                  }}
                  onMouseEnter={() => setHoveredTheme(themeOption.id as any)}
                  onMouseLeave={() => setHoveredTheme(null)}
                  className={`group relative p-3 rounded-xl border-2 transition-all duration-300 ${
                    colorTheme === themeOption.id
                      ? 'border-gray-900 dark:border-gray-100 shadow-lg scale-105'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:scale-105'
                  }`}
                >
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="relative">
                      <div
                        className={`w-10 h-10 rounded-lg ${
                          themeOption.preview
                        } shadow-md transition-transform duration-300 ${
                          hoveredTheme === themeOption.id ? 'scale-110 rotate-6' : ''
                        }`}
                      />
                      {colorTheme === themeOption.id && (
                        <div className="absolute -top-1.5 -right-1.5 bg-green-500 rounded-full p-0.5 shadow-lg">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 block">
                        {themeOption.name}
                      </span>
                      <span className="text-[10px] text-gray-500 dark:text-gray-500">{themeOption.description}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer tip */}
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3" />
              Auto-rotates daily at midnight
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
