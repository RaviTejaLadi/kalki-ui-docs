import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TooltipProps } from './types';
import { getTooltipPosition, getArrowPosition } from './utils';

 const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'right',
  delay = 100,
  showArrow = false,
  offset = 8,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const updatePosition = () => {
    if (triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const newCoords = getTooltipPosition(triggerRect, tooltipRect, position, offset);
      setCoords(newCoords);
    }
  };

  const handleMouseEnter = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(true);
      // Update position in next frame after tooltip is rendered
      requestAnimationFrame(updatePosition);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    setIsOpen(false);
  };

  return (
    <div
      ref={triggerRef}
      className="inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}
      {isOpen &&
        createPortal(
          <div
            ref={tooltipRef}
            role="tooltip"
            style={{ top: `${coords.top}px`, left: `${coords.left}px` }}
            className={`fixed z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded-md shadow-lg ${className}`}
          >
            {content}
            {showArrow && <div className={`absolute w-2 h-2 bg-gray-900 ${getArrowPosition(position)}`} />}
          </div>,
          document.body
        )}
    </div>
  );
};

export default Tooltip