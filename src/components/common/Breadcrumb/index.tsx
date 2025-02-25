import React, { CSSProperties, forwardRef, ReactNode } from 'react';
import { ChevronRight, ArrowRight, Dot, Slash, Circle } from 'lucide-react';
import Box, { BoxProps } from '../Box';
import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import Link from '../Link';

const breadcrumbVariants = cva('inline-flex items-center font-semibold  transition-colors duration-200', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type SeparatorType = 'chevron' | 'arrow' | 'dot' | 'slash' | 'circle';

interface BreadcrumbProps extends VariantProps<typeof breadcrumbVariants>, BoxProps {
  children: ReactNode;
  separator?: ReactNode | SeparatorType;
  className?: string;
  style?: CSSProperties;
}

interface BreadcrumbItemProps {
  to?: string;
  active?: boolean;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const SEPARATOR_ICONS = {
  chevron: <ChevronRight className="size-4 mx-2 text-muted-foreground" />,
  arrow: <ArrowRight className="size-4 mx-2 text-muted-foreground" />,
  dot: <Dot className="size-4 mx-2 text-muted-foreground" />,
  slash: <Slash className="size-4 mx-2 text-muted-foreground" />,
  circle: <Circle className="size-2 mx-2 text-muted-foreground" />,
};

/**
 * Enhanced Breadcrumb component with multiple separator options.
 *
 * @component
 * @param {React.ReactNode} children - The breadcrumb items to be displayed.
 * @param {React.ReactNode | SeparatorType} [separator='chevron'] - The separator type or custom element between breadcrumb items.
 * @param {string} [size] - The size variant of the breadcrumb items.
 * @param {string} [className] - Additional class names to apply to the breadcrumb container.
 * @param {React.CSSProperties} [style] - Inline styles to apply to the breadcrumb container.
 * @param {React.Ref<HTMLDivElement>} ref - Ref to be forwarded to the breadcrumb container.
 *
 * @example
 * <Breadcrumb separator="slash">
 *   <BreadcrumbItem to="/">Home</BreadcrumbItem>
 *   <BreadcrumbItem to="/about">About</BreadcrumbItem>
 *   <BreadcrumbItem active>Current Page</BreadcrumbItem>
 * </Breadcrumb>
 */
const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ children, separator = 'chevron', size, className, style, ...rest }, ref) => {
    const getSeparator = () => {
      if (typeof separator === 'string' && separator in SEPARATOR_ICONS) {
        return SEPARATOR_ICONS[separator as SeparatorType];
      }
      return separator;
    };

    return (
      <Box aria-label="breadcrumb" className={cn('flex items-center', className)} style={style} ref={ref} {...rest}>
        <ol className="flex items-center">
          {React.Children.map(children, (child, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && getSeparator()}
              {React.cloneElement(child as React.ReactElement, {
                className: cn(
                  'text-sm font-medium',
                  size === 'sm' && 'text-xs',
                  size === 'lg' && 'text-base',
                  (child as React.ReactElement).props.className || ''
                ),
              })}
            </li>
          ))}
        </ol>
      </Box>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

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
const BreadcrumbItem = forwardRef<HTMLSpanElement | HTMLAnchorElement, BreadcrumbItemProps>(
  ({ to, active, children, className, style, ...rest }, ref) => {
    const itemClasses = active
      ? 'font-bold text-foreground'
      : 'text-muted-foreground font-semibold hover:text-gray-700';

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

export default Object.assign(
  Breadcrumb as React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLDivElement>>,
  { Item: BreadcrumbItem }
);

export { BreadcrumbItem, breadcrumbVariants };
export type { BreadcrumbProps, BreadcrumbItemProps, SeparatorType };
