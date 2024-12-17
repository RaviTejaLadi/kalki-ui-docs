import { cn } from '@/utils';
import { TagIconProps } from './types';

/**
 * A component that renders a span element with icon content
 * @component
 *
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the span
 * @param {string} [props.className] - Additional CSS class names to be applied to the span
 *
 * @returns {JSX.Element} A span element wrapping the icon content with inline flex styling
 */
export const TagIcon: React.FC<TagIconProps> = ({ children, className, ...rest }) => (
  <span className={cn('inline-flex items-center mx-1', className)} {...rest}>
    {children}
  </span>
);
