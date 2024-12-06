import { VariantProps } from "class-variance-authority";
import { boxVariants } from "./boxVariants";

export type BoxProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof boxVariants> & {
    width?: string;
    height?: string;
    color?: string;
    backgroundColor?: string;
    margin?: string;
    padding?: string;
  };
