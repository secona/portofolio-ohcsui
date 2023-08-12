import { cn, cnProps } from "@/utils/classnames";
import { ComponentPropsWithoutRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...cnProps(
        props,
        "bg-black text-white py-2 px-6",
        "disabled:bg-zinc-700 disabled:text-zinc-500"
      )}
    >
      {children}
    </button>
  );
};
