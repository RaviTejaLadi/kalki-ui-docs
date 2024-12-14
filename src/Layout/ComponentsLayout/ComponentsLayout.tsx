import { Outlet, useLocation } from 'react-router-dom';
import Sidebar, {
  SidebarBody,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarMenuSkeleton,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarGroupContent,
} from '@/components/common/SideBar';
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';
import { categorizedRoutesComponents } from './categorizedRoutesComponents';
import Link from '@/components/common/Link';
import { cn } from '@/utils';

export default function ComponentsLayout() {
  const items = [
    {
      title: 'Home',
      url: '#',
      icon: Home,
    },
    {
      title: 'Inbox',
      url: '#',
      icon: Inbox,
    },
    {
      title: 'Calendar',
      url: '#',
      icon: Calendar,
    },
    {
      title: 'Search',
      url: '#',
      icon: Search,
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings,
    },
  ];
  return (
    <div className="flex  relative">
      <div className="fixed">
        <Sidebar className="border-r">
          <SidebarBody>
            {/* <SidebarGroup>
              <SidebarGroupLabel>Elements</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenuSub defaultOpen={location.pathname.includes('/components/elements')}>
                  <SidebarMenuSubButton icon={<Layout className="size-4" />}>Basic Elements</SidebarMenuSubButton>
                  <SidebarMenuSubItem
                    to="/components/buttons"
                    icon={<Layout className="size-4" />}
                  ></SidebarMenuSubItem>
                  <SidebarMenuSubItem to="/components/forms">Forms</SidebarMenuSubItem>
                  <SidebarMenuSubItem to="/components/tables">Tables</SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarGroupContent>
            </SidebarGroup> */}

            {/* <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem to="#" icon={<item.icon className="size-4" />} key={item.title}>
                      {item.title}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent> 
            </SidebarGroup>*/}
            <SidebarGroup>
              <SidebarGroupLabel>Components</SidebarGroupLabel>
              {categorizedRoutesComponents.map(({ category, components, path, Icon }) => {
                return (
                  <SidebarGroupContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubButton
                        title={category}
                        icon={Icon ? <Icon className="size-4 text-[--icon-color]" /> : null}
                      >
                        <Link
                          to={path || '#'}
                          className={cn('text-muted-foreground text-xs hover:bg-gray-100 hover:text-muted-foreground')}
                        >
                          {category.slice(0, 15)}
                        </Link>
                      </SidebarMenuSubButton>
                      {components.map(({ path, label, Icon }) => {
                        return (
                          <SidebarMenuSubItem
                            to={path}
                            icon={Icon ? <Icon className="size-4 text-[--icon-color]" /> : null}
                          >
                            {label}
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </SidebarGroupContent>
                );
              })}
            </SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem to="#">State Management</SidebarMenuItem>
              <SidebarMenuItem to="/turbo-utilities">Turbo Utilities</SidebarMenuItem>
            </SidebarMenu>
          </SidebarBody>
        </Sidebar>
      </div>
      <main className="flex-1 absolute left-56  p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
