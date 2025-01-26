import React, { forwardRef } from 'react';
import { NavBarProps } from './interface';
import { NavBarLogo } from './NavBarLogo';
import { NavBarContent } from './NavBarContent';
import { cn } from '@/utils';

const NavBar = forwardRef<HTMLDivElement, NavBarProps>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={cn('text-black border-b py-2 px-3 flex justify-between items-center', className)}>
      {children}
    </div>
  );
});

NavBar.displayName = 'NavBar';

export default Object.assign(
  NavBar as React.ForwardRefExoticComponent<NavBarProps & React.RefAttributes<HTMLDivElement>>,
  {
    Logo: NavBarLogo,
    Content: NavBarContent,
  }
);
export { NavBarLogo, NavBarContent };
