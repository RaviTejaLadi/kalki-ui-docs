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
} from '@/components/shared/SideBar';
import { MessageSquare } from 'lucide-react';
import { categorizedRoutesComponents } from './categorizedRoutesComponents';
import { cn } from '@/utils';
import { Link } from 'kalki-ui';
import { useState, useMemo } from 'react';

const searchInputClassName =
  'w-[18rem] h-8 rounded-md border border-input bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring';

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
          <input
            type="search"
            placeholder="Search components..."
            className={searchInputClassName}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search components"
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
                  className="hover:bg-muted/70 dark:hover:bg-muted/40"
                  isOpen
                >
                  <Link to={path || '#'} className={cn('text-muted-foreground text-xs hover:text-foreground')}>
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
                        'hover:bg-muted/70 dark:hover:bg-muted/40',
                        isActive && 'border border-border bg-muted font-medium text-foreground shadow-none'
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
