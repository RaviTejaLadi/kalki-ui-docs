import { X } from 'lucide-react';
import React, { forwardRef } from 'react';
import { cn } from '@/utils';
import { cva } from 'class-variance-authority';

// #region buttonVariants
const buttonVariants = cva(
  'flex items-center justify-center rounded transition ease-in-out duration-150 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        light: [
          'bg-white dark:bg-gray-800',
          'border-gray-100 dark:border-gray-700',
          'hover:bg-gray-100 dark:hover:bg-gray-700',
          'text-gray-900 dark:text-gray-100',
        ],
        dark: [
          'bg-gray-900 dark:bg-gray-950',
          'border-gray-700 dark:border-gray-800',
          'hover:bg-gray-800 dark:hover:bg-gray-900',
          'text-white',
        ],
      },
      size: {
        xs: 'w-4 h-4 p-[1px] rounded-sm',
        sm: 'w-6 h-6 p-1 rounded-md',
        md: 'w-8 h-8 p-2 rounded-md',
        lg: 'w-10 h-10 p-2 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'light',
      size: 'sm',
    },
  }
);

// #endregion

// #region types
/**
 * Props for the CloseButton component.
 *
 * @interface CloseButtonProps
 * @extends {React.ButtonHTMLAttributes<HTMLButtonElement>}
 *
 * @property {('light' | 'dark')} [variant] - The variant of the button, can be 'light' or 'dark'.
 * @property {('sm' | 'md' | 'lg')} [size] - The size of the button, can be 'sm', 'md', or 'lg'.
 * @property {() => void} [onClick] - Optional click handler for the button.
 * @property {boolean} [disabled] - Whether the button is disabled.
 * @property {string} [className] - Additional CSS class names to apply to the button.
 * @property {React.CSSProperties} [style] - Inline styles to apply to the button.
 */
interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'light' | 'dark';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// #endregion

// #region CloseButton
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
    const iconSize = size === 'xs' ? 13 : size === 'sm' ? 15 : size === 'md' ? 20 : 25;

    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        className={cn(buttonVariants({ variant, size }), className)}
        style={style}
        {...rest}
      >
        <X className="m-[-2px] text-foreground" width={iconSize} height={iconSize} />
      </button>
    );
  }
);

CloseButton.displayName = 'CloseButton';
// #endregion

// #region exports
export default CloseButton;
export { buttonVariants, type CloseButtonProps };
// #endregion
