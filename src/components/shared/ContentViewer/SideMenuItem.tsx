import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useContentViewer } from './context/context';

interface SideMenuItemProps {
  id: string;
  children: React.ReactNode;
}

export const SideMenuItem: React.FC<SideMenuItemProps> = ({ id, children }) => {
  const { setActiveId, activeId } = useContentViewer();

  return (
    <button
      onClick={() => setActiveId(id)}
      className={`group flex items-center w-full px-3 py-2 text-sm 
        ${activeId === id ? 'text-blue-600 bg-blue-50' : 'text-gray-600'} 
        hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150`}
    >
      <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
      {children}
    </button>
  );
};
