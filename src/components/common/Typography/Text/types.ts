import { VariantProps } from 'class-variance-authority';
import { CSSProperties } from 'react';
import { textVariants } from './textVariants';

interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  style?: CSSProperties;
  underline?: boolean;
  overline?: boolean;
  dashed?: boolean;
  italic?: boolean;
  strong?: boolean;
  strikethrough?: boolean;
  marked?: boolean;
  smaller?: boolean;
  deleted?: boolean;
  inserted?: boolean;
}

export { type TextProps }
