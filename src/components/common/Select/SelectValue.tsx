import React from "react";
import { SelectValueProps } from "./interfaces";
import { SelectContext } from "./Select";
import { cn } from "@/utils";

export const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
  ({ placeholder, className }, ref) => {
    const { value } = React.useContext(SelectContext);

    return (
      <span
        ref={ref}
        className={cn(
          "block truncate",
          value ? "" : "text-muted-foreground",
          className
        )}
      >
        {value || placeholder}
      </span>
    );
  }
);
SelectValue.displayName = "SelectValue";
