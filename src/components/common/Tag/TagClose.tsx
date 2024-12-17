import { cn } from '@/utils';
import { TagCloseButtonProps } from './types';
import { X } from 'lucide-react';

/**
 * A component that renders a close button for tags with an X icon.
 *
 * @component
 * @param {Object} props - The component props
 * @param {React.MouseEventHandler<HTMLButtonElement>} props.onClick - Function to handle click events
 * @param {string} [props.className] - Additional CSS classes to apply to the button
 * @returns {JSX.Element} A button element with an X icon
 */
export const TagClose: React.FC<TagCloseButtonProps> = ({ onClick, className, ...props }) => (
  <button className={cn('ml-2 p-1 opacity-50 hover:opacity-100 transition', className)} onClick={onClick} {...props}>
    <X className="size-3 font-bold" />
  </button>
);
