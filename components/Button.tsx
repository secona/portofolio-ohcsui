import { cn, cnProps } from "@/utils/classnames";
import { ComponentPropsWithoutRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...cnProps(props, "disabled:bg-zinc-700 disabled:text-zinc-500")}>
      {children}
    </button>
  );
};
