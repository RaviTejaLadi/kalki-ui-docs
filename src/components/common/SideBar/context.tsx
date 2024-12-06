import React from 'react';
import { SidebarContextType } from './interface';

export const SidebarContext = React.createContext<SidebarContextType>({
  expanded: true,
  setExpanded: () => {},
  railExpanded: false,
  setRailExpanded: () => {},
});

export const useSidebar = () => React.useContext(SidebarContext);
