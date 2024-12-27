import { ReactNode } from 'react';
import { BoxProps } from '../Box';

export const sizeMap = {
  sm: { width: '500px', height: '400px' },
  md: { width: '600px', height: '500px' },
  lg: { width: '700px', height: '600px' },
  xl: { width: '1000px', height: '700px' },
};

interface CarouselProps extends BoxProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  width?: string;
  height?: string;
  borderRadius?: string;
  padding?: string;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

interface CarouselContextType {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  slides: ReactNode[];
  setSlides: (slides: ReactNode[]) => void;
  goToPrevious: () => void;
  goToNext: () => void;
}

interface CarouselSlidesProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface CarouselContentProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface CarouselControlsProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface CarouselDotsProps {
  className?: string;
  style?: React.CSSProperties;
}

export type {
  CarouselProps,
  CarouselContextType,
  CarouselSlidesProps,
  CarouselContentProps,
  CarouselControlsProps,
  CarouselDotsProps,
};
