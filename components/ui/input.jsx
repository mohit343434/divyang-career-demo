import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm   file:bg-transparent file:text-sm  placeholder:text-muted-foreground focus-visible:outline-orange-500  focus-visible:ring-ring   disabled:cursor-not-allowed disabled:opacity-50",
        className   
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
