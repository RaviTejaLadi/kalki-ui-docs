import * as React from 'react';
import { cn } from '@/utils';
import { SidebarProps } from './types';
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

/**
 * A composable sidebar component that provides a flexible layout structure for navigation and content organization.
 *
 * @compound {SidebarProvider} Provider - Context provider for the sidebar component
 * @compound {SidebarHeader} Header - Header section of the sidebar
 * @compound {SidebarBody} Body - Main content area of the sidebar
 * @compound {SidebarFooter} Footer - Footer section of the sidebar
 * @compound {SidebarGroup} Group - Container for grouping related sidebar elements
 * @compound {SidebarGroupAction} GroupAction - Interactive element within a sidebar group
 * @compound {SidebarGroupContent} GroupContent - Content container within a sidebar group
 * @compound {SidebarGroupLabel} GroupLabel - Label element for a sidebar group
 * @compound {SidebarInput} Input - Input field component for the sidebar
 * @compound {SidebarMenu} Menu - Navigation menu component
 * @compound {SidebarMenuBadge} MenuBadge - Badge element for menu items
 * @compound {SidebarMenuButton} MenuButton - Clickable button element in the menu
 * @compound {SidebarMenuItem} MenuItem - Individual menu item component
 * @compound {SidebarMenuSub} MenuSub - Submenu container component
 * @compound {SidebarMenuSubButton} MenuSubButton - Button element for submenu interaction
 * @compound {SidebarMenuSubItem} MenuSubItem - Individual item within a submenu
 * @compound {SidebarMenuSkeleton} MenuSkeleton - Loading skeleton for menu items
 *
 * @example
 * ```tsx
 * <Sidebar>
 *   <Sidebar.Header>...</Sidebar.Header>
 *   <Sidebar.Body>
 *     <Sidebar.Menu>
 *       <Sidebar.MenuItem>...</Sidebar.MenuItem>
 *     </Sidebar.Menu>
 *   </Sidebar.Body>
 *   <Sidebar.Footer>...</Sidebar.Footer>
 * </Sidebar>
 * ```
 */

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(({ className, children, ...props }, ref) => {
  const { expanded } = useSidebar();

  return (
    <div
      ref={ref}
      className={cn(
        'flex h-screen flex-col bg-background dark:bg-inherit transition-all duration-300',
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
