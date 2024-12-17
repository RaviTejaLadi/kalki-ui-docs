import React, { forwardRef } from 'react';
import { cn } from '@/utils';
import Link from '../Link/Link';
import { BreadcrumbItemProps } from './types';

/**
 * `BreadcrumbItem` is a component that renders a breadcrumb item, which can be either an active span element or a link.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.to] - The URL to navigate to when the breadcrumb item is clicked. If the item is active, this prop is ignored.
 * @param {boolean} props.active - Indicates whether the breadcrumb item is the currently active item.
 * @param {React.ReactNode} props.children - The content to be displayed inside the breadcrumb item.
 * @param {string} [props.className] - Additional CSS classes to apply to the breadcrumb item.
 * @param {React.CSSProperties} [props.style] - Inline styles to apply to the breadcrumb item.
 * @param {React.Ref<HTMLSpanElement | HTMLAnchorElement>} ref - The ref to be forwarded to the underlying element.
 * @param {Object} rest - Any additional props to be spread onto the underlying element.
 * 
 * @returns {JSX.Element} A breadcrumb item, which is either a span element if active, or a link if not active.
 */
export const BreadcrumbItem = forwardRef<HTMLSpanElement | HTMLAnchorElement, BreadcrumbItemProps>(
  ({ to, active, children, className, style, ...rest }, ref) => {
    const itemClasses = active ? 'font-bold text-black' : 'text-gray-500 font-semibold hover:text-gray-700';

    if (active) {
      return (
        <span
          ref={ref as React.Ref<HTMLSpanElement>}
          className={cn(itemClasses, className)}
          style={style}
          aria-current="page"
          {...rest}
        >
          {children}
        </span>
      );
    }

    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        to={to || '#'}
        className={cn(itemClasses, className)}
        style={style}
        {...rest}
      >
        {children}
      </Link>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';
