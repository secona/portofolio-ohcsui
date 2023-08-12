"use client";
import { motion } from "framer-motion";

export interface RevealUpwardsProps {
  children: React.ReactNode;
}

export const RevealUpwards = (props: RevealUpwardsProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.5, once: true }}
      variants={{
        visible: {
          transform: "translateY(0)",
          scale: 1,
          opacity: 1,
        },
        hidden: {
          transform: "translateY(1rem)",
          scale: 0,
          opacity: 0,
        },
      }}
    >
      {props.children}
    </motion.div>
  );
};
