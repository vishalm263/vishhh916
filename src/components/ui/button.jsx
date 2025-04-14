import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        
        // Variants
        variant === "default" && "bg-tertiary text-white hover:bg-tertiary/90",
        variant === "destructive" && "bg-red-500 text-white hover:bg-red-500/90",
        variant === "outline" && "border border-input hover:bg-accent hover:text-accent-foreground",
        variant === "secondary" && "bg-secondary text-white hover:bg-secondary/80",
        variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
        variant === "link" && "underline-offset-4 hover:underline text-primary",
        
        // Sizes
        size === "default" && "h-10 py-2 px-4",
        size === "sm" && "h-9 px-3 rounded-md",
        size === "lg" && "h-11 px-8 rounded-md",
        size === "icon" && "h-10 w-10",
        
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button }; 