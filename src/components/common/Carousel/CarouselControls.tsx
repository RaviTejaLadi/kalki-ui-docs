import React, { useContext, useEffect } from 'react';
import { CarouselControlsProps } from './types';
import { CarouselContext } from './context/CarouselContext';
import { cn } from '@/utils';

export const CarouselControls: React.FC<CarouselControlsProps> = ({ children, className, style }) => {
  const { goToPrevious, goToNext } = useContext(CarouselContext)!;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  return (
    <div className={cn('flex justify-between mt-4', className)} style={style}>
      {React.Children.map(children, (child) => {
        const isPrevious = React.isValidElement(child) && child.props?.onClick === goToPrevious;
        return React.cloneElement(child as React.ReactElement, {
          onClick: isPrevious ? goToPrevious : goToNext,
          'aria-label': isPrevious ? 'Previous slide' : 'Next slide',
          role: 'button',
          tabIndex: 0,
        });
      })}
    </div>
  );
};
