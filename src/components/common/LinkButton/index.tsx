import React, { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import Link from '../Link';
import { cn } from '@/utils';

// #region linkVariants
export const linkVariants = cva(
  'inline-flex justify-center items-center font-normal text-center whitespace-nowrap align-middle select-none transition-colors duration-150 ease-in-out focus:outline-none',
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
        false: 'rounded',
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
// #endregion linkVariants

// #region types
interface LinkButtonProps extends VariantProps<typeof linkVariants> {
  to?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface LinkIconProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface LinkTextProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
// #endregion types

// #region LinkButton Component
const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ variant, size, to = '', children, className, raised, rounded, ...rest }, ref) => {
    return (
      <Link ref={ref} to={to} className={linkVariants({ variant, size, raised, rounded, className })} {...rest}>
        {children}
      </Link>
    );
  }
);
LinkButton.displayName = 'LinkButton';

// LinkIcon Component
const LinkIcon = forwardRef<HTMLDivElement, LinkIconProps>(({ children, className, style, ...rest }, ref) => (
  <div ref={ref} className={cn('flex items-center mx-1', className)} style={style} {...rest}>
    {children}
  </div>
));
LinkIcon.displayName = 'LinkIcon';

// LinkText Component
const LinkText = forwardRef<HTMLDivElement, LinkTextProps>(({ children, className, style, ...rest }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} style={style} {...rest}>
    {children}
  </div>
));
LinkText.displayName = 'LinkText';
// #endregion LinkButton Component

// #region Export Components and Types
export default Object.assign(
  LinkButton as React.ForwardRefExoticComponent<LinkButtonProps & React.RefAttributes<HTMLAnchorElement>>,
  {
    Icon: LinkIcon,
    Text: LinkText,
  }
);

export { LinkIcon, LinkText };
export type { LinkButtonProps, LinkIconProps, LinkTextProps };
// #endregion Export Components and Types
