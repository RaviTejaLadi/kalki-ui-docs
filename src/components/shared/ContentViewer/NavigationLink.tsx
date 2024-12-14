import React from 'react';
import { ChevronRight } from 'lucide-react';

interface NavigationLinkProps {
  title: string;
  onClick: () => void;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({ title, onClick }) => (
  <button
    onClick={onClick}
    className="group flex items-center w-full px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
  >
    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
    {title}
  </button>
);
