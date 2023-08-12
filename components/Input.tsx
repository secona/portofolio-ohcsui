import { cnProps } from "@/utils/classnames";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...cnProps(
        props,
        "shadow-hard shadow-black",
        "border-2 border-solid border-black",
        "outline-none",
        "px-2 py-1"
      )}
      ref={ref}
    />
  );
});
