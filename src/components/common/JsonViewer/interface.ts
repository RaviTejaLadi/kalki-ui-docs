import { ReactNode } from 'react';
import { JsonReplacer } from './type';

export interface JsonViewerContextType {
  jsonData: string;
  copyToClipboard: () => void;
  copyButtonText: ReactNode;
}

export interface JsonViewerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  width?: string;
  height?: string;
  indentation?: number;
  replacer?: JsonReplacer;
  margin?: string;
  padding?: string;
  data: object | any[];
  children?: ReactNode;
  title?: ReactNode;
  copy?: boolean;
  className?: string;
}
export interface JsonViewerHeaderProps {
  children?: ReactNode;
  className?: string;
}

export interface JsonViewerContentProps {
  className?: string;
}
