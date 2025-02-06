import { cn } from '@/utils';
import React, { ReactNode } from 'react';

interface DotBackgroundProps {
  children?: ReactNode;
  gap?: number;
  color?: string;
  size?: number;
  className?: string;
}

const DotBackground: React.FC<DotBackgroundProps> = ({
  children,
  gap = 20,
  color = '#e2e8f0',
  size = 1,
  className = '',
}) => {
  return (
    <div className={`relative w-full h-full `}>
      {/* Dot pattern background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(${color} ${size}px, transparent ${size}px)
            `,
            backgroundSize: `${gap}px ${gap}px`,
          }}
        />
      </div>

      {/* Content container */}
      <div className={cn('relative z-10 w-full h-full flex items-center justify-center', className)}>{children}</div>
    </div>
  );
};

export default DotBackground;
