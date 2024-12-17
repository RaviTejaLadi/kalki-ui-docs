import { VariantProps } from 'class-variance-authority';
import { listGroupVariants } from './listGroupVariants';
import { VariantType } from './type';

export interface ListGroupContextType {
  variant: VariantType;
  showArrows?: boolean;
  showDividers?: boolean;
}

export interface ListGroupProps extends VariantProps<typeof listGroupVariants> {
  width?: string;
  className?: string;
  style?: React.CSSProperties;
  showDividers?: boolean;
  showArrows?: boolean;
  children?: React.ReactNode;
}

export interface ListGroupItemProps {
  icon?: React.ReactNode;
  label: string;
  description?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}
