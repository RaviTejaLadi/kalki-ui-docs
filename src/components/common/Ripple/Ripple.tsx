import React, { useState, useLayoutEffect, forwardRef, MouseEvent } from 'react';
import { cn } from '@/utils';

interface RippleProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number;
  color?: string;
  children?: React.ReactNode;
}

const useDebouncedRippleCleanUp = (rippleCount: number, duration: number, cleanUpFunction: () => void) => {
  useLayoutEffect(() => {
    let bounce: ReturnType<typeof setTimeout> | null = null;
    if (rippleCount > 0) {
      bounce = setTimeout(() => {
        cleanUpFunction();
      }, duration * 4);
    }
    return () => {
      if (bounce) {
        clearTimeout(bounce);
      }
    };
  }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple = forwardRef<HTMLDivElement, RippleProps>(
  ({ duration = 850, color = 'rgba(255, 255, 255, 0.7)', className, style, children, ...rest }, ref) => {
    const [rippleArray, setRippleArray] = useState<{ x: number; y: number; size: number }[]>([]);

    useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
      setRippleArray([]);
    });

    const addRipple = (event: MouseEvent<HTMLDivElement>) => {
      const rippleContainer = event.currentTarget.getBoundingClientRect();
      const size = Math.max(rippleContainer.width, rippleContainer.height);
      const x = event.clientX - rippleContainer.left - size / 2;
      const y = event.clientY - rippleContainer.top - size / 2;
      const newRipple = { x, y, size };
      setRippleArray((prev) => [...prev, newRipple]);
    };

    return (
      <div
        ref={ref}
        className={cn('relative inline-flex items-center justify-center overflow-hidden', className)}
        style={{
          ...style,
          WebkitTapHighlightColor: 'transparent',
        }}
        onMouseDown={addRipple}
        {...rest}
      >
        {children}
        {rippleArray.map((ripple, index) => (
          <span
            key={`ripple_${index}`}
            className="absolute pointer-events-none"
            style={{
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
              backgroundColor: color,
              borderRadius: '50%',
              animation: `ripple ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              position: 'absolute',
              transform: 'translate(-50%, -50%) scale(0)',
            }}
          />
        ))}
      </div>
    );
  }
);

Ripple.displayName = 'Ripple';

export default Ripple;
