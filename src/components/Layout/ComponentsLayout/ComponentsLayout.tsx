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
import { useState, useMemo } from 'react';
import { Input } from '@/components/common/Form';

export const AppSideBar = ({ className }: { className?: string }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter categories and components based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return categorizedRoutesComponents;
    }

    const query = searchQuery.toLowerCase();
    return categorizedRoutesComponents
      .map((category) => ({
        ...category,
        components: category.components.filter(
          (component) =>
            component.label.toLowerCase().includes(query) || component.description?.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.components.length > 0);
  }, [searchQuery]);

  return (
    <Sidebar className={cn(className, 'w-[20rem]')}>
      <SidebarBody>
        <div className="p-4 ">
          <Input
            type="search"
            placeholder="Search components..."
            className=" w-[18rem]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          {filteredCategories.map(({ category, components, path, Icon }) => (
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
