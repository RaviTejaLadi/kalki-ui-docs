import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utils';
import { cva, type VariantProps } from 'class-variance-authority';

// #region badgeVariants
const badgeVariants = cva(
  'inline-flex gap-2 m-1 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-fit items-center font-bold text-center align-middle',
  {
    variants: {
      size: {
        sm: 'text-xs py-1 px-2 rounded-sm',
        md: 'text-sm py-1.5 px-3 rounded-md',
        lg: 'text-base py-2 px-4 rounded-lg',
      },
      variant: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        success: 'bg-success text-success-foreground',
        danger: 'bg-danger text-danger-foreground',
        warning: 'bg-warning text-warning-foreground',
        info: 'bg-info text-info-foreground',
        help: 'bg-help text-help-foreground',
        light: 'bg-light text-light-foreground',
        dark: 'bg-dark text-dark-foreground',
        outline: 'border border-border text-foreground',
      },
      pill: {
        true: 'rounded-full',
        false: '',
      },
    },
    defaultVariants: {
      size: 'sm',
      variant: 'primary',
      pill: false,
    },
  }
);

// #endregion

// #region types

interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

interface BadgeIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}
// #endregion

// #region Badge
const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ size, variant, pill, className, style, children, ...rest }, ref) => {
    return (
      <div className={cn(badgeVariants({ size, variant, pill }), className)} style={style} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

const BadgeIcon = forwardRef<HTMLSpanElement, BadgeIconProps>(({ className, ...rest }, ref) => (
  <span ref={ref} className={cn(className)} {...rest} />
));

BadgeIcon.displayName = 'BadgeIcon';

// #endregion

// #region exports
export default Object.assign(
  Badge as React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>,
  {
    Icon: BadgeIcon,
  }
);

export { BadgeIcon, badgeVariants };
export type { BadgeProps, BadgeIconProps };
// #endregion
