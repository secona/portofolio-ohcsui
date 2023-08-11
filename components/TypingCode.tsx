"use client";
import { cnProps } from "@/utils/classnames";
import { Card, CardProps } from "./Card";
import { useEffect, useState } from "react";

export interface TypingCodeProps extends CardProps {
  code: string;
}

export const TypingCode = ({ code, ...props }: TypingCodeProps) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (running)
      if (index < code.length) {
        const timeout = setTimeout(() => {
          setText(text + code[index]);
          setIndex(index + 1);
        }, 50);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setText("");
          setIndex(0);
        }, 3000);

        return () => clearTimeout(timeout);
      }
  });

  if (text === "") return <></>;

  return (
    <Card
      onMouseEnter={() => setRunning(false)}
      onMouseLeave={() => setRunning(true)}
      titleBar
      {...cnProps(props, "select-none")}
    >
      <pre>{text}</pre>
    </Card>
  );
};
