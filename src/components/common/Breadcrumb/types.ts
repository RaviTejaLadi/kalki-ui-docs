import { VariantProps } from 'class-variance-authority';
import { CSSProperties, ReactNode } from 'react';
import { breadcrumbVariants } from './breadcrumbVariants';

/**
 * Props for the Breadcrumb component.
 *
 * @extends VariantProps<typeof breadcrumbVariants>
 *
 * @property {ReactNode} children - The breadcrumb items to be displayed.
 * @property {ReactNode} [separator] - Optional separator element between breadcrumb items.
 * @property {string} [className] - Optional additional CSS class names to apply to the breadcrumb.
 * @property {CSSProperties} [style] - Optional inline styles to apply to the breadcrumb.
 */
interface BreadcrumbProps extends VariantProps<typeof breadcrumbVariants> {
  children: ReactNode;
  separator?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Props for a BreadcrumbItem component.
 *
 * @interface BreadcrumbItemProps
 *
 * @property {string} [to] - The URL or path the breadcrumb item links to. Optional.
 * @property {boolean} [active] - Indicates if the breadcrumb item is the currently active one. Optional.
 * @property {ReactNode} children - The content to be displayed within the breadcrumb item.
 * @property {string} [className] - Additional CSS class names to apply to the breadcrumb item. Optional.
 * @property {CSSProperties} [style] - Inline styles to apply to the breadcrumb item. Optional.
 */
interface BreadcrumbItemProps {
  to?: string;
  active?: boolean;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export { type BreadcrumbProps, type BreadcrumbItemProps };
