import { Outlet } from 'react-router-dom';
import Sidebar, {
  SidebarBody,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarGroupContent,
} from '@/components/common/SideBar';
import { Calendar, Home, Inbox, MessageSquare, Search, Settings } from 'lucide-react';
import { categorizedRoutesComponents } from './categorizedRoutesComponents';
import Link from '@/components/common/Link';
import { cn } from '@/utils';

export default function ComponentsLayout() {
  return (
    <div className="flex  relative">
      <div className="fixed">
        <Sidebar className="border-r">
          <SidebarBody>
            <SidebarGroup>
              <SidebarGroupLabel>Components</SidebarGroupLabel>
              {categorizedRoutesComponents.map(({ category, components, path, Icon }) => {
                return (
                  <SidebarGroupContent key={path}>
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
                            key={path}
                            to={path}
                            icon={Icon ? <Icon className="size-4 text-[var(--icon-color)]" /> : null}
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
              <SidebarMenuItem
                to="/components/toast"
                icon={<MessageSquare className="size-4 text-[var(--icon-color)]" />}
              >
                Toast
              </SidebarMenuItem>
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
