import React, { forwardRef } from 'react';
import { alertVariants } from './alertVariants';
import { AlertHeader } from './components/AlertHeader';
import { AlertBody } from './components/AlertBody';
import { AlertFooter } from './components/AlertFooter';
import type { AlertProps, SectionProps } from './types';
/**
 * A customizable alert component that displays a message with different visual variants.
 *
 * @component
 * @param {object} props - The component props
 * @param {AlertVariant} [props.variant] - The visual style variant of the alert
 * @param {ReactNode} props.children - The content to be displayed inside the alert
 * @param {string} [props.className] - Additional CSS class names to be applied
 * @param {CSSProperties} [props.style] - Inline styles to be applied to the alert
 * @param {Ref<HTMLDivElement>} ref - React ref forwarded to the underlying div element
 *
 * @example
 * ```tsx
 * <Alert variant="success">
 *   Operation completed successfully!
 * </Alert>
 * ```
 */
const Alert = forwardRef<HTMLDivElement, AlertProps>(({ variant, children, className, style, ...rest }, ref) => {
  return (
    <div className={alertVariants({ variant, className })} ref={ref} style={style} {...rest}>
      {children}
    </div>
  );
});

Alert.displayName = 'Alert';

export default Object.assign(
  Alert as React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLButtonElement>>,
  {
    Header: AlertHeader,
    Body: AlertBody,
    Footer: AlertFooter,
  }
);

export { AlertBody, AlertHeader, AlertFooter, AlertProps, SectionProps };
