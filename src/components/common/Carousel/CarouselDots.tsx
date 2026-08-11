import { useContext } from 'react';
import { CarouselContext } from './context/CarouselContext';
import { CarouselDotsProps } from './types';
import { cn } from '@/utils';

export const CarouselDots: React.FC<CarouselDotsProps> = ({ className, style, ...rest }) => {
  const { currentIndex, setCurrentIndex, slides } = useContext(CarouselContext)!;

  return (
    <div
      className={cn('flex justify-center mt-4 gap-1', className)}
      style={style}
      role="tablist"
      aria-label="Carousel pagination"
      {...rest}
    >
      {slides.map((_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-selected={index === currentIndex}
          aria-label={`Go to slide ${index + 1}`}
          className={cn(
            'w-2.5 h-2.5 rounded-full bg-gray-400 hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            index === currentIndex && 'bg-blue-500'
          )}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  );
};
