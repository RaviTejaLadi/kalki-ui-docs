import { cn } from '@/utils';
import { SectionProps } from '../types';

/**
 * Represents the header section of an Alert component.
 *
 * @component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the header
 * @param {string} [props.className] - Additional CSS classes to be applied to the header
 * @param {React.CSSProperties} [props.style] - Custom inline styles to be applied to the header
 * @returns {JSX.Element} A div element containing the header content with applied styles
 */
export const AlertHeader: React.FC<SectionProps> = ({ children, className, style, ...rest }) => {
  return (
    <div className={cn('font-bold mb-2', className)} style={style} {...rest}>
      {children}
    </div>
  );
};
