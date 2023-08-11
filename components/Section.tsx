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
        "w-full min-h-screen",
        "flex flex-col items-center justify-center gap-3",
        "[&:not(:first-child)]:border-t-4 border-solid border-black",
        "pb-16 relative"
      )}
      ref={ref}
    />
  );
});
