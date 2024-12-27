import { useContext } from 'react';
import { CarouselContext } from './context/CarouselContext';
import { CarouselDotsProps } from './types';
import { cn } from '@/utils';

export const CarouselDots: React.FC<CarouselDotsProps> = ({ className, style, ...rest }) => {
  const { currentIndex, setCurrentIndex, slides } = useContext(CarouselContext)!;

  return (
    <div className={cn('flex justify-center mt-4', className)} style={style} {...rest}>
      {slides.map((_, index) => (
        <span
          key={index}
          className={`w-2.5 h-2.5 rounded-full bg-gray-400 mx-1 hover:bg-gray-600 cursor-pointer ${
            index === currentIndex ? 'bg-blue-500' : ''
          }`}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  );
};
