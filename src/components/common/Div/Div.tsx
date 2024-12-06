import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils';

interface DivProps extends React.HTMLProps<HTMLDivElement> {
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none';
  backgroundColor?: 'gray' | 'blue' | 'green' | 'yellow' | 'purple' | 'none';
}

const divStyles = cva('rounded-lg transition-all duration-300', {
  variants: {
    borderStyle: {
      solid: 'border border-solid',
      dashed: 'border border-dashed',
      dotted: ' border border-dotted',
      none: 'border-none',
    },
    backgroundColor: {
      gray: 'bg-gray-50',
      blue: 'bg-blue-50',
      green: 'bg-green-50',
      yellow: 'bg-yellow-50',
      purple: 'bg-purple-50',
      none: 'bg-none',
    },
  },
  compoundVariants: [
    {
      borderStyle: 'solid',
      className: 'border-gray-300',
    },
    {
      borderStyle: 'dashed',
      className: 'border-blue-400',
    },
    {
      borderStyle: 'dotted',
      className: 'border-green-400',
    },
    {
      borderStyle: 'none',
      className: 'border-none',
    },
  ],
  defaultVariants: {
    borderStyle: 'none',
    backgroundColor: 'none',
  },
});

const Div: React.FC<DivProps> = ({ children, className, style, borderStyle, backgroundColor, ...rest }) => {
  return (
    <div
      className={cn(
        divStyles({
          borderStyle,
          backgroundColor,
        }),
        className
      )}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Div;
