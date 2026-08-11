import React, { useContext, useEffect, useRef } from 'react';
import { CarouselControlsProps } from './types';
import { CarouselContext } from './context/CarouselContext';
import { cn } from '@/utils';

export const CarouselControls: React.FC<CarouselControlsProps> = ({ children, className, style }) => {
  const { goToPrevious, goToNext } = useContext(CarouselContext)!;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const root = containerRef.current?.closest('[data-carousel-root]');
      if (!root || !root.contains(document.activeElement)) return;

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  return (
    <div ref={containerRef} className={cn('flex justify-between mt-4', className)} style={style}>
      {React.Children.map(children, (child) => {
        const isPrevious = React.isValidElement(child) && child.props?.onClick === goToPrevious;
        return React.cloneElement(child as React.ReactElement, {
          onClick: isPrevious ? goToPrevious : goToNext,
          'aria-label': isPrevious ? 'Previous slide' : 'Next slide',
          type: 'button',
        });
      })}
    </div>
  );
};
