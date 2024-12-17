import React from 'react';
import { cn } from '@/utils';
import { SelectContext } from './Select';
import { SelectContentProps } from './interfaces';

export const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, ...props }, ref) => {
    const { open } = React.useContext(SelectContext);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const triggerRef = React.useRef<HTMLButtonElement | null>(null);

    React.useImperativeHandle(ref, () => contentRef.current as HTMLDivElement);

    // Ensure the width of SelectContent matches SelectTrigger
    React.useEffect(() => {
      if (open && triggerRef.current && contentRef.current) {
        contentRef.current.style.width = `${triggerRef.current.offsetWidth}px`;
      }
    }, [open]);

    if (!open) return null;

    return (
      <div
        ref={contentRef}
        className={cn(
          'absolute left-0 top-[calc(100%+0.25rem)] w-full z-50 max-h-[20rem] overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95',
          className
        )}
        {...props}
      >
        <div className="w-full p-1">{children}</div>
      </div>
    );
  }
);
SelectContent.displayName = 'SelectContent';
