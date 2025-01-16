import { VariantProps } from 'class-variance-authority';
import { linkBarVariants } from './linkBarVariants';
import { AnchorHTMLAttributes, HTMLAttributes, ReactNode, RefObject } from 'react';

export interface LinkBarContextValue {
  activeUrl?: string;
  onUrlChange?: (url: string) => void;
  scrollRef?: RefObject<HTMLDivElement>;
}

export interface LinkBarProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof linkBarVariants> {
  activeUrl?: string;
  onUrlChange?: (url: string) => void;
}

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'ref'> {
  to: string;
  icon?: ReactNode;
  iconPosition?: 'start' | 'end';
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export interface ControlsProps {
  position: 'left' | 'right';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?:
    | 'ghost'
    | 'outline'
    | 'link'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'help'
    | 'light'
    | 'dark';
}

export interface LinkBarContentProps {
  children: ReactNode;
  className?: string;
}
