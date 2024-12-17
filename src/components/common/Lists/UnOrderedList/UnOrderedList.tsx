import React, { forwardRef } from 'react';
import { UnOrderedListProps } from './interface';
import { UnOrderedListItem } from './UnOrderedListItem';
import { cn } from '@/utils';

const UnOrderedList = forwardRef<HTMLUListElement, UnOrderedListProps>(
  ({ children, type = 'disc', className = '', style, ...rest }, ref) => {
    const unOrderStyles = {
      listStyleType: type,
      ...style,
    };

    return (
      <ul ref={ref} className={cn('pl-5', className)} style={unOrderStyles} {...rest}>
        {children}
      </ul>
    );
  }
);

UnOrderedList.displayName = 'UnorderedList';

export default Object.assign(
  UnOrderedList as React.ForwardRefExoticComponent<UnOrderedListProps & React.RefAttributes<HTMLUListElement>>,
  {
    Item: UnOrderedListItem,
  }
);

export { UnOrderedListItem };
