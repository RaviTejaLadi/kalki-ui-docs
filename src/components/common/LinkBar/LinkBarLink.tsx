import { forwardRef, MouseEvent, useContext } from 'react';
import Link from '../Link/Link';
import { LinkProps } from './interface';
import { LinkBarContext } from './context';
import { linkVariants } from './linkVariants';
import { cn } from '@/utils';

export const LinkBarLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, children, icon, iconPosition = 'start', className, onClick, target, ...props }, ref) => {
    const { activeUrl, onUrlChange } = useContext(LinkBarContext);

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      onUrlChange?.(to);
    };

    const isActive = activeUrl === to;

    return (
      <Link
        ref={ref}
        to={to}
        target={target}
        className={cn(
          linkVariants({
            variant: isActive ? 'active' : 'default',
          }),
          'h-7',
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {icon && iconPosition === 'start' && <span className="mr-1.5 flex items-center">{icon}</span>}
        <span className="whitespace-nowrap">{children}</span>
        {icon && iconPosition === 'end' && <span className="ml-1.5 flex items-center">{icon}</span>}
      </Link>
    );
  }
);
LinkBarLink.displayName = 'LinkBar.Link';
