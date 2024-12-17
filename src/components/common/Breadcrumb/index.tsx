import React, { forwardRef } from 'react';
import { ChevronRight } from 'lucide-react';
import Box from '../Box';
import { BreadcrumbItem } from './BreadcrumbItem';
import { BreadcrumbProps } from './types';
import { breadcrumbVariants } from './breadcrumbVariants';
import { cn } from '@/utils';

/**
 * Breadcrumb component to display a breadcrumb navigation.
 *
 * @component
 * @param {React.ReactNode} children - The breadcrumb items to be displayed.
 * @param {React.ReactNode} [separator=<ChevronRight className="w-4 h-4 mx-2 text-gray-400" />] - The separator element between breadcrumb items.
 * @param {string} [size] - The size variant of the breadcrumb items.
 * @param {string} [className] - Additional class names to apply to the breadcrumb container.
 * @param {React.CSSProperties} [style] - Inline styles to apply to the breadcrumb container.
 * @param {React.Ref<HTMLDivElement>} ref - Ref to be forwarded to the breadcrumb container.
 * @param {object} rest - Additional props to be spread onto the breadcrumb container.
 *
 * @returns {JSX.Element} The rendered breadcrumb component.
 *
 * @example
 * <Breadcrumb>
 *   <BreadcrumbItem to="/">Home</BreadcrumbItem>
 *   <BreadcrumbItem to="/about">About</BreadcrumbItem>
 *   <BreadcrumbItem active>Current Page</BreadcrumbItem>
 * </Breadcrumb>
 */
const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  (
    { children, separator = <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />, size, className, style, ...rest },
    ref
  ) => {
    return (
      <Box aria-label="breadcrumb" className={cn('flex items-center', className)} style={style} ref={ref} {...rest}>
        <ol className="flex items-center">
          {React.Children.map(children, (child, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && separator}
              {React.cloneElement(child as React.ReactElement, {
                className: `${breadcrumbVariants({ size })} ${(child as React.ReactElement).props.className || ''}`,
              })}
            </li>
          ))}
        </ol>
      </Box>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

export default Object.assign(
  Breadcrumb as React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLDivElement>>,
  { Item: BreadcrumbItem }
);

export { BreadcrumbItem };
