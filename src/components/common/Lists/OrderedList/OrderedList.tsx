import { cn } from '@/utils';
import React, { forwardRef } from 'react';
import { OrderedListProps } from './interface';
import { OrderedListItem } from './OrderedListItem';

const OrderedList = forwardRef<HTMLOListElement, OrderedListProps>(
  ({ children, type = '1', className = '', style, ...rest }, ref) => {
    const combinedStyle = {
      ...style,
      listStyleType:
        type === '1'
          ? 'decimal'
          : type === 'A'
            ? 'upper-alpha'
            : type === 'a'
              ? 'lower-alpha'
              : type === 'I'
                ? 'upper-roman'
                : type === 'i'
                  ? 'lower-roman'
                  : 'decimal',
    };

    return (
      <ol
        ref={ref}
        className={cn('pl-5', className)}
        style={combinedStyle}
        {...rest}
      >
        {children}
      </ol>
    );
  }
);

OrderedList.displayName = 'OrderedList';

export default Object.assign(
  OrderedList as React.ForwardRefExoticComponent<
    OrderedListProps & React.RefAttributes<HTMLOListElement>
  >,
  {
    Item: OrderedListItem,
  }
);

export { OrderedListItem };
