import Link from '@/components/common/Link';
import Navbar, { NavBarContent, NavBarLogo } from '@/components/common/Navbar/Navbar';
import NavMenu, { NavMenuItem, NavMenuItemTitle, NavMenuList } from '@/components/common/NavMenu';

interface NavMenuItem {
  title: string;
  to: string;
  size: 'xs' | 'sm' | 'md' | 'lg';
}
const TopBar: React.FC = () => {
  const navMenuItem: NavMenuItem[] = [
    { title: 'Get Started', to: '/get-started', size: 'xs' as const },
    { title: 'Components', to: '/components', size: 'xs' as const },
    { title: 'Examples', to: '/examples', size: 'xs' as const },
    { title: 'Colors', to: '/colors', size: 'xs' as const },
    { title: 'Playgrounds', to: '/playgrounds', size: 'xs' as const },
  ];

  return (
    <Navbar className="flex h-11 justify-start space-x-10 fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link to="/">
        <NavBarLogo className="text-md tracking-wide text-purple-500">UI Essentials</NavBarLogo>
      </Link>
      <NavBarContent className="flex">
        <NavMenu>
          <NavMenuList>
            {navMenuItem.map((item) => (
              <NavMenuItem key={item.to} size={item.size} to={item.to}>
                <NavMenuItemTitle>
                  <span className="text-muted-foreground tracking-wide text-xs font-medium">{item.title}</span>
                </NavMenuItemTitle>
              </NavMenuItem>
            ))}
          </NavMenuList>
        </NavMenu>
      </NavBarContent>
    </Navbar>
  );
};

export default TopBar;
