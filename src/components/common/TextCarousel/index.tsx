import React, { useState, useEffect, cloneElement, forwardRef, ReactNode, CSSProperties, ReactElement } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Box from '../Box';
import Button from '../Button';
import { cn } from '@/utils';

interface TextCarouselProps {
  children: ReactNode;
  interval?: number;
  className?: string;
  style?: CSSProperties;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  variant?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'outline';
}

/**
 * A carousel component that displays text content with navigation controls.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {ReactNode} props.children - The content to be displayed in the carousel
 * @param {number} [props.interval=0] - The interval in milliseconds between automatic transitions. Set to 0 to disable auto-transition
 * @param {string} [props.className=''] - Additional CSS classes to apply to the component
 * @param {CSSProperties} [props.style] - Custom inline styles
 * @param {string} [props.size='xs'] - Size variant for the navigation buttons
 * @param {string} [props.variant] - Visual variant for the navigation buttons
 * @param {React.Ref<HTMLDivElement>} ref - Ref object for the carousel container
 * 
 * @returns {ReactElement} A carousel component with navigation buttons
 * 
 * @example
 * ```tsx
 * <TextCarousel interval={3000} size="sm">
 *   <div>First slide</div>
 *   <div>Second slide</div>
 * </TextCarousel>
 * ```
 */
const TextCarousel = forwardRef<HTMLDivElement, TextCarouselProps>(
  ({ children, interval = 0, className = '', style, size = 'xs', variant, ...rest }, ref) => {
    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const items = React.Children.toArray(children) as ReactElement[];
    const itemCount = items.length;

    const goToPrev = () => {
      setIsTransitioning(true);
      setIndex((prevIndex) => (prevIndex === 0 ? itemCount - 1 : prevIndex - 1));
    };

    const goToNext = () => {
      setIsTransitioning(true);
      setIndex((prevIndex) => (prevIndex === itemCount - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
      if (interval > 0) {
        const timer = setInterval(goToNext, interval);
        return () => clearInterval(timer);
      }
    }, [interval]);

    useEffect(() => {
      if (isTransitioning) {
        const timer = setTimeout(() => setIsTransitioning(false), 300);
        return () => clearTimeout(timer);
      }
    }, [isTransitioning]);

    return (
      <Box ref={ref} padding="8px" className={cn('flex flex-col justify-center ', className)} style={style} {...rest}>
        <Box padding="6px" className="relative overflow-hidden">
          <div className={`transition-opacity duration-500`}>{cloneElement(items[index])}</div>
        </Box>
        <Box className="flex gap-5 ">
          <Button onClick={goToPrev} variant={variant} size={size}>
            <ChevronLeft className="size-4" />
          </Button>
          <Button onClick={goToNext} variant={variant} size={size}>
            <ChevronRight className="size-4" />
          </Button>
        </Box>
      </Box>
    );
  }
);

TextCarousel.displayName = 'TextCarousel';
export default TextCarousel;
