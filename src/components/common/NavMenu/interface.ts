export interface NavMenuProps {
  children: React.ReactNode;
  className?: string;
}

export interface NavMenuListProps {
  children: React.ReactNode;
  className?: string;
  openMenuItem?: string | null;
  setOpenMenuItem?: (title: string | null) => void;
}

export interface NavMenuItemProps {
  to?: string;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  openMenuItem?: string | null;
  setOpenMenuItem?: (title: string | null) => void;
  variant?: 'light' | 'dark' | 'outline' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export interface NavMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface NavMenuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  to: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string;
}

export interface NavMenuContentPosition {
  top: number;
  left: number;
}

export interface NavMenuContentProps {
  children: React.ReactNode;
  className?: string;
  position: NavMenuContentPosition;
}

export interface NavMenuItemTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface NavMenuItemContentProps {
  children: React.ReactNode;
  className?: string;
}
