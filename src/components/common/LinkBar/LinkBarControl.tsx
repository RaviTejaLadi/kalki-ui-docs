import { cn } from '@/utils';
import { forwardRef, useContext } from 'react';
import { ControlsProps } from './interface';
import { LinkBarContext } from './context';
import Button from '../Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const LinkBarControl = forwardRef<HTMLDivElement, ControlsProps>(
  ({ position, size = 'sm', variant = 'ghost' }, ref) => {
    const { scrollRef } = useContext(LinkBarContext);

    const scroll = (direction: 'left' | 'right') => {
      if (!scrollRef?.current) return;

      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    };

    const isLeft = position === 'left';
    const baseStyles = ' z-10';
    const positionStyles = isLeft ? 'left-1' : 'right-1';
    const gradientStyles = isLeft
      ? 'bg-gradient-to-r from-white via-white to-transparent'
      : 'bg-gradient-to-l from-white via-white to-transparent';

    return (
      <div ref={ref} className={cn(baseStyles, positionStyles, 'p-1')}>
        <div className={cn('inset-0 opacity-80', gradientStyles)} />
        <Button
          size={size}
          variant={variant}
          onClick={() => scroll(isLeft ? 'left' : 'right')}
        >
          {isLeft ? (
            <ChevronLeft className="size-3" />
          ) : (
            <ChevronRight className="size-3" />
          )}
        </Button>
      </div>
    );
  }
);
LinkBarControl.displayName = 'LinkBarControl';
