import React, { useState, forwardRef, ReactNode } from 'react';
import Box from '../Box';
import { cn } from '@/utils';
import {
  type CarouselProps,
  type CarouselContextType,
  type CarouselSlidesProps,
  type CarouselContentProps,
  type CarouselControlsProps,
  type CarouselDotsProps,
  sizeMap,
} from './types';
import { CarouselSlides } from './CarouselSlides';
import { CarouselContent } from './CarouselContent';
import { CarouselControls } from './CarouselControls';
import { CarouselDots } from './CarouselDots';
import { carouselVariants } from './carouselVariants';
import { CarouselContext } from './context/CarouselContext';

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ size = 'sm', width, height, borderRadius = '5px', padding = 'md', children, className, style, ...rest }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slides, setSlides] = useState<ReactNode[]>([]);

    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const containerStyle: React.CSSProperties = {
      width: width || sizeMap[size].width,
      height: height || sizeMap[size].height,
      borderRadius,
      ...style,
    };

    const contextValue: CarouselContextType = {
      currentIndex,
      setCurrentIndex,
      slides,
      setSlides,
      goToPrevious,
      goToNext,
    };

    return (
      <CarouselContext.Provider value={contextValue}>
        <Box
          ref={ref}
          padding={padding}
          className={cn(carouselVariants({ padding: padding as 'sm' | 'md' | 'lg' | 'xl' }), className)}
          style={containerStyle}
          {...rest}
        >
          {children}
        </Box>
      </CarouselContext.Provider>
    );
  }
);

Carousel.displayName = 'Carousel';

export default Object.assign(
  Carousel as React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<HTMLDivElement>>,
  {
    Slides: CarouselSlides,
    Content: CarouselContent,
    Controls: CarouselControls,
    Dots: CarouselDots,
  }
);
export {
  CarouselSlides,
  CarouselContent,
  CarouselControls,
  CarouselDots,
  CarouselSlidesProps,
  CarouselContentProps,
  CarouselControlsProps,
  CarouselDotsProps,
};
