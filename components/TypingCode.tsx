"use client";
import { Card, CardProps } from "./Card";
import { useEffect, useState } from "react";

export interface TypingCodeProps extends CardProps {
  code: string;
}

export const TypingCode = ({ code, ...props }: TypingCodeProps) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
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
    <Card titleBar {...props}>
      <pre>{text}</pre>
    </Card>
  );
};
