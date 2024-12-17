export interface SelectProps extends React.SelectHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  error?: boolean;
}

export interface SelectContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

export interface SelectValueProps {
  placeholder?: string;
  className?: string;
}

export interface SelectContentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SelectLabelProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SelectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export interface SelectSeparatorProps {
  className?: string;
}
