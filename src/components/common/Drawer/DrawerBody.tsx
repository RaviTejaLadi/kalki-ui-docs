import { forwardRef } from 'react';
import { cn } from '@/utils';
import { DrawerBodyProps } from './types';

/**
 * `DrawerBody` is a React functional component that renders a `div` element with
 * customizable class names, styles, and additional properties. It uses `forwardRef`
 * to pass a ref to the `div` element.
 *
 * @param {React.PropsWithChildren<DrawerBodyProps>} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the `div`.
 * @param {string} [props.className] - Additional class names to apply to the `div`.
 * @param {React.CSSProperties} [props.style] - Inline styles to apply to the `div`.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the `div` element.
 * @returns {JSX.Element} The rendered `div` element with the provided properties.
 */
export const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ children, className, style, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn('px-4 py-2', className)} style={style} {...rest}>
        {children}
      </div>
    );
  }
);
