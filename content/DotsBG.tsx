"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export const DotsBG = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.div
      style={{ y }}
      className="bg-dots bg-[length:40px_40px] absolute top-0 left-0 h-full w-full"
    />
  );
};
