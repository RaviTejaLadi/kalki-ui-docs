import Link from '~/components/common/Link';
import Navbar, { NavBarContent, NavBarLogo } from '~/components/common/Navbar/Navbar';
import NavMenu, { NavMenuItem, NavMenuItemTitle, NavMenuList } from '~/components/common/NavMenu';

interface NavMenuItem {
  title: string;
  to: string;
  size: 'xs' | 'sm' | 'md' | 'lg';
}
const TopBar: React.FC = () => {
  const navMenuItem: NavMenuItem[] = [
    { title: 'Get Started', to: '/getStarted', size: 'xs' as const },
    { title: 'Components', to: '/components', size: 'xs' as const },
    { title: 'Examples', to: '/examples', size: 'xs' as const },
    { title: 'Colors', to: '/colors', size: 'xs' as const },
  ];

  return (
    <Navbar className="flex justify-start space-x-10">
      <Link to="/">
        <NavBarLogo className="text-base text-black">UI Essentials</NavBarLogo>
      </Link>
      <NavBarContent className="flex">
        <NavMenu>
          <NavMenuList>
            {navMenuItem.map((item) => (
              <NavMenuItem key={item.to} size={item.size} to={item.to}>
                <NavMenuItemTitle>{item.title}</NavMenuItemTitle>
              </NavMenuItem>
            ))}
          </NavMenuList>
        </NavMenu>
      </NavBarContent>
    </Navbar>
  );
};

export default TopBar;
