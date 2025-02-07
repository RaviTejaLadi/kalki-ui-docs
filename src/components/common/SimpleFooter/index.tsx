import React, { forwardRef, ReactNode } from 'react';
import DotSeparator from '../DotSeparator';
import Link from '../Link';
import { LinkProps } from '../Link/Link';

interface SimpleFooterProps {
  children: ReactNode;
}
const SimpleFooter = forwardRef<HTMLDivElement, SimpleFooterProps>(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="flex items-center justify-center space-x-2 px-3 pb-1 text-2xs text-muted-foreground xs:pb-0"
    >
      {children}
    </div>
  );
});

SimpleFooter.displayName = 'SimpleFooter';

interface SimpleFooterLinkProps extends LinkProps {
  to: string;
  children: ReactNode;
}

const SimpleFooterLink = forwardRef<HTMLAnchorElement, SimpleFooterLinkProps>(({ to, children }, ref) => {
  return (
    <Link ref={ref} to={to} className="underline-offset-4 hover:text-primary hover:underline">
      {children}
    </Link>
  );
});
SimpleFooterLink.displayName = 'SimpleFooterLink';

export default Object.assign(
  SimpleFooter as React.ForwardRefExoticComponent<SimpleFooterProps & React.RefAttributes<HTMLButtonElement>>,
  {
    Link: SimpleFooterLink,
    Separator: DotSeparator,
  }
);
export { SimpleFooterLink, DotSeparator };
export type { SimpleFooterProps, SimpleFooterLinkProps };
