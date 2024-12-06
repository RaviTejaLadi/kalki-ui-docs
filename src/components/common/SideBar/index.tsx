import * as React from 'react';
import { cn } from '@/utils';
import { SidebarProps } from './interface';
import { useSidebar } from './context';
import { SidebarGroupAction } from './group/SidebarGroupAction';
import { SidebarInput } from './SidebarInput';
import { SidebarMenuButton } from './menu/SidebarMenuButton';
import { SidebarBody } from './wrappers/SidebarBody';
import { SidebarProvider } from './wrappers/SidebarProvider';
import { SidebarHeader } from './wrappers/SidebarHeader';
import { SidebarFooter } from './wrappers/SidebarFooter';
import { SidebarGroup } from './group/SidebarGroup';
import { SidebarGroupContent } from './group/SidebarGroupContent';
import { SidebarGroupLabel } from './group/SidebarGroupLabel';
import { SidebarMenu } from './menu/SidebarMenu';
import { SidebarMenuBadge } from './menu/SidebarMenuBadge';
import { SidebarMenuItem } from './menu/SidebarMenuItem';
import { SidebarMenuSub } from './menu/SidebarMenuSub';
import { SidebarMenuSubButton } from './menu/SidebarMenuSubButton';
import { SidebarMenuSubItem } from './menu/SidebarMenuSubItem';
import { SidebarMenuSkeleton } from './menu/SidebarMenuSkeleton';

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(({ className, children, ...props }, ref) => {
  const { expanded } = useSidebar();

  return (
    <div
      ref={ref}
      className={cn(
        'flex h-screen flex-col bg-white transition-all duration-300',
        expanded ? 'w-56' : 'w-16',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Sidebar.displayName = 'Sidebar';

export default Object.assign(
  Sidebar as React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLDivElement>>,
  {
    Provider: SidebarProvider,
    Header: SidebarHeader,
    Body: SidebarBody,
    Footer: SidebarFooter,
    Group: SidebarGroup,
    GroupAction: SidebarGroupAction,
    GroupContent: SidebarGroupContent,
    GroupLabel: SidebarGroupLabel,
    Input: SidebarInput,
    Menu: SidebarMenu,
    MenuBadge: SidebarMenuBadge,
    MenuButton: SidebarMenuButton,
    MenuItem: SidebarMenuItem,
    MenuSub: SidebarMenuSub,
    MenuSubButton: SidebarMenuSubButton,
    MenuSubItem: SidebarMenuSubItem,
    MenuSkeleton: SidebarMenuSkeleton,
  }
);

export {
  SidebarProvider,
  SidebarHeader,
  SidebarBody,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInput,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarMenuSkeleton,
};
