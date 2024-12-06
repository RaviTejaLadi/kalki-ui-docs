import React, { useRef } from 'react';
import { GripVertical } from 'lucide-react';
import { ResizableContainerProps } from './types';
import { useResize } from './useResize';
import { RESIZE_DEFAULTS } from './constants';
import { cn } from '@/utils';

export const ResizableContainer: React.FC<ResizableContainerProps> = ({
  direction = 'right',
  minWidth = RESIZE_DEFAULTS.MIN_WIDTH,
  maxWidth = RESIZE_DEFAULTS.MAX_WIDTH,
  initialWidth = RESIZE_DEFAULTS.INITIAL_WIDTH,
  className,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, handleMouseDown, isResizing } = useResize({
    direction,
    minWidth,
    maxWidth,
    initialWidth,
    containerRef,
  });

  return (
    <div
      ref={containerRef}
      className={cn('relative flex h-full transition-colors ', isResizing && 'select-none', className)}
      style={{ width: typeof width === 'number' ? `${width}px` : width }}
    >
      <div className="flex-1 overflow-hidden">{children}</div>

      <div
        className={cn(
          'absolute top-0 bottom-0 w-1 cursor-e-resize rounded bg-gray-200/50 group',
          direction === 'right' ? 'right-0' : 'left-0',
          isResizing && 'bg-gray-300/50'
        )}
        onMouseDown={handleMouseDown}
      >
        <div
          className={cn(
            'absolute top-1/2 -right-1 -translate-y-1/2 flex items-center justify-center',
            'w-3 h-10 rounded bg-gray-200 shadow-md border border-gray-200',
            'opacity-100 transition-colors duration-200',
            'hover:border-gray-400 hover:bg-blue-50',
            direction === 'right' ? '-ml-2' : '-mr-2'
          )}
        >
          <GripVertical className="w-4 h-4 text-gray-400 group-hover:text-gray-500" />
        </div>
      </div>
    </div>
  );
};
