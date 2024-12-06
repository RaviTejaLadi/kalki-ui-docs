import React from 'react';
import { SidebarMenuSubProps } from '../interface';
import { cn } from '@/utils';
import { useSidebar } from '../context';

export const SidebarMenuSub = React.forwardRef<HTMLDivElement, SidebarMenuSubProps>(
  ({ className, defaultOpen = false, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);
    const { expanded } = useSidebar();

    if (!expanded) return null;

    return (
      <div ref={ref} className={cn('space-y-1 ', className)} {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              isOpen,
              onOpenChange: setIsOpen,
            });
          }
          return child;
        })}
      </div>
    );
  }
);
SidebarMenuSub.displayName = 'SidebarMenuSub';
