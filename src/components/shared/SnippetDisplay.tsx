import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

interface SnippetDisplayProps {
  snippet: ReactNode;
  highlighter: ReactNode;
}
const SnippetDisplay: React.FC<SnippetDisplayProps> = ({ snippet, highlighter }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [componentWidth, setComponentWidth] = useState<number | null>(null);
  const minWidth = 240;

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setComponentWidth(containerWidth - 0);
    }
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    document.body.style.cursor = 'ew-resize';
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
    document.body.style.cursor = '';
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isResizing && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const relativeX = e.clientX - containerRect.left;
        const maxWidth = containerRect.width - 0;

        const newWidth = Math.max(minWidth, Math.min(relativeX, maxWidth));
        setComponentWidth(newWidth);

        e.preventDefault();
      }
    },
    [isResizing, minWidth]
  );

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && componentWidth) {
        const containerWidth = containerRef.current.offsetWidth;
        setComponentWidth(Math.min(componentWidth, containerWidth - 0));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [componentWidth]);

  useEffect(() => {
    if (isResizing) {
      document.body.style.userSelect = 'none';
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      document.body.style.userSelect = '';
    }
    return () => {
      document.body.style.userSelect = '';
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isResizing, handleMouseUp, handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className="flex h-auto w-full max-w-full flex-col overflow-hidden rounded-lg border bg-background dark:border-gray-200/10"
    >
      <div className="flex h-auto w-full min-w-0">
        <div
          className="relative flex min-w-0 items-center justify-center overflow-x-auto bg-[radial-gradient(circle,_rgba(148,163,184,0.35)_1px,_transparent_1px)] [background-size:16px_16px]"
          style={{ width: componentWidth ? `${componentWidth}px` : '100%', maxWidth: '100%' }}
        >
          <div className="flex min-h-[120px] w-full min-w-0 items-center justify-center overflow-x-auto p-4 sm:p-6 md:p-8">
            <div className="w-full min-w-0 max-w-full">{snippet}</div>
          </div>
        </div>
        <div
          className="hidden w-2 cursor-ew-resize items-center justify-center bg-background sm:flex"
          onMouseDown={handleMouseDown}
        >
          <div className="h-20 w-1 rounded-full bg-gray-600" />
        </div>
        <div className="hidden flex-1 bg-gray-800 sm:block" />
      </div>
      <div className="h-auto overflow-x-auto border-t p-1.5 dark:border-gray-200/10">
        <div className="rounded border dark:border-gray-200/10">{highlighter}</div>
      </div>
    </div>
  );
};

export default SnippetDisplay;
