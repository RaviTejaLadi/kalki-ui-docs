// components/ui/popover/usePosition.ts
import { useEffect, useState } from 'react';
import { Position, Alignment } from './types';

interface PositionResult {
  top: number;
  left: number;
}

export const usePosition = (
  triggerElement: HTMLElement | null,
  contentElement: HTMLElement | null,
  position: Position,
  align: Alignment,
  offset: number
): PositionResult => {
  const [coordinates, setCoordinates] = useState<PositionResult>({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (!triggerElement || !contentElement) return;

    const triggerRect = triggerElement.getBoundingClientRect();
    const contentRect = contentElement.getBoundingClientRect();
    const scrollY = window.pageYOffset;
    const scrollX = window.pageXOffset;

    let top = 0;
    let left = 0;

    switch (position) {
      case 'bottom':
        top = triggerRect.bottom + offset + scrollY;
        left = triggerRect.left + scrollX;
        break;
      case 'top':
        top = triggerRect.top - contentRect.height - offset + scrollY;
        left = triggerRect.left + scrollX;
        break;
      case 'left':
        top =
          triggerRect.top +
          (triggerRect.height - contentRect.height) / 2 +
          scrollY;
        left = triggerRect.left - contentRect.width - offset + scrollX;
        break;
      case 'right':
        top =
          triggerRect.top +
          (triggerRect.height - contentRect.height) / 2 +
          scrollY;
        left = triggerRect.right + offset + scrollX;
        break;
    }

    switch (align) {
      case 'start':
        if (position === 'top' || position === 'bottom') {
          left = triggerRect.left + scrollX;
        } else {
          top = triggerRect.top + scrollY;
        }
        break;
      case 'center':
        if (position === 'top' || position === 'bottom') {
          left =
            triggerRect.left +
            (triggerRect.width - contentRect.width) / 2 +
            scrollX;
        } else {
          top =
            triggerRect.top +
            (triggerRect.height - contentRect.height) / 2 +
            scrollY;
        }
        break;
      case 'end':
        if (position === 'top' || position === 'bottom') {
          left = triggerRect.right - contentRect.width + scrollX;
        } else {
          top = triggerRect.bottom - contentRect.height + scrollY;
        }
        break;
    }

    setCoordinates({ top, left });
  }, [triggerElement, contentElement, position, align, offset]);

  return coordinates;
};
