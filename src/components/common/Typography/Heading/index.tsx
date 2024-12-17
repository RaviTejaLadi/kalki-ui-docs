import { cn } from '@/utils';
import { createElement, FC } from 'react';
import { headingVariants } from './headingVariants';
import { HeadingProps } from './types';

/**
 * Heading component that renders a heading element based on the provided size.
 *
 * @component
 * @param {HeadingProps} props - The properties for the Heading component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the heading.
 * @param {string} [props.size] - The size of the heading element (e.g., 'h1', 'h2', etc.). Defaults to 'h1'.
 * @param {string} [props.className] - Additional class names to apply to the heading element.
 * @param {React.MouseEventHandler} [props.onClick] - Click event handler for the heading element.
 * @param {object} [props.props] - Additional properties to be passed to the heading element.
 * @returns {React.ReactElement} The rendered heading element.
 */
const Heading: FC<HeadingProps> = ({ children, size, className, onClick, ...props }) => {
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
