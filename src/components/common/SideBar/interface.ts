export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  showTrigger?: boolean;
  children?: React.ReactNode;
}

export interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  children?: React.ReactNode;
}

export interface SidebarMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string;
  icon?: React.ReactNode;
  active?: boolean;
}

export interface SidebarMenuBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  children: React.ReactNode;
}

export interface SidebarMenuSubProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
}

export interface SidebarMenuSubButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface SidebarMenuSubItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string;
  isOpen?: boolean;
  icon?: React.ReactNode;
}

export interface SidebarProviderProps {
  children: React.ReactNode;
  defaultExpanded?: boolean;
  defaultRailExpanded?: boolean;
}
export interface SidebarContextType {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
  railExpanded: boolean;
  setRailExpanded: (value: boolean) => void;
}
