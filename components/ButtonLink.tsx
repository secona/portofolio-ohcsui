import { cn } from "@/utils/classnames";
import Link, { LinkProps } from "next/link";
import React from "react";

export interface ButtonLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

export const ButtonLink = ({
  children,
  className,
  ...props
}: ButtonLinkProps) => {
  return (
    <Link {...props}>
      <button
        className={cn(
          className,
          "inline-flex gap-1 items-center p-2 cursor-pointer",
          "shadow-hard shadow-black",
          "border-2 border-black border-solid",
          "text-sm"
        )}
      >
        {children}
      </button>
    </Link>
  );
};
