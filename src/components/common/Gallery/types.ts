import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import { galleryVariants } from './galleryVariants';

/**
 * Props for the Gallery component.
 * 
 * @extends VariantProps<typeof galleryVariants>
 * 
 * @property {ReactNode} children - The content to be displayed within the gallery.
 * @property {string} [className] - Optional additional class name(s) to apply to the gallery component.
 */
interface GalleryProps extends VariantProps<typeof galleryVariants> {
  children: ReactNode;
  className?: string;
}

export type { GalleryProps };
