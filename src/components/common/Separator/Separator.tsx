import { forwardRef, ReactNode, CSSProperties } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const separatorVariants = cva('relative', {
  variants: {
    orientation: {
      horizontal: 'w-full border-t flex items-center',
      vertical: 'h-full flex-col border-l inline-flex',
    },
    position: {
      center: 'justify-center',
      start: 'justify-start',
      end: 'justify-end',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    position: 'center',
  },
});

interface SeparatorProps extends VariantProps<typeof separatorVariants> {
  children?: ReactNode;
  className?: string;
  color?: string;
  margin?: string;
  thickness?: string;
  style?: CSSProperties;
}

const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  (
    {
      orientation = 'horizontal',
      position = 'center',
      thickness = '1px',
      color = '#e4e4e7',
      className,
      children,
      margin,
      style,
      ...rest
    },
    ref
  ) => {
    const separatorStyle: CSSProperties = {
      ...(orientation === 'vertical'
        ? {
            borderLeftWidth: thickness,
            borderLeftColor: color,
            minHeight: '100%',
          }
        : {
            borderTopWidth: thickness,
            borderTopColor: color,
            width: '100%',
          }),
      margin,
      ...style,
    };

    const contentPositionClasses = cn({
      'absolute bg-white px-2': orientation === 'horizontal',
      'left-0': position === 'start',
      'left-1/2 transform -translate-x-1/2': position === 'center',
      'right-0': position === 'end',
    });

    return (
      <div
        ref={ref}
        className={cn(separatorVariants({ orientation, position }), className)}
        style={separatorStyle}
        {...rest}
      >
        {children && <span className={contentPositionClasses}>{children}</span>}
      </div>
    );
  }
);

Separator.displayName = 'Separator';

export default Separator;
