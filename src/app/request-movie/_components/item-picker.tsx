import React, { forwardRef } from "react";

import { ArrowDownIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const Picker = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "flex cursor-pointer flex-col gap-2 p-6 sm:flex-1",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});
Picker.displayName = "Picker";

const PickerHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    >
      {children}
    </div>
  );
});
PickerHeader.displayName = "PickerHeader";

const PickerTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("select-none text-base font-semibold text-text", className)}
      {...props}
    >
      {children}
    </p>
  );
});
PickerTitle.displayName = "PickerTitle";

const PickerDownIcon = forwardRef<
  HTMLOrSVGElement,
  React.SVGProps<SVGSVGElement>
>(({ ...props }, ref) => {
  return (
    <ArrowDownIcon
      size={18}
      className="fill-primary stroke-primary"
      ref={ref}
      {...props}
    />
  );
});
PickerDownIcon.displayName = "PickerDownIcon";

const PickerDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("select-none text-left text-text-sub", className)}
      {...props}
    >
      {children}
    </p>
  );
});
PickerDescription.displayName = "PickerDescription";

export { Picker, PickerDescription, PickerDownIcon, PickerHeader, PickerTitle };
