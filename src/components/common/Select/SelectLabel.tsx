import React from "react";
import { SelectLabelProps } from "./interfaces";
import { cn } from "@/utils";

export const SelectLabel = React.forwardRef<HTMLDivElement, SelectLabelProps>(
    ({ className, children, ...props }, ref) => {
      return (
        <div
          ref={ref}
          className={cn("px-2 py-1.5 text-sm font-semibold", className)}
          {...props}
        >
          {children}
        </div>
      );
    }
  );
  SelectLabel.displayName = "SelectLabel";