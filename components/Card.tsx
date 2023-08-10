import { cnProps } from "@/utils/classnames";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export const Card = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        {...cnProps(
          props,
          "border-2 border-solid border-black",
          "shadow-hard shadow-black",
          "bg-white"
        )}
        ref={ref}
      />
    );
  }
);
