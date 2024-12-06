import { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonVariants } from "./buttonVariants";
import { VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

export interface ButtonIconProps {
  children: ReactNode;
  className?: string;
}

export interface ButtonTextProps {
  children: ReactNode;
  className?: string;
}
