import { VariantProps } from 'class-variance-authority';
import { linkBarVariants } from './linkBarVariants';

export interface LinkBarContextValue {
  activeUrl?: string;
  onUrlChange?: (url: string) => void;
  scrollRef?: React.RefObject<HTMLDivElement>;
}

export interface LinkBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof linkBarVariants> {
  activeUrl?: string;
  onUrlChange?: (url: string) => void;
}

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'ref'> {
  to: string;
  icon?: React.ReactNode;
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
  children: React.ReactNode;
  className?: string;
}
