import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { cn } from '@/utils';
import { useMergedRef } from '@/hooks/useMergedRef';
import { NavMenuProps } from './interface';
import { isValidChild } from './utils/isValidChild';
import { NavMenuList } from './NavMenuList';
import { NavMenuItem } from './NavMenuItem';
import { NavMenuItemTitle } from './NavMenuItemTitle';
import { NavMenuItemContent } from './NavMenuItemContent';
import { NavMenuLink } from './NavMenuLink';

const NavMenu = forwardRef<HTMLDivElement, NavMenuProps>(({ children, className }, ref) => {
  const [openMenuItem, setOpenMenuItem] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const combinedRef = useMergedRef(menuRef, ref);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuItem(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={cn('relative', className)} ref={combinedRef}>
      {React.Children.map(children, (child) =>
        isValidChild(child) ? React.cloneElement(child, { openMenuItem, setOpenMenuItem }) : null
      )}
    </div>
  );
});

export default Object.assign(
  NavMenu as React.ForwardRefExoticComponent<NavMenuProps & React.RefAttributes<HTMLDivElement>>,
  {
    List: NavMenuList,
    Item: NavMenuItem,
    ItemTitle: NavMenuItemTitle,
    ItemContent: NavMenuItemContent,
    Link: NavMenuLink,
  }
);

export { NavMenuList, NavMenuItem, NavMenuItemTitle, NavMenuItemContent, NavMenuLink };
