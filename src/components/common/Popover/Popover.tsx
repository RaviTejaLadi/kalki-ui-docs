import React, { useRef } from 'react';
import { PopoverContext } from './PopoverContext';
import { PopoverProps } from './types';

export const Popover: React.FC<PopoverProps> = ({ children, isOpen, onOpenChange, className = '' }) => {
  const triggerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  return (
    <PopoverContext.Provider value={{ isOpen, onOpenChange, triggerRef, contentRef }}>
      <div className={`relative inline-block ${className}`}>{children}</div>
    </PopoverContext.Provider>
  );
};
