import { ReactNode } from 'react';
import { avatarVariants } from './avatarVariants';
import { VariantProps } from 'class-variance-authority';

/**
 * Props interface for the Avatar component.
 * @interface
 * @property {ReactNode} children - The content to be rendered inside the Avatar.
 * @property {string} [className] - Optional CSS class name(s) to apply to the Avatar component.
 */
interface AvatarProps {
  children: ReactNode;
  className?: string;
}

/**
 * Props interface for Avatar image component.
 * Extends both React's native image attributes and variant props from the avatar variants.
 *
 * @interface AvatarImageProps
 * @extends {React.ImgHTMLAttributes<HTMLImageElement>}
 * @extends {VariantProps<typeof avatarVariants>}
 *
 * @property {string} src - The source URL of the avatar image
 * @property {string} [alt] - Alternative text for the avatar image
 */
interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, VariantProps<typeof avatarVariants> {
  src: string;
  alt?: string;
}

/**
 * Props for the AvatarFallback component.
 * @interface AvatarFallbackProps
 * @extends {VariantProps<typeof avatarVariants>}
 * @property {ReactNode} children - The content to be rendered inside the avatar fallback
 * @property {string} [className] - Optional CSS class name to be applied to the avatar fallback
 */
interface AvatarFallbackProps extends VariantProps<typeof avatarVariants> {
  children: ReactNode;
  className?: string;
}

export type { AvatarProps, AvatarImageProps, AvatarFallbackProps };
