import { cn } from '@/utils';
import { TagTextProps } from './types';

/**
 * A component that renders text content within a tag.
 *
 * @param props - The component props
 * @param props.children - The content to be rendered inside the tag
 * @param props.className - Additional CSS class names to apply to the tag text
 * @param props.rest - Any additional props to spread onto the span element
 * @returns A span element containing the provided content with applied styles
 */
export const TagText: React.FC<TagTextProps> = ({ children, className, ...rest }) => (
  <span className={cn('text-center', className)} {...rest}>
    {children}
  </span>
);
