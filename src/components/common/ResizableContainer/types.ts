import { ResizeWidth } from './constants';

export type Direction = 'left' | 'right';

export interface ResizableContainerProps {
  direction?: Direction;
  minWidth?: number;
  maxWidth?: ResizeWidth;
  initialWidth?: ResizeWidth;
  className?: string;
  children: React.ReactNode;
}
