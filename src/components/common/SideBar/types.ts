interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  showTrigger?: boolean;
  children?: React.ReactNode;
}

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  children?: React.ReactNode;
}

interface SidebarMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string;
  icon?: React.ReactNode;
  active?: boolean;
}

interface SidebarMenuBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  children: React.ReactNode;
}

interface SidebarMenuSubProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
}

interface SidebarMenuSubButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface SidebarMenuSubItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string;
  isOpen?: boolean;
  icon?: React.ReactNode;
}

interface SidebarProviderProps {
  children: React.ReactNode;
  defaultExpanded?: boolean;
  defaultRailExpanded?: boolean;
}
interface SidebarContextType {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
  railExpanded: boolean;
  setRailExpanded: (value: boolean) => void;
}

export type {
  SidebarProps,
  SidebarContentProps,
  SidebarHeaderProps,
  SidebarFooterProps,
  SidebarGroupProps,
  SidebarMenuProps,
  SidebarMenuItemProps,
  SidebarMenuBadgeProps,
  SidebarMenuSubProps,
  SidebarMenuSubButtonProps,
  SidebarMenuSubItemProps,
  SidebarProviderProps,
  SidebarContextType,
};
