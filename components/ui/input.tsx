import * as React from "react";
import { cn } from "@/lib/utils";

// Forward the ref and define the Input component
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type} // Ensure type is always defined
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props} // Spread any additional props to the input
      />
    );
  }
);

// Set the display name for the Input component for better debugging
Input.displayName = "Input";

// Export the Input component
export { Input };
