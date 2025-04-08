import React, { CSSProperties, ReactNode } from 'react';
import { ImageProps } from '../Image';

/**
 * Props for the Figure component.
 *
 * @interface FigureProps
 * @extends {React.HTMLAttributes<HTMLElement>}
 *
 * @property {ReactNode} children - The content to be displayed within the figure.
 * @property {string} [width] - The width of the figure.
 * @property {string} [height] - The height of the figure.
 * @property {string} [margin] - The margin around the figure.
 * @property {string} [className] - Additional CSS class names to apply to the figure.
 * @property {CSSProperties} [style] - Inline styles to apply to the figure.
 */
interface FigureProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  width?: string;
  height?: string;
  margin?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Props for the FigureImage component.
 *
 * @extends React.ImgHTMLAttributes<HTMLImageElement>
 *
 * @property {string} src - The source URL of the image.
 * @property {string} alt - The alternative text for the image.
 * @property {string} [className] - Optional CSS class name for the image.
 * @property {CSSProperties} [style] - Optional inline styles for the image.
 */
interface FigureImageProps extends ImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Props for the FigureCaption component.
 *
 * @interface FigureCaptionProps
 * @extends {React.HTMLAttributes<HTMLElement>}
 *
 * @property {ReactNode} children - The content of the caption.
 * @property {string} [className] - Optional CSS class name to apply to the caption.
 * @property {CSSProperties} [style] - Optional inline styles to apply to the caption.
 */
interface FigureCaptionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export type { FigureProps, FigureImageProps, FigureCaptionProps };
