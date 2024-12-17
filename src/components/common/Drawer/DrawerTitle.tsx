import { forwardRef } from 'react';
import { cn } from '@/utils';
import { DrawerTitleProps } from './types';

/**
 * `DrawerTitle` is a React functional component that renders a div element
 * with a specified class name and style. It uses `forwardRef` to pass down
 * the ref to the div element.
 *
 * @param {React.PropsWithChildren<DrawerTitleProps>} props - The props for the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the div.
 * @param {string} [props.className] - Additional class names to apply to the div.
 * @param {React.CSSProperties} [props.style] - Inline styles to apply to the div.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the div element.
 *
 * @returns {JSX.Element} The rendered div element with the specified props.
 */
export const DrawerTitle = forwardRef<HTMLDivElement, DrawerTitleProps>(
  ({ children, className, style, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn('text-xl font-semibold', className)} style={style} {...rest}>
        {children}
      </div>
    );
  }
);

DrawerTitle.displayName = 'DrawerTitle';
