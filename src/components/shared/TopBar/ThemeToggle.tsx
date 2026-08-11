import React, { useState } from 'react';
import { Check, Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/schadcn/popover';
import Button from '@/components/common/Button';

const options = [
  { id: 'system' as const, label: 'System', icon: Monitor },
  { id: 'light' as const, label: 'Light', icon: Sun },
  { id: 'dark' as const, label: 'Dark', icon: Moon },
];

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const ActiveIcon = options.find((o) => o.id === theme)?.icon ?? Monitor;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button aria-label="Theme settings" variant="ghost" size="sm">
          <ActiveIcon className="w-5 h-5 text-foreground" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-56 p-3 border-border shadow-lg" sideOffset={8}>
        <p className="text-xs font-medium text-muted-foreground mb-2 px-1">Appearance</p>
        <div className="grid grid-cols-3 gap-1.5">
          {options.map(({ id, label, icon: Icon }) => {
            const selected = theme === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setTheme(id);
                  setOpen(false);
                }}
                className={`relative flex flex-col items-center gap-1.5 rounded-lg border px-2 py-3 transition-colors ${
                  selected ? 'border-foreground bg-muted' : 'border-border hover:bg-muted/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${selected ? 'text-foreground' : 'text-muted-foreground'}`} />
                <span className={`text-xs font-medium ${selected ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {label}
                </span>
                {selected && (
                  <span className="absolute top-1 right-1 rounded-full bg-foreground p-0.5">
                    <Check className="w-2.5 h-2.5 text-background" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};
