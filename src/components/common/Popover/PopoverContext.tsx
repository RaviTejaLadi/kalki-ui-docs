import { createContext, useContext } from 'react';

interface PopoverContextType {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  triggerRef: React.RefObject<HTMLElement>;
  contentRef: React.RefObject<HTMLElement>;
}

export const PopoverContext = createContext<PopoverContextType | null>(null);

export const usePopover = () => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error('usePopover must be used within a Popover');
  }
  return context;
};
