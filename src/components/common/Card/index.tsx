import { cn } from '@/utils';
import * as React from 'react';
// #region types
type CardProps = React.PropsWithChildren<React.ComponentProps<'div'>>;
// #endregion types

/**
 * `Card` is a React functional component that renders a styled div element.
 * It uses `React.forwardRef` to forward a ref to the underlying div element.
 *
 * @param {CardProps} props - The properties passed to the component.
 * @param {string} [props.className] - Additional class names to apply to the card.
 * @param {React.ReactNode} props.children - The content to be rendered inside the card.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the div element.
 *
 * @returns {JSX.Element} A styled div element containing the children.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border bg-card dark:bg-card/10 dark:border-gray-200/10 text-card-foreground shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
Card.displayName = 'Card';

/**
 * `CardHeader` is a React component that renders a `div` element with a flexible layout.
 * It uses `React.forwardRef` to pass a ref to the `div` element.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The HTML attributes to be passed to the `div` element.
 * @param {string} [props.className] - Additional class names to be applied to the `div` element.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the `div` element.
 *
 * @returns {JSX.Element} A `div` element with the specified class names and props.
 */
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-4', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

/**
 * `CardTitle` is a React component that renders a `div` element with a set of predefined
 * class names for styling. It uses `React.forwardRef` to forward the ref to the `div` element.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the `div` element.
 * @param {string} [props.className] - Additional class names to apply to the `div` element.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the `div` element.
 *
 * @returns {JSX.Element} The rendered `div` element with the specified class names and props.
 */
const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

/**
 * `CardDescription` is a React functional component that renders a `div` element with a forwarded ref.
 * It accepts all standard HTML attributes for a `div` element and an optional `className` prop.
 * The component applies default styling classes and merges them with any additional classes provided via the `className` prop.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the `div` element.
 * @param {string} [props.className] - Additional class names to apply to the `div` element.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the `div` element.
 * @returns {JSX.Element} The rendered `div` element with the applied classes and forwarded ref.
 */
const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

/**
 * `CardContent` is a React functional component that forwards its ref to a `div` element.
 * It accepts all standard HTML `div` attributes and an optional `className` prop.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the `div` element.
 * @param {string} [props.className] - Additional class names to apply to the `div` element.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the `div` element.
 *
 * @returns {JSX.Element} A `div` element with the specified props and forwarded ref.
 */
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('p-4 pt-0 text-sm', className)} {...props} />
);
CardContent.displayName = 'CardContent';

/**
 * `CardFooter` is a React functional component that renders a `div` element with a set of default
 * class names and any additional class names passed via the `className` prop. It also forwards a ref
 * to the `div` element.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the `div` element.
 * @param {string} [props.className] - Additional class names to apply to the `div` element.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the `div` element.
 *
 * @returns {JSX.Element} The rendered `div` element with the specified props and class names.
 */
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex text-sm text-muted-foreground items-center p-4 pt-0', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export default Object.assign(Card as React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>, {
  Header: CardHeader,
  Footer: CardFooter,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
});

export { CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
export type { CardProps };
