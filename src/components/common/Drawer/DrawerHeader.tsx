import { forwardRef } from 'react';
import { cn } from '@/utils';
import { DrawerHeaderProps } from './types';
import CloseButton from '../CloseButton';

/**
 * DrawerHeader component is a header section for a drawer component.
 * It displays children elements and an optional close button.
 *
 * @component
 * @param {DrawerHeaderProps} props - The properties for the DrawerHeader component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the header.
 * @param {boolean} props.closeButton - Flag to determine if the close button should be displayed.
 * @param {() => void} props.onClose - Callback function to handle the close button click event.
 * @param {string} [props.className] - Additional class names to apply to the header.
 * @param {string} [props.closeBtnSize='sm'] - Size of the close button, defaults to 'sm'.
 * @param {React.CSSProperties} [props.style] - Inline styles to apply to the header.
 * @param {React.Ref<HTMLDivElement>} ref - Ref to be forwarded to the header div element.
 * @param {object} rest - Additional props to be spread onto the header div element.
 *
 * @returns {JSX.Element} The rendered DrawerHeader component.
 */
export const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ children, closeButton, onClose, className, closeBtnSize = 'sm', style, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn('flex justify-between items-center px-4 py-2', className)} style={style} {...rest}>
        <div>{children}</div>
        {closeButton && <CloseButton size={closeBtnSize} onClick={onClose} />}
      </div>
    );
  }
);

DrawerHeader.displayName = 'DrawerHeader';
