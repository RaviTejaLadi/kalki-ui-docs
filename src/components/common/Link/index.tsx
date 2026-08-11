import { forwardRef, AnchorHTMLAttributes, HTMLAttributeReferrerPolicy, MouseEventHandler, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cn } from '@/utils';
import { cva } from 'class-variance-authority';

// #region linkVariants
const linkVariants = cva('no-underline transition-colors duration-300', {
  variants: {
    variant: {
      default: 'text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
      subtle: 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

// #endregion linkVariants

// #region LinkProps
interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href'> {
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
// #endregion LinkProps

// #region Link
const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, children, target, rel, className, onClick, download, hrefLang, ping, referrerPolicy, type, ...rest }, ref) => {
    const isExternal = /^(https?:\/\/|mailto:|tel:)/.test(to);
    const resolvedRel = rel || (isExternal || target === '_blank' ? 'noopener noreferrer' : undefined);

    if (isExternal) {
      return (
        <a
          href={to}
          ref={ref}
          target={target}
          rel={resolvedRel}
          className={cn(linkVariants(), className)}
          onClick={onClick}
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

    return (
      <RouterLink
        to={to}
        ref={ref}
        target={target}
        rel={resolvedRel}
        className={cn(linkVariants(), className)}
        onClick={onClick}
        download={download}
        hrefLang={hrefLang}
        ping={ping}
        referrerPolicy={referrerPolicy}
        type={type}
        {...rest}
      >
        {children}
      </RouterLink>
    );
  }
);

Link.displayName = 'Link';
// #endregion Link
// #region Export
export default Link;
export { type LinkProps, linkVariants };
// #endregion Export
