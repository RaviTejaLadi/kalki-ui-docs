import React, { useState, useCallback, useRef, useEffect, forwardRef } from 'react';
import Box from '../Box';
import { useMergedRef } from '@/hooks/useMergedRef';
import { cn } from '@/utils';
import { GripHorizontal, GripVertical } from 'lucide-react';

interface SplitterProps {
  orientation?: 'horizontal' | 'vertical';
  height?: string;
  children: React.ReactNode;
  withHandle?: boolean;
  className?: string;
}

interface SplitterPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  initialSize?: string;
  minSize?: string;
  maxSize?: string;
  className?: string;
}

const parseSizeToPixels = (size: string | number, containerSize: number): number | null => {
  if (typeof size === 'number') return size;
  if (typeof size === 'string') {
    if (size.endsWith('%')) {
      return (parseFloat(size) / 100) * containerSize;
    }
    if (size.endsWith('px')) {
      return parseFloat(size);
    }
  }
  return null;
};

const useResizeHandle = (
  initialSizes: string[],
  minSizes: string[],
  maxSizes: string[],
  orientation: 'horizontal' | 'vertical' = 'horizontal'
) => {
  const [sizes, setSizes] = useState(initialSizes);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleResize = useCallback(
    (index: number, e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      const startPos = orientation === 'horizontal' ? e.clientX : e.clientY;
      const containerSize =
        orientation === 'horizontal' ? containerRef.current!.offsetWidth : containerRef.current!.offsetHeight;
      const startSizes = [...sizes];

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const currentPos = orientation === 'horizontal' ? moveEvent.clientX : moveEvent.clientY;
        const diff = currentPos - startPos;

        const newSizes = startSizes.map((size, i) => {
          if (i === index || i === index + 1) {
            const currentSize = parseSizeToPixels(size, containerSize)!;
            const minSize = parseSizeToPixels(minSizes[i], containerSize) || 0;
            const maxSize = parseSizeToPixels(maxSizes[i], containerSize) || containerSize;

            let newSize = i === index ? currentSize + diff : currentSize - diff;
            newSize = Math.max(minSize, Math.min(maxSize, newSize));
            return `${(newSize / containerSize) * 100}%`;
          }
          return size;
        });

        setSizes(newSizes);
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [sizes, minSizes, maxSizes, orientation]
  );

  return [sizes, handleResize, containerRef, setSizes] as const;
};

const ResizeHandle = React.memo(
  ({
    onMouseDown,
    orientation = 'horizontal',
    withHandle,
  }: {
    onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
    orientation: 'horizontal' | 'vertical';
    withHandle?: boolean;
  }) => (
    <div
      className={cn(
        'flex items-center justify-center border dark:border-gray-200/10',
        orientation === 'horizontal' ? 'w-[.5px] cursor-ew-resize' : 'h-[.5px] cursor-ns-resize'
      )}
      onMouseDown={onMouseDown}
    >
      {withHandle && orientation === 'horizontal' ? (
        <Box
          width="12px"
          height="13px"
          className="flex items-center justify-center rounded bg-background dark:bg-inherit"
          padding="1px"
          outlined
        >
          <GripVertical className="text-[var(--icon-color)] size-3" />
        </Box>
      ) : (
        <Box
          width="15px"
          height="10px"
          className="flex items-center justify-center rounded bg-background dark:bg-inherit"
          padding="1px"
          outlined
        >
          <GripHorizontal className="text-[var(--icon-color)] size-3" />
        </Box>
      )}
    </div>
  )
);

const Splitter = forwardRef<HTMLDivElement, SplitterProps>(
  ({ orientation = 'horizontal', height = '100%', children, withHandle = true, className }, ref) => {
    const panes = React.Children.toArray(children) as React.ReactElement<SplitterPaneProps>[];
    const initialSizes = panes.map((pane) => pane.props.initialSize || `${100 / panes.length}%`);
    const minSizes = panes.map((pane) => pane.props.minSize || '0%');
    const maxSizes = panes.map((pane) => pane.props.maxSize || '100%');

    const [sizes, handleResize, containerRef, setSizes] = useResizeHandle(
      initialSizes,
      minSizes,
      maxSizes,
      orientation
    );
    const mergedRef = useMergedRef(ref, containerRef);

    useEffect(() => {
      const containerSize =
        orientation === 'horizontal' ? containerRef.current!.offsetWidth : containerRef.current!.offsetHeight;
      const newSizes = initialSizes.map((size) => {
        const pxSize = parseSizeToPixels(size, containerSize)!;
        return `${(pxSize / containerSize) * 100}%`;
      });
      setSizes(newSizes);
    }, []);

    return (
      <div
        className={cn(
          'flex',
          orientation === 'horizontal' ? 'flex-row' : 'flex-col',
          'w-full h-full border dark:border-gray-200/10',
          className
        )}
        style={{ height }}
        ref={mergedRef}
      >
        {panes.map((pane, index) => (
          <React.Fragment key={index}>
            <div
              className="overflow-auto"
              style={{
                [orientation === 'horizontal' ? 'width' : 'height']: sizes[index],
              }}
            >
              {React.cloneElement(pane, {
                style: { height: '100%', width: '100%' },
              })}
            </div>
            {index < panes.length - 1 && (
              <ResizeHandle
                withHandle={withHandle}
                onMouseDown={(e) => handleResize(index, e)}
                orientation={orientation}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
);

const SplitterPane = forwardRef<HTMLDivElement, SplitterPaneProps>(({ children, className, ...rest }, ref) => (
  <div ref={ref} className={cn('h-full overflow-auto', className)} {...rest}>
    {children}
  </div>
));

SplitterPane.displayName = 'SplitterPane';
Splitter.displayName = 'Splitter';
ResizeHandle.displayName = 'ResizeHandle';

export default Object.assign(
  Splitter as React.ForwardRefExoticComponent<SplitterProps & React.RefAttributes<HTMLDivElement>>,
  {
    Pane: SplitterPane,
  }
);
export { SplitterPane };
