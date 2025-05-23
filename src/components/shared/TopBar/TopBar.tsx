import Div from '@/components/common/Div';
import Link from '@/components/common/Link';
import Navbar, { NavBarContent, NavBarLogo } from '@/components/common/Navbar/Navbar';
import NavMenu, { NavMenuItem, NavMenuItemTitle, NavMenuList } from '@/components/common/NavMenu';
import { ThemeToggle } from './ThemeToggle';
import React, { Fragment, useState } from 'react';
import Logo from './Logo';
import ReactDOM from 'react-dom';
import Button from '@/components/common/Button';
import { Github, Menu } from 'lucide-react';
import { usePortal } from '@/hooks';
import Drawer from '@/components/common/Drawer';
import { AppSideBar } from '@/components/Layout/ComponentsLayout/ComponentsLayout';

interface SidebarPortalProps {
  id: string;
  children: React.ReactNode;
}
const SidebarPortal = ({ id, children }: SidebarPortalProps) => {
  const target = usePortal(id);
  return ReactDOM.createPortal(children, target);
};

interface NavMenuItemList {
  title: string;
  to: string;
  size: 'xs' | 'sm' | 'md' | 'lg';
}

const TopBar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const navMenuItem: NavMenuItemList[] = [
    { title: 'Get Started', to: '/get-started', size: 'xs' as const },
    { title: 'Components', to: '/components', size: 'xs' as const },
    { title: 'Blocks', to: '/blocks', size: 'xs' as const },
    { title: 'State Vault', to: 'https://state-vault-docs.vercel.app/', size: 'xs' as const },
    { title: 'Colors', to: '/colors', size: 'xs' as const },
  ];

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Fragment>
      <Navbar className="flex h-11 justify-start space-x-10 fixed top-0 z-50 w-full  border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-inherit">
        <Button className="sm:visible md:hidden" variant="outline" size="xs" aria-label="Menu" onClick={toggleSidebar}>
          <Menu className="size-4 text-[var(--icon-color)]" />
        </Button>

        <Link to="/" className="w-auto">
          <NavBarLogo className="text-md w-auto">
            <Logo />
          </NavBarLogo>
        </Link>
        <Div className="flex justify-between items-center w-full">
          <NavBarContent className="flex">
            <NavMenu>
              <NavMenuList>
                {navMenuItem.map((item) => (
                  <NavMenuItem key={item.to} size={item.size} variant="light" to={item.to}>
                    <NavMenuItemTitle>
                      <span className="text-muted-foreground tracking-wide text-xs font-medium ">{item.title}</span>
                    </NavMenuItemTitle>
                  </NavMenuItem>
                ))}
              </NavMenuList>
            </NavMenu>
          </NavBarContent>
          <Div className="hidden md:block">
            <ThemeToggle />
            <a href="https://github.com/RaviTejaLadi/kalki-ui" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="xs">
                <Github className="h-4 w-4" />
              </Button>
            </a>
          </Div>
        </Div>
      </Navbar>
      <SidebarPortal id="sidebar-root">
        <Drawer isOpen={showSidebar} onClose={() => setShowSidebar(false)} position="left" width="15rem">
          <Drawer.Header>
            <Drawer.Title>
              <Logo />
            </Drawer.Title>
          </Drawer.Header>
          <Drawer.Body className="p-0">
            <AppSideBar className="h-auto bg-inherit" />
          </Drawer.Body>
        </Drawer>
      </SidebarPortal>
    </Fragment>
  );
};

export default TopBar;
