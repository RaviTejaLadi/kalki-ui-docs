import React from 'react';
import { SelectItemProps } from './interfaces';
import { SelectContext } from './Select';
import { Check } from 'lucide-react';
import { cn } from '@/utils';

export const SelectItem = React.forwardRef<HTMLButtonElement, SelectItemProps>(
  ({ className, children, value, disabled = false, ...props }, ref) => {
    const { value: selectedValue, onValueChange } = React.useContext(SelectContext);
    const isSelected = selectedValue === value;
    const itemRef = React.useRef<HTMLButtonElement>(null);

    React.useImperativeHandle(ref, () => itemRef.current as HTMLButtonElement);

    const focusSibling = (direction: 1 | -1) => {
      const listbox = itemRef.current?.closest('[role="listbox"]');
      if (!listbox) return;

      const options = Array.from(listbox.querySelectorAll<HTMLElement>('[role="option"]:not([disabled])'));
      const currentIndex = options.indexOf(itemRef.current as HTMLElement);
      if (currentIndex === -1) return;

      const nextIndex = (currentIndex + direction + options.length) % options.length;
      options[nextIndex]?.focus();
    };

    return (
      <button
        ref={itemRef}
        role="option"
        aria-selected={isSelected}
        disabled={disabled}
        tabIndex={-1}
        onClick={() => onValueChange?.(value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onValueChange?.(value);
          } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            focusSibling(1);
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            focusSibling(-1);
          } else if (e.key === 'Home') {
            e.preventDefault();
            const listbox = itemRef.current?.closest('[role="listbox"]');
            listbox?.querySelectorAll<HTMLElement>('[role="option"]:not([disabled])')[0]?.focus();
          } else if (e.key === 'End') {
            e.preventDefault();
            const listbox = itemRef.current?.closest('[role="listbox"]');
            const options = listbox?.querySelectorAll<HTMLElement>('[role="option"]:not([disabled])');
            options?.[options.length - 1]?.focus();
          }
        }}
        className={cn(
          'flex w-full justify-between select-none items-center rounded-sm py-1.5 pl-2 pr-2 text-sm outline-none cursor-default',
          'focus:bg-accent focus:text-accent-foreground',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          'hover:bg-gray-100 dark:hover:bg-gray-800 rounded',
          isSelected && 'bg-accent text-accent-foreground',
          className
        )}
        {...props}
      >
        <span className="truncate">{children}</span>
        <span className="flex h-3.5 w-3.5 items-center justify-center" aria-hidden="true">
          {isSelected && <Check className="h-4 w-4" />}
        </span>
      </button>
    );
  }
);
SelectItem.displayName = 'SelectItem';
