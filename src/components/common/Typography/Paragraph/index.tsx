import { FC } from 'react';
import { cn } from '@/utils';
import { paragraphVariants } from './paragraphVariants';
import { ParagraphProps } from './types';

/**
 * A reusable Paragraph component that renders text with customizable styles.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {ReactNode} props.children - The content to be rendered within the paragraph
 * @param {string} [props.size] - The size variant of the paragraph text
 * @param {string} [props.className] - Additional CSS classes to be applied
 * @param {(event: MouseEvent<HTMLParagraphElement>) => void} [props.onClick] - Click event handler
 * @param {...HTMLAttributes<HTMLParagraphElement>} props - Additional HTML paragraph attributes
 * 
 * @returns {JSX.Element} A styled paragraph element
 * 
 * @example
 * ```tsx
 * <Paragraph size="sm" className="custom-class">
 *   This is a paragraph text
 * </Paragraph>
 * ```
 */
const Paragraph: FC<ParagraphProps> = ({
  children,
  size,
  className,
  onClick,
  ...props
}) => {
  return (
    <p
      className={cn(paragraphVariants({ size, ...props }), className)}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

export default Paragraph;
