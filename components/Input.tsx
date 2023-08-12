import { cnProps } from "@/utils/classnames";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const defaultInputClassnames = [
  "shadow-hard shadow-black",
  "border-2 border-solid border-black",
  "outline-none",
  "px-2 py-1",
];

export interface InputProps extends ComponentPropsWithoutRef<"input"> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input {...cnProps(props, ...defaultInputClassnames)} ref={ref} />;
});

export interface TextAreaProps extends ComponentPropsWithoutRef<"textarea"> {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return (
      <textarea
        {...cnProps(props, ...defaultInputClassnames, "resize-none")}
        ref={ref}
      />
    );
  }
);
