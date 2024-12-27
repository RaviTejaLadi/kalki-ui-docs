import React, { useContext, useEffect } from 'react';
import { CarouselSlidesProps } from './types';
import { CarouselContext } from './context/CarouselContext';
import { cn } from '@/utils';

export const CarouselSlides: React.FC<CarouselSlidesProps> = ({ children, className, style }) => {
  const { currentIndex, setSlides } = useContext(CarouselContext)!;

  useEffect(() => {
    setSlides(React.Children.toArray(children));
  }, [children, setSlides]);

  return (
    <div className={cn('relative w-full h-full overflow-hidden', className)} style={style}>
      <div
        className="transition-transform duration-500 ease-in-out w-full h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          display: 'flex',
        }}
      >
        {React.Children.map(children, (child) => (
          <div className="w-full h-full flex-shrink-0">{child}</div>
        ))}
      </div>
    </div>
  );
};
