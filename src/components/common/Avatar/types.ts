import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { avatarVariants } from './avatarVariants';

type AvatarContextType = VariantProps<typeof avatarVariants> & {
  hasError?: boolean;
  onError?: () => void;
};

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  className?: string;
  children: React.ReactNode;
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

interface AvatarFallbackProps {
  className?: string;
  children: React.ReactNode;
}

export type { AvatarContextType, AvatarProps, AvatarImageProps, AvatarFallbackProps };
