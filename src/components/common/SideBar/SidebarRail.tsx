import React from "react";
import { SidebarProps } from "./types";
import { cn } from "@/utils";
import { useSidebar } from "./context";

export const SidebarRail = React.forwardRef<HTMLDivElement, SidebarProps>(({ className, children, ...props }, ref) => {
    const { railExpanded } = useSidebar();
  
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col border-r bg-gray-50 transition-all duration-300',
          railExpanded ? 'w-16' : 'w-12',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  });
  SidebarRail.displayName = 'SidebarRail';