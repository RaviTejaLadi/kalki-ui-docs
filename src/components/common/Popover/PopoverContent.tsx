import React, { useEffect } from 'react';
import { usePopover } from './PopoverContext';
import { usePosition } from './usePosition';
import type { PopoverContentProps } from './types';

export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  PopoverContentProps
>(
  (
    {
      children,
      position = 'bottom',
      align = 'center',
      offset = 8,
      className = '',
    },
    ref
  ) => {
    const { isOpen, contentRef, triggerRef, onOpenChange } = usePopover();
    const coords = usePosition(
      triggerRef.current,
      contentRef.current,
      position,
      align,
      offset
    );

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          contentRef.current &&
          !contentRef.current.contains(event.target as Node) &&
          triggerRef.current &&
          !triggerRef.current.contains(event.target as Node)
        ) {
          onOpenChange(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!isOpen) return null;

    return (
      <div
        ref={(node) => {
          if (node) {
            contentRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
          }
        }}
        style={{
          position: 'absolute',
          top: coords.top,
          left: coords.left,
          zIndex: 1000,
        }}
        className={`
          bg-white 
          rounded-md 
          shadow-lg 
          p-4 
          border 
          border-gray-200 
          min-w-[200px] 
          animate-in 
          fade-in-0 
          zoom-in-95 
          ${className}
        `}
      >
        {children}
      </div>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';
