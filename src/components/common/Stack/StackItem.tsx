import { Box } from 'lucide-react';
import { StackItemProps } from './types';

/**
 * A component that represents an item within a Stack layout.
 * 
 * @component
 * @param {object} props - The component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the stack item
 * @param {string} [props.className] - Additional CSS class names to apply to the stack item
 * @param {React.CSSProperties} [props.style] - Custom inline styles to apply to the stack item
 * @returns {JSX.Element} A Box component containing the stack item content
 */
export const StackItem: React.FC<StackItemProps> = ({ children, className, style, ...rest }) => (
  <Box className={className} style={style} {...rest}>
    {children}
  </Box>
);
