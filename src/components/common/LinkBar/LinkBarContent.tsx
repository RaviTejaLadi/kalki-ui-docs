import { useContext } from 'react';
import { LinkBarContentProps } from './interface';
import { LinkBarContext } from './context';
import { cn } from '@/utils';

export const LinkBarContent = ({
  children,
  className,
  ...props
}: LinkBarContentProps) => {
  const { scrollRef } = useContext(LinkBarContext);

  return (
    <div
      ref={scrollRef}
      className={cn(
        'flex items-center gap-1 flex-grow overflow-x-auto scrollbar-none scroll-smooth',
        className
      )}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      {...props}
    >
      {children}
    </div>
  );
};
