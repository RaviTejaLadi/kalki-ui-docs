import React from 'react';
import { SelectTriggerProps } from './interfaces';
import { SelectContext } from './Select';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils';
import { useMergedRef } from '@/hooks/useMergedRef';

export const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { disabled, open, setOpen, registerTrigger, error } = React.useContext(SelectContext);
    const localRef = React.useRef<HTMLButtonElement>(null);
    const combinedRef = useMergedRef(localRef, ref);

    React.useEffect(() => {
      registerTrigger(localRef.current);
      return () => registerTrigger(null);
    }, [registerTrigger]);

    return (
      <button
        ref={combinedRef}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-invalid={error || undefined}
        disabled={disabled}
        className={cn(
          'flex h-9 items-center justify-between whitespace-nowrap rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
          className
        )}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
        style={{ width: '100%' }}
        {...props}
      >
        {children}
        <ChevronDown
          className="h-4 w-4 shrink-0 opacity-50 transition-transform duration-200 ease-in-out data-[state=open]:rotate-180"
          data-state={open ? 'open' : 'closed'}
          aria-hidden="true"
        />
      </button>
    );
  }
);
SelectTrigger.displayName = 'SelectTrigger';
