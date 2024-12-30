import { CSSProperties, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
import { accordionVariants } from './accordionVariants';


type AccordionVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'help' | 'info' | 'dark' | 'light';

type AccordionSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface AccordionProps extends VariantProps<typeof accordionVariants> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: AccordionVariant;
  size?: AccordionSize;
}

interface AccordionItemProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

interface AccordionHeaderProps {
  children: ReactNode;
  eventKey: string;
  open?: boolean;
  icon?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

interface AccordionBodyProps {
  children: ReactNode;
  eventKey: string;
  className?: string;
  style?: CSSProperties;
}

export type {
  AccordionVariant,
  AccordionSize,
  AccordionProps,
  AccordionItemProps,
  AccordionHeaderProps,
  AccordionBodyProps,
};
