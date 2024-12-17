import { VariantProps } from 'class-variance-authority';
import { tagVariants } from './tagVariants';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {
  children: React.ReactNode;
}

interface TagIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

interface TagTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}
interface TagCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  className?: string;
}

export type { TagProps, TagIconProps, TagTextProps, TagCloseButtonProps };
