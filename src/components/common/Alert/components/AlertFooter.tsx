import { cn } from '@/utils';
import { SectionProps } from '../types';

/**
 * Footer component for Alert that wraps content with margin top and additional styling options
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to be rendered inside the footer
 * @param {string} [props.className] - Additional CSS class names
 * @param {React.CSSProperties} [props.style] - Inline styles to apply to the footer
 * @returns {JSX.Element} Rendered AlertFooter component
 */
export const AlertFooter: React.FC<SectionProps> = ({
  children,
  className,
  style,
  ...rest
}) => {
  return (
    <div className={cn('mt-2', className)} style={style} {...rest}>
      {children}
    </div>
  );
};
