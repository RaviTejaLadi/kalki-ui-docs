import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

// #region buttonVariants
const buttonVariants = cva(
  'inline-flex justify-center items-center font-normal text-center whitespace-nowrap align-middle select-none transition-colors duration-150 ease-in-out focus:outline-none disabled:pointer-events-none disabled:opacity-50 transition-all duration-200 hover:scale-105',
  {
    variants: {
      variant: {
        primary:
          'bg-primary hover:bg-primary/90 border-primary text-primary-foreground focus:ring-2 focus:ring-ring/40',
        secondary: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground focus:ring-2 focus:ring-ring/30',
        success: 'bg-success hover:bg-success/90 text-success-foreground focus:ring-2 focus:ring-success/40',
        danger: 'bg-danger hover:bg-danger/90 text-danger-foreground focus:ring-2 focus:ring-danger/40',
        warning: 'bg-warning hover:bg-warning/90 text-warning-foreground focus:ring-2 focus:ring-warning/40',
        info: 'bg-info hover:bg-info/90 text-info-foreground focus:ring-2 focus:ring-info/40',
        help: 'bg-help hover:bg-help/90 text-help-foreground focus:ring-2 focus:ring-help/40',
        light: 'bg-light hover:bg-muted text-light-foreground focus:ring-2 focus:ring-ring/30',
        dark: 'bg-dark hover:bg-dark/90 text-dark-foreground focus:ring-2 focus:ring-ring/40',
        outline: 'border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
        ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary hover:underline underline-offset-4',
      },
      size: {
        xs: 'text-xs h-7 py-[0.5px] px-2',
        sm: 'text-sm h-8 py-1 px-2',
        md: 'text-base h-9 py-2 px-4',
        lg: 'text-lg h-10 py-2 px-4',
        xl: 'text-xl h-11 py-3 px-6',
        '2xl': 'text-2xl h-12 py-3 px-6',
        '3xl': 'text-3xl h-13 py-4 px-7',
      },
      raised: {
        true: 'shadow-md dark:shadow-gray-900',
        false: '',
      },
      rounded: {
        true: 'rounded-full',
        false: 'rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
      raised: false,
      rounded: false,
    },
  }
);
// #endregion

// #region types
/**
 * Props for the Button component.
 *
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 * @extends VariantProps<typeof buttonVariants>
 *
 * @property {boolean} [disabled] - Indicates whether the button is disabled.
 * @property {() => void} [onClick] - Function to handle the button click event.
 * @property {ReactNode} children - The content to be displayed inside the button.
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  loader?: ReactNode;
  isPending?: boolean;
  isPendingText?: string;
}

/**
 * Props for the ButtonIcon component.
 *
 * @interface ButtonIconProps
 * @property {ReactNode} children - The content to be displayed inside the button.
 * @property {string} [className] - Optional additional CSS class names to apply to the button.
 */
interface ButtonIconProps {
  children: ReactNode;
  className?: string;
}

/**
 * Props for the ButtonText component.
 *
 * @interface ButtonTextProps
 * @property {ReactNode} children - The content to be displayed inside the button.
 * @property {string} [className] - Optional additional CSS class names to apply to the button.
 */
interface ButtonTextProps {
  children: ReactNode;
  className?: string;
}

// #endregion

// #region Button
/**
 * A customizable button component.
 *
 * @component
 * @param {boolean} [disabled=false] - If true, the button will be disabled.
 * @param {() => void} [onClick=() => {}] - Function to call when the button is clicked.
 * @param {string} variant - The variant of the button (e.g., 'primary', 'secondary').
 * @param {string} size - The size of the button (e.g., 'small', 'medium', 'large').
 * @param {boolean} raised - If true, the button will have a raised appearance.
 * @param {boolean} rounded - If true, the button will have rounded corners.
 * @param {string} [className=''] - Additional CSS classes to apply to the button.
 * @param {React.CSSProperties} [style={}] - Inline styles to apply to the button.
 * @param {React.ReactNode} children - The content to display inside the button.
 * @param {React.Ref<HTMLButtonElement>} ref - A ref to the button element.
 * @param {object} rest - Additional props to spread onto the button element.
 *
 * @returns {JSX.Element} The rendered button component.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled = false,
      onClick = undefined,
      variant,
      size,
      raised,
      rounded,
      className = '',
      style = {},
      children,
      loader,
      isPending = false,
      isPendingText = 'Loading...',
      ...rest
    },
    ref
  ) => {
    const buttonClasses = buttonVariants({
      variant,
      size,
      raised,
      rounded,
    });

    return (
      <button
        className={cn(buttonClasses, className)}
        style={style}
        onClick={onClick}
        disabled={disabled || isPending}
        ref={ref}
        {...rest}
      >
        {isPending ? (
          <span className="flex gap-2 items-center justify-center">
            {loader || <Loader2 className="size-3 animate-spin" />}
            <span>{isPendingText}</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

/**
 * `ButtonText` is a React functional component that renders a span element with
 * the provided children and class names. It uses `forwardRef` to pass down the ref
 * to the span element.
 *
 * @param {ButtonTextProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the span.
 * @param {string} [props.className] - Additional class names to apply to the span element.
 * @param {React.Ref<HTMLSpanElement>} ref - The ref to be forwarded to the span element.
 *
 * @returns {JSX.Element} The rendered span element with the provided children and class names.
 */
const ButtonText = forwardRef<HTMLSpanElement, ButtonTextProps>(({ children, className, ...rest }, ref) => {
  return (
    <span ref={ref} className={cn('inline-flex items-center', className)} {...rest}>
      {children}
    </span>
  );
});

ButtonText.displayName = 'ButtonText';

/**
 * `ButtonIcon` is a React functional component that renders a span element with
 * a specified class name and additional props. It uses `forwardRef` to pass down
 * the ref to the span element.
 *
 * @param {ButtonIconProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the span element.
 * @param {string} [props.className] - Additional class names to apply to the span element.
 * @param {React.Ref<HTMLSpanElement>} ref - The reference to the span element.
 *
 * @returns {JSX.Element} The rendered span element with the specified properties.
 */
const ButtonIcon = forwardRef<HTMLSpanElement, ButtonIconProps>(({ children, className, ...rest }, ref) => {
  return (
    <span ref={ref} className={cn('inline-flex items-center mx-1', className)} {...rest}>
      {children}
    </span>
  );
});

ButtonIcon.displayName = 'ButtonIcon';
// #endregion

// #region exports
export default Object.assign(
  Button as React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>,
  {
    Icon: ButtonIcon,
    Text: ButtonText,
  }
);

export { ButtonIcon, ButtonText, buttonVariants };
export type { ButtonProps, ButtonIconProps, ButtonTextProps };
// #endregion
