import { useState } from 'react';
import { cn } from '@/utils';
import { Info } from 'lucide-react';
import { TextHighlighterInfoProps } from './types';

/**
 * A component that displays an info icon with a hoverable tooltip containing additional information.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The content to be displayed in the tooltip
 * @param {'dark' | 'light'} [props.variant='dark'] - The color variant of the tooltip
 * @param {string} [props.className] - Additional CSS classes to apply to the tooltip
 * 
 * @returns {JSX.Element} A div containing an info icon and conditional tooltip
 * 
 * @example
 * ```tsx
 * <TextHighlighterInfo variant="dark">
 *   This is some helpful information
 * </TextHighlighterInfo>
 * ```
 */
export const TextHighlighterInfo: React.FC<TextHighlighterInfoProps> = ({ children, variant = 'dark', className }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block" onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
      <Info className="ml-2 -mt-1 w-3 h-3 cursor-pointer text-gray-500" />
      {show && (
        <div
          className={cn(
            'absolute z-10 p-2 mt-1 text-sm rounded shadow-lg overflow-y-auto',
            variant === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 border border-gray-200',
            className
          )}
          style={{ maxWidth: '300px', maxHeight: '150px' }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
