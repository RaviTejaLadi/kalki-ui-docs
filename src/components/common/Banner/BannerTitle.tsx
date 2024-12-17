import { cn } from '@/utils';
import { BannerChildProps, titleSizes } from './types';
import React from 'react';

/**
 * `BannerTitle` is a React component that renders a heading element (`<h2>`) with customizable styles and size.
 * It uses `React.forwardRef` to pass a ref to the underlying `<h2>` element.
 *
 * @param {BannerChildProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the heading element.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the heading element.
 * @param {React.CSSProperties} [props.style] - Inline styles to apply to the heading element.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - The size of the heading element, which determines the font size.
 * @param {React.Ref<HTMLHeadingElement>} ref - The ref to be forwarded to the `<h2>` element.
 *
 * @returns {JSX.Element} The rendered heading element.
 */
const BannerTitle = React.forwardRef<HTMLHeadingElement, BannerChildProps>(
  ({ children, className = '', style, size = 'md' }, ref) => (
    <h2 ref={ref} className={cn('font-semibold', titleSizes[size], className)} style={style}>
      {children}
    </h2>
  )
);

BannerTitle.displayName = 'BannerTitle';

export default BannerTitle;
