import { forwardRef } from 'react';
import { cn } from '@/utils';
import { BoxProps } from './types';
import { boxVariants } from './boxVariants';

const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      width = 'auto',
      height = 'auto',
      shadow,
      rounded = false,
      children,
      outlined = false,
      className,
      margin = '0',
      padding = '0',
      color,
      backgroundColor,
      display = 'block',
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent,
      gap,
      style,
      ...rest
    },
    ref
  ) => {
    const classNames = boxVariants({
      display,
      shadow,
      rounded,
      outlined,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent,
      gap,
    });

    const inlineStyles = {
      width,
      height,
      margin,
      padding,
      color,
      backgroundColor,
      ...style,
    };

    return (
      <div
        style={inlineStyles}
        ref={ref}
        className={cn(classNames, className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Box.displayName = 'Box';

export default Box;
