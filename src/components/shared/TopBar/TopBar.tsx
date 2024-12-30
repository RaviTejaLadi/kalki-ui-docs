import Div from '@/components/common/Div';
import Link from '@/components/common/Link';
import Navbar, { NavBarContent, NavBarLogo } from '@/components/common/Navbar/Navbar';
import NavMenu, { NavMenuItem, NavMenuItemTitle, NavMenuList } from '@/components/common/NavMenu';
import { ThemeToggle } from './ThemeToggle';
import React from 'react';

/**
 * Represents an item in the navigation menu.
 *
 * @interface NavMenuItemList
 * @property {string} title - The title of the menu item.
 * @property {string} to - The destination path or URL the menu item links to.
 * @property {'xs' | 'sm' | 'md' | 'lg'} size - The size of the menu item, which can be one of 'xs', 'sm', 'md', or 'lg'.
 */
interface NavMenuItemList {
  title: string;
  to: string;
  size: 'xs' | 'sm' | 'md' | 'lg';
}

/**
 * The `TopBar` component represents the top navigation bar of the application.
 * It includes a logo and a navigation menu with several items.
 *
 * @component
 * @example
 * // Usage example:
 * <TopBar />
 *
 * @returns {JSX.Element} The rendered top navigation bar component.
 *
 * @remarks
 * The navigation menu items are defined in the `navMenuItem` array, each containing a title, a link (`to`), and a size.
 * The component uses several custom components such as `Navbar`, `Link`, `NavBarLogo`, `NavBarContent`, `NavMenu`, `NavMenuList`, `NavMenuItem`, and `NavMenuItemTitle`.
 *
 * @see {@link NavMenuItem}
 */
const TopBar: React.FC = () => {
  const navMenuItem: NavMenuItemList[] = [
    { title: 'Get Started', to: '/get-started', size: 'xs' as const },
    { title: 'Components', to: '/components', size: 'xs' as const },
    { title: 'Examples', to: '/examples', size: 'xs' as const },
    { title: 'Colors', to: '/colors', size: 'xs' as const },
    { title: 'Playgrounds', to: '/playgrounds', size: 'xs' as const },
    { title: 'Turbo Utilities', to: '/turbo-utilities', size: 'xs' as const },
    { title: 'State Vault', to: '/state-vault', size: 'xs' as const },
  ];

  return (
    <Navbar className="flex  h-11 justify-start space-x-10 fixed top-0 z-50 w-full  border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-inherit">
      <Link to="/" className="w-[10rem]">
        <NavBarLogo className="text-md tracking-wide text-purple-500 dark:text-foreground">
          <span>📦</span>
          Kalki UI
        </NavBarLogo>
      </Link>
      <Div className="flex justify-between  items-center w-full">
        <NavBarContent className="flex ">
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
        </Div>
      </Div>
    </Navbar>
  );
};

export default TopBar;
