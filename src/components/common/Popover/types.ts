export type Position = 'top' | 'bottom' | 'left' | 'right';
export type Alignment = 'start' | 'center' | 'end';

export interface PopoverProps {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  className?: string;
}

export interface PopoverTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export interface PopoverContentProps {
  children: React.ReactNode;
  position?: Position;
  align?: Alignment;
  offset?: number;
  className?: string;
}
