import React, { forwardRef } from 'react';
import { cn } from '@/utils';
import { badgeVariants } from './badgeVariants';
import { BadgeProps } from './types';
import { BadgeIcon } from './BadgeIcon';

/**
 * `Badge` is a React functional component that renders a styled `<span>` element.
 * It uses `forwardRef` to pass down a ref to the `<span>` element.
 *
 * @param {BadgeProps} props - The properties passed to the component.
 * @param {string} props.size - The size of the badge.
 * @param {string} props.variant - The variant of the badge.
 * @param {boolean} props.pill - If true, the badge will have a pill shape.
 * @param {string} [props.className] - Additional class names to apply to the badge.
 * @param {React.CSSProperties} [props.style] - Inline styles to apply to the badge.
 * @param {React.ReactNode} props.children - The content to be displayed inside the badge.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the `<span>` element.
 * @param {object} rest - Any additional props to be passed to the `<span>` element.
 *
 * @returns {JSX.Element} The rendered badge component.
 */
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

export default Object.assign(
  Badge as React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>,
  {
    Icon: BadgeIcon,
  }
);

export { BadgeIcon };
