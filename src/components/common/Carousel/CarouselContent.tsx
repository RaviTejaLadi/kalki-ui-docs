import React, { useContext } from 'react';
import { CarouselContext } from './context/CarouselContext';
import { CarouselContentProps } from './types';
import { cn } from '@/utils';

export const CarouselContent: React.FC<CarouselContentProps> = ({ children, className, style }) => {
  const { currentIndex } = useContext(CarouselContext)!;
  return (
    <div className={cn('text-start truncate', className)} style={style}>
      {React.Children.toArray(children)[currentIndex]}
    </div>
  );
};
