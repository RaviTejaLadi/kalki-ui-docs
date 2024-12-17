import { VariantProps } from 'class-variance-authority';
import { bannerVariants } from './bannerVariants';
import { CSSProperties, ReactNode } from 'react';

/**
 * Represents the size of a banner.
 * 
 * This type is derived from the `size` property of the `bannerVariants` object,
 * ensuring that the size is non-nullable.
 * 
 * @typedef {BannerSize}
 */
type BannerSize = NonNullable<VariantProps<typeof bannerVariants>['size']>;

/**
 * A mapping of banner sizes to their corresponding CSS text size classes.
 * 
 * @type {Record<BannerSize, string>}
 * 
 * @property {string} sm - Corresponds to 'text-lg' for small banners.
 * @property {string} md - Corresponds to 'text-xl' for medium banners.
 * @property {string} lg - Corresponds to 'text-2xl' for large banners.
 * @property {string} xl - Corresponds to 'text-3xl' for extra-large banners.
 * @property {string} '2xl' - Corresponds to 'text-4xl' for double extra-large banners.
 * @property {string} '3xl' - Corresponds to 'text-5xl' for triple extra-large banners.
 */
export const titleSizes: Record<BannerSize, string> = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl',
  '2xl': 'text-4xl',
  '3xl': 'text-5xl',
};

/**
 * A mapping of banner sizes to their corresponding subtitle text size classes.
 * 
 * @type {Record<BannerSize, string>}
 * 
 * @property {string} sm - The CSS class for small subtitle text size.
 * @property {string} md - The CSS class for medium subtitle text size.
 * @property {string} lg - The CSS class for large subtitle text size.
 * @property {string} xl - The CSS class for extra-large subtitle text size.
 * @property {string} '2xl' - The CSS class for 2x extra-large subtitle text size.
 * @property {string} '3xl' - The CSS class for 3x extra-large subtitle text size.
 */
export const subtitleSizes: Record<BannerSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-lg',
  '2xl': 'text-xl',
  '3xl': 'text-2xl',
};

/**
 * Props for the Banner component.
 * 
 * @interface BannerProps
 * @extends {VariantProps<typeof bannerVariants>}
 * 
 * @property {ReactNode} children - The content to be displayed inside the banner.
 * @property {ReactNode} [controls] - Optional controls to be displayed within the banner.
 * @property {string} [className] - Optional additional CSS class names to apply to the banner.
 * @property {CSSProperties} [style] - Optional inline styles to apply to the banner.
 * @property {string} [background] - Optional background color or image for the banner.
 */
interface BannerProps extends VariantProps<typeof bannerVariants> {
  children: ReactNode;
  controls?: ReactNode;
  className?: string;
  style?: CSSProperties;
  background?: string;
}

/**
 * Props for the BannerChild component.
 *
 * @interface BannerChildProps
 * @property {ReactNode} children - The content to be displayed inside the banner.
 * @property {string} [className] - Optional CSS class name to apply to the banner.
 * @property {CSSProperties} [style] - Optional inline styles to apply to the banner.
 * @property {BannerSize} [size] - Optional size of the banner.
 */
interface BannerChildProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  size?: BannerSize;
}

export type { BannerProps, BannerChildProps };
