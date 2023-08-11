"use client";
import { Card } from "./Card";
import { useEffect, useState } from "react";

const code = `#[derive(Default, PartialEq)]
pub struct Point<T = usize> {
    pub x: T,
    pub y: T,
}

impl Point<usize> {
    pub fn new(x: usize, y: usize) -> Self {
        Self { x, y }
    }
}
`;

export const TypingCode = () => {
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

  return (
    <Card titleBar className="absolute left-[15%] top-[25%]">
      <pre>{text}</pre>
    </Card>
  );
};
