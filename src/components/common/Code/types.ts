import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import { codeVariants } from './codeVariants';

/**
 * Props for the Code component.
 * 
 * @extends VariantProps<typeof codeVariants>
 * 
 * @property {ReactNode} children - The content to be rendered inside the code block.
 * @property {string} [className] - Optional additional class names to apply to the code block.
 * @property {React.CSSProperties} [style] - Optional inline styles to apply to the code block.
 * @property {boolean} [underline] - Optional flag to underline the code text.
 * @property {string} [padding] - Optional padding to apply to the code block.
 * @property {string} [margin] - Optional margin to apply to the code block.
 */
interface CodeProps extends VariantProps<typeof codeVariants> {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  underline?: boolean;
  padding?: string;
  margin?: string;
}

export { type CodeProps };
