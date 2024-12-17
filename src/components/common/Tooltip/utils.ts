import { Position } from './types';

export const getTooltipPosition = (
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  position: Position,
  offset: number
): { top: number; left: number } => {
  const gap = offset || 8;

  switch (position) {
    case 'top':
      return {
        top: triggerRect.top - tooltipRect.height - gap,
        left: triggerRect.left + (triggerRect.width - tooltipRect.width) / 2,
      };
    case 'bottom':
      return {
        top: triggerRect.bottom + gap,
        left: triggerRect.left + (triggerRect.width - tooltipRect.width) / 2,
      };
    case 'left':
      return {
        top: triggerRect.top + (triggerRect.height - tooltipRect.height) / 2,
        left: triggerRect.left - tooltipRect.width - gap,
      };
    case 'right':
      return {
        top: triggerRect.top + (triggerRect.height - tooltipRect.height) / 2,
        left: triggerRect.right + gap,
      };
  }
};

export const getArrowPosition = (position: Position): string => {
  switch (position) {
    case 'top':
      return 'bottom-[-4px] left-1/2 -translate-x-1/2 rotate-45';
    case 'bottom':
      return 'top-[-4px] left-1/2 -translate-x-1/2 rotate-45';
    case 'left':
      return 'right-[-4px] top-1/2 -translate-y-1/2 rotate-45';
    case 'right':
      return 'left-[-4px] top-1/2 -translate-y-1/2 rotate-45';
  }
};
