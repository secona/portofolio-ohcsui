import { cnProps } from "@/utils/classnames";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export const Section = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return (
    <div
      {...cnProps(
        props,
        "w-full",
        "[&:not(:first-child)]:border-t-4 border-solid border-black",
        "relative"
      )}
      ref={ref}
    />
  );
});
