import { forwardRef } from 'react';
import { cn } from '@/utils';
import { BannerChildProps, subtitleSizes } from './types';

/**
 * `BannerSubTitle` is a React functional component that renders a paragraph element
 * with customizable styles and class names. It uses `forwardRef` to pass a ref to the
 * underlying paragraph element.
 *
 * @param {BannerChildProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the paragraph.
 * @param {string} [props.className=''] - Additional class names to apply to the paragraph.
 * @param {React.CSSProperties} [props.style] - Inline styles to apply to the paragraph.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - The size of the subtitle, which determines the applied styles.
 * @param {React.Ref<HTMLParagraphElement>} ref - The ref to be forwarded to the paragraph element.
 *
 * @returns {JSX.Element} The rendered paragraph element with the specified properties.
 */
const BannerSubTitle = forwardRef<HTMLParagraphElement, BannerChildProps>(
  ({ children, className = '', style, size = 'md' }, ref) => (
    <p ref={ref} className={cn('mt-1', subtitleSizes[size], className)} style={style}>
      {children}
    </p>
  )
);

BannerSubTitle.displayName = 'BannerSubTitle';
export default BannerSubTitle;
