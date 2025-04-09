import React, { forwardRef, PropsWithChildren, ReactNode } from 'react';
import DotSeparator from '../DotSeparator';
import Link, { LinkProps } from '../Link';

// #region types
interface SimpleFooterLinkProps extends LinkProps {
  to: string;
  children: ReactNode;
}
// #endregion

// #region SimpleFooter
const SimpleFooter = forwardRef<HTMLDivElement, PropsWithChildren>(({ children, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className="flex items-center justify-center space-x-2 px-3 pb-1 text-2xs text-muted-foreground xs:pb-0"
      {...rest}
    >
      {children}
    </div>
  );
});

SimpleFooter.displayName = 'SimpleFooter';

const SimpleFooterLink = forwardRef<HTMLAnchorElement, SimpleFooterLinkProps>(({ to, children, ...rest }, ref) => {
  return (
    <Link ref={ref} to={to} className="underline-offset-4 hover:text-primary hover:underline" {...rest}>
      {children}
    </Link>
  );
});
SimpleFooterLink.displayName = 'SimpleFooterLink';

// #endregion

// #region exports
export default Object.assign(
  SimpleFooter as React.ForwardRefExoticComponent<PropsWithChildren & React.RefAttributes<HTMLButtonElement>>,
  {
    Link: SimpleFooterLink,
    Separator: DotSeparator,
  }
);
export { SimpleFooterLink, DotSeparator };
export type { SimpleFooterLinkProps };
