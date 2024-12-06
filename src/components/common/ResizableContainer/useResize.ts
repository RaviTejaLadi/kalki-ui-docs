import { useState, useRef, useCallback, useEffect } from 'react';
import { Direction } from './types';
import { RESIZE_DEFAULTS } from './constants';
import type { ResizeWidth } from './constants';

interface UseResizeProps {
  direction?: Direction;
  minWidth?: number;
  maxWidth?: ResizeWidth;
  initialWidth?: ResizeWidth;
  containerRef: React.RefObject<HTMLDivElement>;
}

export const useResize = ({
  direction = 'right',
  minWidth = RESIZE_DEFAULTS.MIN_WIDTH,
  maxWidth = RESIZE_DEFAULTS.MAX_WIDTH,
  initialWidth = RESIZE_DEFAULTS.INITIAL_WIDTH,
  containerRef
}: UseResizeProps) => {
  const [width, setWidth] = useState<ResizeWidth>(() => {
    if (initialWidth === '100%' || !containerRef.current) {
      return '100%';
    }
    return initialWidth;
  });
  
  const isResizing = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const startWidth = useRef<number>(0);

  const getMaxAllowedWidth = useCallback((): number => {
    if (!containerRef.current?.parentElement) return window.innerWidth;
    return containerRef.current.parentElement.clientWidth;
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isResizing.current = true;
    startX.current = e.clientX;
    startWidth.current = containerRef.current?.clientWidth ?? 0;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing.current) return;

    const delta = e.clientX - startX.current;
    const newWidth = direction === 'right'
      ? startWidth.current + delta
      : startWidth.current - delta;

    const maxAllowedWidth = getMaxAllowedWidth();
    const clampedWidth = Math.min(
      Math.max(newWidth, minWidth),
      typeof maxWidth === 'number' ? maxWidth : maxAllowedWidth
    );

    setWidth(clampedWidth);
  }, [direction, minWidth, maxWidth, getMaxAllowedWidth]);

  const handleMouseUp = useCallback(() => {
    isResizing.current = false;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  useEffect(() => {
    if (width === '100%') {
      const handleResize = () => {
        // Force a re-render to maintain 100% width
        setWidth('100%');
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [width]);

  return {
    width,
    handleMouseDown,
    isResizing: isResizing.current
  };
};