import { forwardRef } from 'react';
import { cn } from '@/utils';

/**
 * `BadgeIcon` is a React functional component that renders a `<span>` element.
 * It uses `forwardRef` to pass down a ref to the `<span>` element.
 *
 * @param {React.HTMLAttributes<HTMLSpanElement>} props - The props for the component.
 * @param {string} [props.className] - Additional class names to apply to the `<span>` element.
 * @param {React.Ref<HTMLSpanElement>} ref - The ref to be forwarded to the `<span>` element.
 *
 * @returns {JSX.Element} A `<span>` element with the provided props and ref.
 */
export const BadgeIcon = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...rest }, ref) => <span ref={ref} className={cn(className)} {...rest} />
);

BadgeIcon.displayName = 'BadgeIcon';
