import { VariantProps } from 'class-variance-authority';
import { imageVariants } from './imageVariants';
import React from 'react';

type LoadingStrategy = 'lazy' | 'eager';
type ObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, VariantProps<typeof imageVariants> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  loading?: LoadingStrategy;
  objectFit?: ObjectFit;
  onLoad?: () => void;
  onError?: () => void;
  className?: string;
  imgClassName?: string;
  variant?: 'default' | 'rounded' | 'circle';
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export type { ImageProps, ObjectFit, LoadingStrategy };
