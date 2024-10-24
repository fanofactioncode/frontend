import React, { forwardRef } from "react";
import { format } from "date-fns";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface DateButtonProps {
  date: Date;
  isActive?: boolean;
}

export const DateButton = forwardRef<
  HTMLButtonElement,
  ButtonProps & DateButtonProps
>(({ date, isActive, ...rest }, ref) => {
  return (
    <Button
      ref={ref}
      variant="outline"
      className={cn(
        "box-border flex !h-[75px] !w-[70px] flex-col items-center justify-center rounded-lg border border-secondary bg-background p-3",
        isActive && "border-primary bg-primary hover:bg-primary"
      )}
      {...rest}
    >
      <p
        className={cn(
          "truncate text-center text-xs text-primary dark:text-white",
          isActive && "!text-secondary"
        )}
      >
        {format(date, "EEEE")}
      </p>
      <p
        className={cn(
          "text-2xl font-bold text-primary dark:text-white",
          isActive && "!text-secondary"
        )}
      >
        {format(date, "dd")}
      </p>
    </Button>
  );
});

DateButton.displayName = "DateButton";
