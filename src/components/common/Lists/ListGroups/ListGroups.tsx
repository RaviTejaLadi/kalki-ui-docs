import React, { forwardRef } from 'react';
import { cn } from '@/utils';
import { VariantType } from './type';
import { ListGroupProps } from './interface';
import { ListGroupContext } from './context';
import { listGroupVariants } from './listGroupVariants';
import { ListGroupItem } from './ListGroupItem';

const ListGroups = forwardRef<HTMLUListElement, ListGroupProps>(
  (
    {
      width,
      size,
      variant = 'primary',
      className,
      style,
      showDividers = true,
      showArrows = true,
      children,
      ...rest
    },
    ref
  ) => {
    const currentVariant = (variant || 'primary') as VariantType;
    return (
      <ListGroupContext.Provider
        value={{ variant: currentVariant, showArrows, showDividers }}
      >
        <ul
          ref={ref}
          className={cn(listGroupVariants({ size, variant }), className)}
          style={{ width, ...style }}
          {...rest}
        >
          {children}
        </ul>
      </ListGroupContext.Provider>
    );
  }
);

export default Object.assign(
  ListGroups as React.ForwardRefExoticComponent<
    ListGroupProps & React.RefAttributes<HTMLOListElement>
  >,
  {
    Item: ListGroupItem,
  }
);

ListGroups.displayName = 'ListGroups';
ListGroupItem.displayName = 'ListGroupsItem';

export { ListGroupItem };
