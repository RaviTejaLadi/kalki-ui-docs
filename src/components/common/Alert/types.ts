import { CSSProperties, ReactNode } from 'react';
import { alertVariants } from './alertVariants';
import { VariantProps } from 'class-variance-authority';

/**
 * Properties for Alert component.
 * @interface AlertProps
 * @extends {VariantProps<typeof alertVariants>}
 * @property {ReactNode} children - The content to be displayed inside the alert.
 * @property {string} [className] - Optional CSS class name for custom styling.
 * @property {CSSProperties} [style] - Optional inline styles to apply to the alert.
 */
interface AlertProps extends VariantProps<typeof alertVariants> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Props interface for the Section component.
 *
 * @interface SectionProps
 * @property {ReactNode} children - The content to be rendered inside the section.
 * @property {string} [className] - Optional CSS class name to be applied to the section.
 * @property {CSSProperties} [style] - Optional inline styles to be applied to the section.
 */
interface SectionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export type { AlertProps, SectionProps };
