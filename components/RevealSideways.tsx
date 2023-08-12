"use client";
import { motion } from "framer-motion";
import React from "react";

export interface RevealSideways {
  children: React.ReactNode;
  /** -1 for left, 1 for right */
  direction?: number;
}

export const RevealSideways = (props: RevealSideways) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.5, once: true }}
      variants={{
        visible: {
          transform: "translateX(0)",
          scale: 1,
          opacity: 1,
        },
        hidden: {
          transform: `translateX(${(props.direction || 1) * -1}rem)`,
          scale: 0,
          opacity: 0,
        },
      }}
    >
      {props.children}
    </motion.div>
  );
};
