import { forwardRef } from 'react';
import { NavMenuLinkProps } from './interface';
import { cn } from '@/utils';
import Link from '../Link';

export const NavMenuLink = forwardRef<HTMLAnchorElement, NavMenuLinkProps>(
  ({ children, to, className, target, ...props }, ref) => (
    <Link ref={ref} to={to} target={target || '_self'} className={cn(className)} {...props}>
      {children}
    </Link>
  )
);

NavMenuLink.displayName = 'NavMenuLink';
