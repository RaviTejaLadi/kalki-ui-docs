import { forwardRef, AnchorHTMLAttributes, HTMLAttributeReferrerPolicy, MouseEventHandler, ReactNode } from 'react';
import { cn } from '@/utils';
import { linkVariants } from './linkVariants';

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target'> {
  to: string;
  children: ReactNode;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  download?: boolean | string;
  hrefLang?: string;
  ping?: string;
  referrerPolicy?: HTMLAttributeReferrerPolicy;
  type?: string;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, children, target, rel, className, onClick, download, hrefLang, ping, referrerPolicy, type, ...rest }, ref) => {
    const isExternal = /^(https?:\/\/|mailto:|tel:)/.test(to);

    const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
      if (onClick) {
        onClick(event);
      }

      if (!event.defaultPrevented && !isExternal) {
        event.preventDefault();
        window.history.pushState({}, '', to);
        window.dispatchEvent(new Event('popstate'));
      }
    };

    return (
      <a
        href={to}
        ref={ref}
        target={target}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        className={cn(linkVariants(), className)}
        onClick={handleClick}
        download={download}
        hrefLang={hrefLang}
        ping={ping}
        referrerPolicy={referrerPolicy}
        type={type}
        {...rest}
      >
        {children}
      </a>
    );
  }
);

export default Link;
