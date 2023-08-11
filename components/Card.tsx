import { cnProps } from "@/utils/classnames";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export interface CardProps extends ComponentPropsWithoutRef<"div"> {
  titleBar?: boolean;
}

<div className="h-2 block"></div>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ titleBar, children, ...props }, ref) => {
    return (
      <div
        {...cnProps(
          props,
          "border-2 border-solid border-black",
          "shadow-hard shadow-black",
          "bg-white",
          "py-6 px-8",
          titleBar ? "pt-10" : ""
        )}
        ref={ref}
      >
        {titleBar && (
          <div className="pointer-events-none absolute top-0 left-0 h-6 w-full bg-orange-400 border-b-2 border-solid border-black flex justify-between px-2">
            <span>ooo</span>
            <span>x</span>
          </div>
        )}
        {children}
      </div>
    );
  }
);
