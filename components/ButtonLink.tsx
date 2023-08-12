import { cnProps } from "@/utils/classnames";
import Link, { LinkProps } from "next/link";
import React from "react";

export interface ButtonLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

export const ButtonLink = (props: ButtonLinkProps) => {
  return (
    <Link
      href={props.href}
      {...cnProps(
        props,
        "inline-flex gap-2 items-center py-2 px-3 cursor-pointer",
        "shadow-hard shadow-black",
        "border-2 border-black border-solid",
        "text-lg"
      )}
    />
  );
};
