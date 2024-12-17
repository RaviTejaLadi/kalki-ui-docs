import React from 'react';
import { usePopover } from './PopoverContext';
import type { PopoverTriggerProps } from './types';

export const PopoverTrigger = React.forwardRef<
  HTMLDivElement,
  PopoverTriggerProps
>(({ children, className = '' }, ref) => {
  const { onOpenChange, isOpen, triggerRef } = usePopover();

  return (
    <div
      ref={(node) => {
        if (node) {
          // @ts-ignore - we know this is safe
          triggerRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }
      }}
      onClick={() => onOpenChange(!isOpen)}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
});

PopoverTrigger.displayName = 'PopoverTrigger';
