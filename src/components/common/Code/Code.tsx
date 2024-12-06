import { cn } from '@/utils';
import { forwardRef } from 'react';
import { codeVariants } from './codeVariants';
import { CodeProps } from './types';

const Code = forwardRef<HTMLElement, CodeProps>(
  (
    {
      children,
      variant,
      size,
      underline = false,
      className,
      style,
      padding,
      margin,
      ...rest
    },
    ref
  ) => {
    const combinedStyles = {
      margin,
      padding,
      ...style,
    };

    return (
      <code
        style={combinedStyles}
        ref={ref}
        className={cn(codeVariants({ variant, size, underline }), className)}
        {...rest}
      >
        {children}
      </code>
    );
  }
);

Code.displayName = 'Code';

export default Code;
