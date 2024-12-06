import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import { codeVariants } from './codeVariants';

export type CodeProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  underline?: boolean;
  padding?: string;
  margin?: string;
} & VariantProps<typeof codeVariants>;
