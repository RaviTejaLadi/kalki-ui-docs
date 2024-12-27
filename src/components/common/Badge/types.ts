import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import { badgeVariants } from './badgeVariants';

/**
 * Props for the Badge component.
 *
 * @extends HTMLAttributes<HTMLSpanElement>
 * @extends VariantProps<typeof badgeVariants>
 *
 * @property {React.ReactNode} children - The content to be displayed within the badge.
 */
interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

interface BadgeIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

export type { BadgeProps, BadgeIconProps };
