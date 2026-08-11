import React, { ReactElement } from 'react';
import { NavMenuItemProps, NavMenuListProps } from '../interface';
import { NavMenuList } from '../NavMenuList';
import { NavMenuItem } from '../NavMenuItem';

export const isValidChild = (child: React.ReactNode): child is ReactElement<NavMenuListProps | NavMenuItemProps> =>
  React.isValidElement(child) && (child.type === NavMenuList || child.type === NavMenuItem);
