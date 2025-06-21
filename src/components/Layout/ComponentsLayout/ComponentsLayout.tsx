import { Outlet, useLocation } from 'react-router-dom';
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
import { MessageSquare } from 'lucide-react';
import { categorizedRoutesComponents } from './categorizedRoutesComponents';
import { cn } from '@/utils';
import Link from '@/components/common/Link';

export const AppSideBar = ({ className }: { className?: string }) => {
  const location = useLocation();
  return (
    <Sidebar className={cn(className, 'w-[20rem]')}>
      <SidebarBody>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          {categorizedRoutesComponents.map(({ category, components, path, Icon }) => (
            <SidebarGroupContent key={path}>
              <SidebarMenuSub defaultOpen>
                <SidebarMenuSubButton
                  title={category}
                  icon={Icon ? <Icon className="size-4 text-[var(--icon-color)]" /> : null}
                  className="hover:bg-gray-100 dark:hover:bg-gray-200/10"
                  isOpen
                >
                  <Link to={path || '#'} className={cn('text-muted-foreground text-xs hover:text-muted-foreground')}>
                    {category.slice(0, 15)}
                  </Link>
                </SidebarMenuSubButton>
                {components.map(({ path, label, Icon }) => {
                  const isActive = location.pathname === path;
                  return (
                    <SidebarMenuSubItem
                      key={path}
                      to={path}
                      icon={Icon ? <Icon className="size-4 text-[var(--icon-color)]" /> : null}
                      className={cn(
                        'hover:bg-gray-100 dark:hover:bg-gray-200/10',
                        isActive &&
                          'bg-blue-500/20 border-blue-200 border shadow-lg dark:bg-gray-200/10 dark:border-gray-200/10 font-medium text-foreground'
                      )}
                    >
                      {label}
                    </SidebarMenuSubItem>
                  );
                })}
              </SidebarMenuSub>
            </SidebarGroupContent>
          ))}
        </SidebarGroup>
        <SidebarMenu>
          {/* <SidebarMenuItem to="/turbo-utilities" icon={<CircleGauge className="size-4 text-[var(--icon-color)]" />}>
            Turbo Utilities
          </SidebarMenuItem> */}
          <SidebarMenuItem
            to="https://kalki-ui-toast-docs.vercel.app/"
            icon={<MessageSquare className="size-4 text-[var(--icon-color)]" />}
          >
            Toast
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarBody>
    </Sidebar>
  );
};

export default function ComponentsLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="fixed top-11 left-0 h-screen hidden md:block">
        <AppSideBar />
      </aside>
      <main className="ml-0 md:ml-[20rem] w-full flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
