import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { badgeVariants } from "./badgeVariants";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}
