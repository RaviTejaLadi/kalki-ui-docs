import React, { forwardRef, CSSProperties } from 'react';
import { cn } from '@/utils';
import { bannerVariants } from './bannerVariants';
import type { BannerProps, BannerChildProps } from './types';
import BannerTitle from './BannerTitle';
import BannerSubTitle from './BannerSubTitle';

/**
 * `Banner` is a React forwardRef component that renders a customizable banner.
 * It supports different variants, sizes, and background styles.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the banner.
 * @param {string} variant - The variant of the banner, which determines its styling.
 * @param {string} [size="md"] - The size of the banner, default is "md".
 * @param {React.ReactNode} [controls] - Optional controls to be displayed in the banner.
 * @param {string} [className=''] - Additional class names to apply to the banner.
 * @param {React.CSSProperties} [style] - Inline styles to apply to the banner.
 * @param {string} [background] - Background style or URL for the banner.
 * @param {React.Ref<HTMLDivElement>} ref - Ref to be forwarded to the banner's root element.
 * @param {object} rest - Additional props to be spread onto the banner's root element.
 *
 * @returns {JSX.Element} The rendered banner component.
 */
const Banner = forwardRef<HTMLDivElement, BannerProps>(
  ({ children, variant, size = 'md', controls, className = '', style, background, ...rest }, ref) => {
    const bannerClasses = bannerVariants({ variant, size });

    const bannerStyle: CSSProperties = {
      ...style,
      ...(background && {
        background: background.match(/^(http|data:)/) ? `url(${background}) center/cover no-repeat` : background,
      }),
    };

    return (
      <div className={cn(bannerClasses, className, variant)} style={bannerStyle} ref={ref} {...rest}>
        <div className="flex-grow">
          {React.Children.map(children, (child) =>
            React.isValidElement(child) && (child.type === BannerTitle || child.type === BannerSubTitle)
              ? React.cloneElement(child, { ...child.props, size: size || 'md' })
              : child
          )}
        </div>
        {controls && <div className="flex items-center gap-2 mt-2 md:mt-0">{controls}</div>}
      </div>
    );
  }
);

Banner.displayName = 'Banner';

export default Object.assign(
  Banner as React.ForwardRefExoticComponent<BannerProps & React.RefAttributes<HTMLDivElement>>,
  {
    Title: BannerTitle,
    SubTitle: BannerSubTitle,
  }
);

export { BannerTitle, BannerSubTitle, BannerProps, BannerChildProps };
