import React, { forwardRef, ReactElement, useCallback, useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { navMenuTriggerVariants } from './navMenuTriggerVariants';
import { NavMenuItemTitle } from './NavMenuItemTitle';
import { NavMenuItemContent } from './NavMenuItemContent';
import { NavMenuTrigger } from './NavMenuTrigger';
import { NavMenuLink } from './NavMenuLink';
import { NavMenuItemProps, NavMenuContentPosition } from './interface';
import { NavMenuContent } from './NavMenuContent';
import { cn } from '@/utils';

export const NavMenuItem = forwardRef<HTMLDivElement, NavMenuItemProps>(
  ({ children, className, openMenuItem, setOpenMenuItem, to, variant = 'light', size = 'sm' }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [contentPosition, setContentPosition] = useState<NavMenuContentPosition>({
      top: 0,
      left: 0,
    });

    const title = React.Children.toArray(children).find(
      (child): child is ReactElement => React.isValidElement(child) && child.type === NavMenuItemTitle
    );

    const content = React.Children.toArray(children).find(
      (child): child is ReactElement => React.isValidElement(child) && child.type === NavMenuItemContent
    );

    const hasContent = Boolean(content);
    const isOpen = openMenuItem === (title?.props.children as string);

    const updatePosition = useCallback(() => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setContentPosition({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
    }, []);

    const handleItemClick = useCallback(() => {
      if (setOpenMenuItem && hasContent) {
        if (!isOpen) {
          updatePosition();
        }
        setOpenMenuItem(isOpen ? null : (title?.props.children as string));
      }
    }, [isOpen, setOpenMenuItem, title, hasContent, updatePosition]);

    useEffect(() => {
      if (isOpen) {
        window.addEventListener('scroll', updatePosition);
        window.addEventListener('resize', updatePosition);
        updatePosition();

        return () => {
          window.removeEventListener('scroll', updatePosition);
          window.removeEventListener('resize', updatePosition);
        };
      }
    }, [isOpen, updatePosition]);

    return (
      <div className={cn('relative', className)} ref={ref}>
        {hasContent ? (
          <NavMenuTrigger
            ref={buttonRef}
            onClick={handleItemClick}
            className={navMenuTriggerVariants({ variant, size })}
          >
            {title?.props.children}
            <ChevronDown className={cn('size-3 transition-transform duration-200', isOpen ? 'rotate-180' : '')} />
          </NavMenuTrigger>
        ) : (
          <NavMenuLink to={to || '#'} className={cn(navMenuTriggerVariants({ variant, size }), 'bg-inherit')}>
            {title?.props.children}
          </NavMenuLink>
        )}

        {isOpen && hasContent && (
          <NavMenuContent className={cn(content?.props.className)} position={contentPosition}>
            {content}
          </NavMenuContent>
        )}
      </div>
    );
  }
);

NavMenuItem.displayName = 'NavMenuItem';

export default NavMenuItem;
