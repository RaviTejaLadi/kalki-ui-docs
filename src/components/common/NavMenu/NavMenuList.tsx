import React, { forwardRef } from 'react';
import { NavMenuListProps } from './interface';
import { cn } from '@/utils';
import { isValidChild } from './utils/isValidChild';

export const NavMenuList = forwardRef<HTMLUListElement, NavMenuListProps>(
  ({ children, className, openMenuItem, setOpenMenuItem }, ref) => (
    <ul ref={ref} className={cn('flex gap-1', className)}>
      {React.Children.map(children, (child) =>
        isValidChild(child) ? React.cloneElement(child, { openMenuItem, setOpenMenuItem }) : null
      )}
    </ul>
  )
);
