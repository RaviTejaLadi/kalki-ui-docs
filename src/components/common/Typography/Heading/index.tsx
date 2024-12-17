import { cn } from '@/utils';
import { createElement, FC } from 'react';
import { headingVariants } from './headingVariants';
import { HeadingProps } from './types';

const Heading: FC<HeadingProps> = ({
  children,
  size,
  className,
  onClick,
  ...props
}) => {
  const element = size || 'h1';
  return createElement(
    element,
    {
      className: cn(headingVariants({ size, ...props }), className),
      onClick: onClick,
    },
    children
  );
};
export default Heading;
