import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-block font-bold text-center align-middle",
  {
    variants: {
      size: {
        sm: "text-xs py-1 px-2 rounded-sm",
        md: "text-sm py-1.5 px-3 rounded-md",
        lg: "text-base py-2 px-4 rounded-lg",
      },
      variant: {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-600 text-white",
        success: "bg-green-500 text-white",
        danger: "bg-red-500 text-white",
        warning: "bg-yellow-500 text-black",
        info: "bg-teal-500 text-white",
        help: "bg-purple-600 text-white",
        light: "bg-gray-100 text-black",
        dark: "bg-gray-800 text-white",
      },
      pill: {
        true: "rounded-full",
        false: "",
      },
    },
    defaultVariants: {
      size: "sm",
      variant: "primary",
      pill: false,
    },
  }
);
