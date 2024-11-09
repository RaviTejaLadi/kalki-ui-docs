import { forwardRef, useEffect, useRef, useState } from 'react';
import { NavMenuContentPosition, NavMenuContentProps } from './interface';
import { cn } from '@/utils';
import { useMergedRef } from '@/hooks/useMergedRef';

export const NavMenuContent = forwardRef<HTMLDivElement, NavMenuContentProps>(
  ({ children, className, position }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const combinedRef = useMergedRef(ref, contentRef);
    const [adjustedPosition, setAdjustedPosition] = useState<NavMenuContentPosition>(position);

    useEffect(() => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        let left = position.left;
        if (left + rect.width > viewportWidth) {
          left = Math.max(0, viewportWidth - rect.width - 16);
        }

        setAdjustedPosition({
          top: position.top,
          left: left,
        });
      }
    }, [position]);

    return (
      <div
        ref={combinedRef}
        className={cn(
          'border w-auto fixed z-50 mt-1 max-h-[50vh] max-w-[50rem] min-w-[200px] bg-white',
          'shadow-md rounded-md right-2 p-2',
          'transform-gpu border-gray-200 overflow-y-auto',
          className
        )}
        style={{
          position: 'fixed',
          top: `${adjustedPosition.top}px`,
          left: `${adjustedPosition.left}px`,
          visibility: adjustedPosition.top === 0 ? 'hidden' : 'visible',
        }}
      >
        {children}
      </div>
    );
  }
);

NavMenuContent.displayName = 'NavMenuContent';
