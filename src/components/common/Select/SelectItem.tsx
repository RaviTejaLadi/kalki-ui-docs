import React from "react";
import { SelectItemProps } from "./interfaces";
import { SelectContext } from "./Select";
import { Check } from "lucide-react";
import { cn } from "@/utils";

export const SelectItem = React.forwardRef<HTMLButtonElement, SelectItemProps>(
  ({ className, children, value, disabled = false, ...props }, ref) => {
    const { value: selectedValue, onValueChange } =
      React.useContext(SelectContext);
    const isSelected = selectedValue === value;

    return (
      <button
        ref={ref}
        role="option"
        aria-selected={isSelected}
        disabled={disabled}
        onClick={() => onValueChange?.(value)}
        className={cn(
          "flex w-full justify-between select-none items-center rounded-sm py-1.5 pl-2 pr-2 text-sm outline-none cursor-default",
          "focus:bg-accent focus:text-accent-foreground",
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          "hover:bg-gray-100 rounded",
          isSelected && "bg-accent text-accent-foreground",
          className
        )}
        {...props}
      >
        <span className="truncate">{children}</span>
        <span className=" left-2 flex h-3.5 w-3.5 items-center justify-center">
          {isSelected && <Check className="h-4 w-4" />}
        </span>
      </button>
    );
  }
);
SelectItem.displayName = "SelectItem";
