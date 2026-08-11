export type Position = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: Position;
  delay?: number;
  className?: string;
  showArrow?: boolean;
  offset?: number;
}

export interface TooltipContextType {
  isOpen: boolean;
  position: Position;
  showArrow: boolean;
  offset: number;
  setIsOpen: (value: boolean) => void;
}
