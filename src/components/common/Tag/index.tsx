import React, { forwardRef } from 'react';
import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

const tagVariants = cva('inline-flex items-center font-medium text-center rounded-md transition', {
  variants: {
    variant: {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700',
      success: 'bg-green-500 text-white hover:bg-green-600',
      warning: 'bg-yellow-500 text-gray-800 hover:bg-yellow-600',
      danger: 'bg-red-500 text-white hover:bg-red-600',
      info: 'bg-teal-500 text-white hover:bg-teal-600',
      light: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      dark: 'bg-gray-800 text-white hover:bg-gray-900',
    },
    size: {
      xs: 'text-xs h-6 p-1',
      sm: 'text-sm h-8 p-1.5',
      md: 'text-base h-10 p-1.5',
      lg: 'text-lg h-12 p-2',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
});
// #endregion

// #region type
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
// #endregion

// #region Tag
const Tag = forwardRef<HTMLSpanElement, TagProps>(({ children, variant, size, className, ...rest }, ref) => {
  return (
    <span ref={ref} className={cn(tagVariants({ variant, size }), className)} {...rest}>
      {children}
    </span>
  );
});

Tag.displayName = 'Tag';

const TagIcon: React.FC<TagIconProps> = ({ children, className, ...rest }) => (
  <span className={cn('inline-flex items-center mx-1', className)} {...rest}>
    {children}
  </span>
);

const TagClose: React.FC<TagCloseButtonProps> = ({ onClick, className, ...props }) => (
  <button className={cn('ml-2 p-1 opacity-50 hover:opacity-100 transition', className)} onClick={onClick} {...props}>
    <X className="size-3 font-bold" />
  </button>
);

const TagText: React.FC<TagTextProps> = ({ children, className, ...rest }) => (
  <span className={cn('text-center', className)} {...rest}>
    {children}
  </span>
);

// #endregion

// #region exports
export default Object.assign(Tag as React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLDivElement>>, {
  Icon: TagIcon,
  Text: TagText,
  Close: TagClose,
});

export { TagIcon, TagClose, TagText, tagVariants };

export type { TagProps, TagIconProps, TagTextProps, TagCloseButtonProps };
