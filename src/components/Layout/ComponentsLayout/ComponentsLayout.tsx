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
import { MessageSquare, Menu } from 'lucide-react';
import { categorizedRoutesComponents } from './categorizedRoutesComponents';
import { cn } from '@/utils';
import { Button, Link } from 'kalki-ui';
import { useState, useMemo, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/schadcn/sheet';

const searchInputClassName =
  'w-full max-w-full h-8 rounded-md border border-input bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring';

export const AppSideBar = ({ className, onNavigate }: { className?: string; onNavigate?: () => void }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

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
    <Sidebar className={cn('w-full max-w-[20rem]', className)}>
      <SidebarBody>
        <div className="p-4">
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
                  <Link
                    to={path || '#'}
                    onClick={onNavigate}
                    className={cn('text-muted-foreground text-xs hover:text-foreground')}
                  >
                    {category}
                  </Link>
                </SidebarMenuSubButton>
                {components.map(({ path, label, Icon }) => {
                  const isActive = location.pathname === path;
                  return (
                    <SidebarMenuSubItem
                      key={path}
                      to={path}
                      onClick={onNavigate}
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
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] w-full overflow-x-hidden">
      <aside className="fixed top-14 left-0 z-30 hidden h-[calc(100vh-3.5rem)] w-[20rem] border-r border-border/60 bg-background md:block">
        <AppSideBar className="h-full" />
      </aside>

      <main className="ml-0 w-full min-w-0 flex-1 overflow-x-hidden md:ml-[20rem]">
        <div className="sticky top-14 z-20 flex items-center gap-2 border-b border-border/60 bg-background/95 px-4 py-2 backdrop-blur md:hidden">
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="xs" aria-label="Open components menu">
                <Menu className="size-4" />
                <span className="ml-1.5 text-xs">Components</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[min(100vw,20rem)] p-0">
              <SheetHeader className="border-b border-border/60 px-4 py-3 text-left">
                <SheetTitle className="text-sm">Components</SheetTitle>
              </SheetHeader>
              <div className="h-[calc(100vh-4rem)] overflow-y-auto">
                <AppSideBar onNavigate={() => setMobileNavOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="py-4 md:py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
