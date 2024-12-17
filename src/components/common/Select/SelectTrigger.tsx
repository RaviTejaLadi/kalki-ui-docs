import React from 'react';
import { SelectTriggerProps } from './interfaces';
import { SelectContext } from './Select';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils';

export const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { disabled, open, setOpen } = React.useContext(SelectContext);
    const triggerRef = React.useRef<HTMLButtonElement | null>(null);

    React.useImperativeHandle(ref, () => triggerRef.current as HTMLButtonElement);

    return (
      <button
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        disabled={disabled}
        className={cn(
          'flex h-9 items-center justify-between whitespace-nowrap rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
          className
        )}
        onClick={() => setOpen(!open)}
        style={{ width: '100%' }}
        {...props}
      >
        {children}
        <ChevronDown
          className="h-4 w-4 shrink-0 opacity-50 transition-transform duration-200 ease-in-out data-[state=open]:rotate-180"
          data-state={open ? 'open' : 'closed'}
        />
      </button>
    );
  }
);
SelectTrigger.displayName = 'SelectTrigger';
