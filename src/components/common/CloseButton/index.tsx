import { X } from 'lucide-react';
import { forwardRef } from 'react';
import { buttonVariants } from './buttonVariants';
import { CloseButtonProps } from './types';
import { cn } from '@/utils';

/**
 * `CloseButton` is a React forwardRef component that renders a customizable button with a close icon.
 *
 * @param {Object} props - The properties object.
 * @param {'light' | 'dark'} [props.variant='light'] - The variant of the button, which determines its styling.
 * @param {'sm' | 'md' | 'lg'} [props.size='sm'] - The size of the button, which affects the size of the icon.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {boolean} [props.disabled] - If true, the button will be disabled.
 * @param {string} [props.className] - Additional class names to apply to the button.
 * @param {React.CSSProperties} [props.style] - Inline styles to apply to the button.
 * @param {React.Ref<HTMLButtonElement>} ref - The ref to be forwarded to the button element.
 * @param {Object} rest - Additional props to be spread onto the button element.
 *
 * @returns {JSX.Element} The rendered button component.
 */
const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ variant = 'light', size = 'sm', onClick, disabled, className, style, ...rest }, ref) => {
    const iconSize = size === 'sm' ? 15 : size === 'md' ? 20 : 25;

    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        className={cn(buttonVariants({ variant, size }), className)}
        style={style}
        {...rest}
      >
        <X className="m-[-2px]" width={iconSize} height={iconSize} />
      </button>
    );
  }
);

CloseButton.displayName = 'CloseButton';

export default CloseButton;
