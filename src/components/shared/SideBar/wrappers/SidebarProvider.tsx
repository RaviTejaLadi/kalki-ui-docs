import React from 'react';
import { SidebarProviderProps } from '../types';
import { SidebarContext } from '../context';

export const SidebarProvider = ({
  children,
  defaultExpanded = false,
  defaultRailExpanded = true,
}: SidebarProviderProps) => {
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  const [railExpanded, setRailExpanded] = React.useState(defaultRailExpanded);

  return (
    <SidebarContext.Provider
      value={{
        expanded,
        setExpanded,
        railExpanded,
        setRailExpanded,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
