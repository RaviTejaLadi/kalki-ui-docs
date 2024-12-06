import { forwardRef } from 'react';
import { cn } from '@/utils';

export const BadgeIcon = forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...rest }, ref) => (
  <span ref={ref} className={cn(className)} {...rest} />
));

BadgeIcon.displayName = 'BadgeIcon';
