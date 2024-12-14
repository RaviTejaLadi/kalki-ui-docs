import React from 'react';

interface SideMenuProps {
  children: React.ReactNode;
}

export const SideMenu: React.FC<SideMenuProps> = ({ children }) => (
  <div className="w-64 flex-shrink-0 hidden border-l lg:block">
    <div className="sticky top-8 p-6">
      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">On this page</h3>
      <nav className="space-y-2 text-muted-foreground">{children}</nav>
    </div>
  </div>
);
