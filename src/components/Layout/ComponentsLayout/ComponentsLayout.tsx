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
import { CircleGauge, MessageSquare, Network } from 'lucide-react';
import { categorizedRoutesComponents } from './categorizedRoutesComponents';
import Link from '@/components/common/Link';
import { cn } from '@/utils';

export default function ComponentsLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="fixed top-11 left-0 h-screen ">
        <Sidebar className=" w-[13rem]">
          <SidebarBody>
            <SidebarGroup>
              <SidebarGroupLabel>Components</SidebarGroupLabel>
              {categorizedRoutesComponents.map(({ category, components, path, Icon }) => (
                <SidebarGroupContent key={path}>
                  <SidebarMenuSub>
                    <SidebarMenuSubButton
                      title={category}
                      icon={Icon ? <Icon className="size-4 text-[var(--icon-color)]" /> : null}
                      className="hover:bg-gray-100 dark:hover:bg-gray-200/10"
                    >
                      <Link
                        to={path || '#'}
                        className={cn('text-muted-foreground text-xs  hover:text-muted-foreground')}
                      >
                        {category.slice(0, 15)}
                      </Link>
                    </SidebarMenuSubButton>
                    {components.map(({ path, label, Icon }) => (
                      <SidebarMenuSubItem
                        key={path}
                        to={path}
                        icon={Icon ? <Icon className="size-4 text-[var(--icon-color)]" /> : null}
                        className="hover:bg-gray-100 dark:hover:bg-gray-200/10"
                      >
                        {label}
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarGroupContent>
              ))}
            </SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem to="/state-management" icon={<Network className="size-4 text-[var(--icon-color)]" />}>
                State Management
              </SidebarMenuItem>
              <SidebarMenuItem to="/turbo-utilities" icon={<CircleGauge className="size-4 text-[var(--icon-color)]" />}>
                Turbo Utilities
              </SidebarMenuItem>
              <SidebarMenuItem
                to="/components/toast"
                icon={<MessageSquare className="size-4 text-[var(--icon-color)]" />}
              >
                Toast
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarBody>
        </Sidebar>
      </aside>
      <main className="ml-[13rem] w-full  flex-1 p-6 overflow-y-auto bg-inherit">
        <Outlet />
      </main>
    </div>
  );
}
