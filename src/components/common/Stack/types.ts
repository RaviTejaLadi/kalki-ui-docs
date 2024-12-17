import { CSSProperties, ReactNode } from 'react';

type JustifyContent = 'start' | 'center' | 'end' | 'between' | 'around';

type AlignItems = 'start' | 'center' | 'end' | 'stretch';

type AlignContent = 'start' | 'center' | 'end' | 'stretch';

type FlexWrap = 'wrap' | 'nowrap';
type Direction = 'row' | 'column';

interface StackItemProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
interface StackProps {
  direction?: Direction;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  flexWrap?: FlexWrap;
  spacing?: number;
  padding?: string;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}
export type { StackItemProps, StackProps };
