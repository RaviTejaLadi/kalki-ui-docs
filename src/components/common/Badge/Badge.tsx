import React, { forwardRef } from 'react';
import { cn } from '@/utils';
import { badgeVariants } from './badgeVariants';
import { BadgeProps } from './interfaces';
import { BadgeIcon } from './BadgeIcon';

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ size, variant, pill, className, style, children, ...rest }, ref) => {
    return (
      <span
        className={cn(badgeVariants({ size, variant, pill }), className)}
        style={style}
        ref={ref}
        {...rest}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Object.assign(
  Badge as React.ForwardRefExoticComponent<
    BadgeProps & React.RefAttributes<HTMLSpanElement>
  >,
  {
    Icon: BadgeIcon,
  }
);

export { BadgeIcon };
