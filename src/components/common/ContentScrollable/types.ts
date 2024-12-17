import { CSSProperties, ReactNode } from 'react';

/**
 * Props for the ContentScrollable component.
 *
 * @interface ContentScrollableProps
 * @extends {React.HTMLAttributes<HTMLDivElement>}
 *
 * @property {string} [height] - The height of the scrollable content.
 * @property {string} [width] - The width of the scrollable content.
 * @property {ReactNode} children - The content to be rendered inside the scrollable container.
 * @property {'success' | 'danger' | 'warning' | 'info' | 'primary' | 'secondary' | 'dark' | 'light'} [variant] - The variant style of the scrollable content.
 * @property {string} [className] - Additional class names to apply to the scrollable container.
 * @property {CSSProperties} [style] - Inline styles to apply to the scrollable container.
 */
interface ContentScrollableProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: string;
  width?: string;
  children: ReactNode;
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'primary' | 'secondary' | 'dark' | 'light';
  className?: string;
  style?: CSSProperties;
}
export { type ContentScrollableProps };
