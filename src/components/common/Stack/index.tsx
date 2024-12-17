import React, { forwardRef, CSSProperties } from 'react';
import { cn } from '@/utils';
import { StackProps } from './types';
import { StackItem } from './StackItem';

/**
 * A flexible container component that manages the layout and spacing of its children.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {'row' | 'column'} [props.direction='row'] - The direction of the stack's items
 * @param {'start' | 'center' | 'end' | 'between' | 'around'} [props.justifyContent='start'] - How items are justified along the main axis
 * @param {'start' | 'center' | 'end' | 'stretch'} [props.alignItems='stretch'] - How items are aligned along the cross axis
 * @param {'start' | 'center' | 'end' | 'stretch'} [props.alignContent='stretch'] - How lines are aligned within the stack when there is extra space in the cross-axis
 * @param {'wrap' | 'nowrap'} [props.flexWrap='nowrap'] - Whether items should wrap to new lines
 * @param {number} [props.spacing=0] - The gap between items in pixels
 * @param {string | number} [props.padding] - The padding around the stack
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.CSSProperties} [props.style] - Additional inline styles
 * @param {React.ReactNode} props.children - The content to be rendered inside the stack
 * 
 * @example
 * ```tsx
 * <Stack direction="column" spacing={16} alignItems="center">
 *   <StackItem>Item 1</StackItem>
 *   <StackItem>Item 2</StackItem>
 * </Stack>
 * ```
 */
const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = 'row',
      justifyContent = 'start',
      alignItems = 'stretch',
      alignContent = 'stretch',
      flexWrap = 'nowrap',
      spacing = 0,
      padding,
      className,
      children,
      style,
      ...rest
    },
    ref
  ) => {
    const classes = cn(
      'flex',
      {
        'flex-row': direction === 'row',
        'flex-col': direction === 'column',
        'justify-start': justifyContent === 'start',
        'justify-center': justifyContent === 'center',
        'justify-end': justifyContent === 'end',
        'justify-between': justifyContent === 'between',
        'justify-around': justifyContent === 'around',
        'items-start': alignItems === 'start',
        'items-center': alignItems === 'center',
        'items-end': alignItems === 'end',
        'items-stretch': alignItems === 'stretch',
        'content-start': alignContent === 'start',
        'content-center': alignContent === 'center',
        'content-end': alignContent === 'end',
        'content-stretch': alignContent === 'stretch',
        'flex-wrap': flexWrap === 'wrap',
        'flex-nowrap': flexWrap === 'nowrap',
      },
      className
    );

    const inlineStyles: CSSProperties = {
      gap: `${spacing}px`,
      padding,
      ...style,
    };

    return (
      <div ref={ref} className={classes} style={inlineStyles} {...rest}>
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';

export default Object.assign(
  Stack as React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLDivElement>>,
  {
    Item: StackItem,
  }
);

export { StackItem };
