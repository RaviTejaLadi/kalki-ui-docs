import { Button, Div } from 'kalki-ui';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/schadcn/accordion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/schadcn/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/schadcn/sheet';
import { Github, Menu } from 'lucide-react';
import React from 'react';
import Logo from './Logo';
import { ThemeToggle } from './ThemeToggle';

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  menu?: MenuItem[];
}

const Navbar = ({
  menu = [
    { title: 'Get Started', url: '/get-started' },
    { title: 'Components', url: '/components' },
    { title: 'Blocks', url: '/blocks' },
    // { title: 'State Vault', url: 'https://state-vault-docs.vercel.app/' },
    { title: 'Colors', url: '/colors' },
  ],
}: Navbar1Props) => {
  return (
    <div className="fixed top-0 z-50 flex h-14 w-full items-center justify-between border-b border-border/70 bg-background/80 px-4 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 sm:px-6 lg:px-10">
      {/* Desktop Menu */}
      <nav className="hidden w-full justify-between lg:flex">
        <div className="flex w-full items-center justify-between gap-6">
          <Div className="flex items-center gap-8">
            <a href="/" className="w-auto shrink-0">
              <Logo />
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-0.5 text-muted-foreground">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </Div>
          <Div className="flex items-center gap-1.5">
            <ThemeToggle />
            <a href="https://github.com/RaviTejaLadi/kalki-ui" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="xs" accessKey="View source code" aria-label="View source code">
                <Github className="h-4 w-4" />
              </Button>
            </a>
          </Div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="block w-full items-center py-2 lg:hidden">
        <div className="flex items-center justify-between">
          <a href="/" className="w-auto">
            <Logo />
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="xs">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <a href="/" className="w-auto">
                    <Logo />
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-6 p-4">
                <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>
              </div>
              <Div className="flex items-center justify-end gap-1.5">
                <ThemeToggle />
                <a href="https://github.com/RaviTejaLadi/kalki-ui" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="xs" accessKey="View source code" aria-label="View source code">
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
              </Div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-8 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">{item.title}</AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className="group flex justify-start h-6 w-full text-muted-foreground items-center  rounded bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
    >
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>}
      </div>
    </a>
  );
};

export { Navbar };
