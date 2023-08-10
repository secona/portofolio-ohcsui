import { ComponentPropsWithoutRef, forwardRef } from "react";

export const Card = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        {...props}
        className={
          "border-2 border-solid border-black " +
          "shadow-hard shadow-black " +
          "bg-white " +
          className
        }
        ref={ref}
      />
    );
  }
);
