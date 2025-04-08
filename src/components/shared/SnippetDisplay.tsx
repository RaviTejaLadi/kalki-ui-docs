import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

interface SnippetDisplayProps {
  snippet: ReactNode;
  highlighter: ReactNode;
}
const SnippetDisplay: React.FC<SnippetDisplayProps> = ({ snippet, highlighter }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [componentWidth, setComponentWidth] = useState<number | null>(null);
  const minWidth = 320;

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
      className="w-auto h-auto border dark:border-gray-200/10 bg-background rounded-lg overflow-hidden flex flex-col"
    >
      <div className="flex w-auto h-auto">
        <div
          className=" flex justify-center items-center overflow-auto  relative"
          style={{ width: componentWidth ? `${componentWidth}px` : '100%' }}
        >
          <div className="p-4">{snippet}</div>
        </div>
        <div
          className="w-2 bg-background  cursor-ew-resize flex items-center justify-center"
          onMouseDown={handleMouseDown}
        >
          <div className="h-20 w-1 bg-gray-600 rounded-full" />
        </div>
        <div className="flex-1 bg-gray-800" />
      </div>
      <div className="h-auto overflow-auto  p-4 border-t dark:border-gray-200/10">{highlighter}</div>
    </div>
  );
};

export default SnippetDisplay;
