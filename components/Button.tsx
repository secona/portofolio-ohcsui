import { cn, cnProps } from "@/utils/classnames";
import { ComponentPropsWithoutRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...cnProps(props, "bg-black py-2 px-6 text-white")}>
      {children}
    </button>
  );
};
