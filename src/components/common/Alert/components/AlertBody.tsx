import { cn } from '@/utils';
import { SectionProps } from '../types';

/**
 * A component that renders the body content of an alert message.
 *
 * @component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the alert body
 * @param {string} [props.className] - Additional CSS class names to apply to the alert body
 * @param {React.CSSProperties} [props.style] - Additional CSS styles to apply to the alert body
 * @param {Object} props.rest - Additional props to be spread onto the div element
 * @returns {JSX.Element} A div element containing the alert body content
 */
export const AlertBody: React.FC<SectionProps> = ({ children, className, style, ...rest }) => {
  return (
    <div className={cn('text-xs my-2', className)} style={style} {...rest}>
      {children}
    </div>
  );
};
