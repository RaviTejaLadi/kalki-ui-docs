import React, { useContext } from 'react';
import { CarouselContext } from './context/CarouselContext';
import { CarouselContentProps } from './types';
import { cn } from '@/utils';

export const CarouselContent: React.FC<CarouselContentProps> = ({ children, className, style }) => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error('CarouselContent must be used within a CarouselContext.Provider');
  }

  const { currentIndex } = context;
  return (
    <div className={cn('text-start text-muted-foreground truncate', className)} style={style}>
      {React.Children.toArray(children)[currentIndex]}
    </div>
  );
};
