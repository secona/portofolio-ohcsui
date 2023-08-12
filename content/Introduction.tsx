"use client";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { TypingCode } from "@/components/TypingCode";
import { useRef } from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";
import { useScroll, useTransform, motion } from "framer-motion";

const rustCode = `#[derive(Default, PartialEq)]
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

const reactCode = `export const Greeting = () => {
  const greetingToUse = (() => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) return 'Morning';
    if (hour >= 12 && hour < 18) return 'Afternoon';
    return 'Evening';
  })();

  return <h1>Good {greetingToUse}!</h1>;
};`;

export const Introduction = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const mainY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <Section ref={ref} className="bg-gray-100">
      <motion.div
        style={{ y: bgY }}
        className="absolute w-full h-full top-0 left-0 bg-dots bg-[length:40px_40px]"
      />
      <TypingCode code={rustCode} className="absolute left-[15%] top-[25%]" />
      <TypingCode code={reactCode} className="absolute right-[15%] top-[55%]" />
      <motion.div style={{ y: mainY }}>
        <Card className="z-10">
          <p className="text-lg">Hello, World! My name is</p>
          <h1 className="text-7xl">Vito Secona</h1>
          <h2 className="text-lg">Web Developer</h2>
        </Card>
        <div className="flex gap-3 z-10">
          <ButtonLink href="https://github.com/secona" className="bg-[#333333]">
            <GitHub color="white" />
          </ButtonLink>
          <ButtonLink
            href="https://linkedin.com/in/secona"
            className="bg-[#0077b5]"
          >
            <Linkedin color="white" />
          </ButtonLink>
          <ButtonLink
            href="https://twitter.com/vitosecona"
            className="bg-[#1DA1F2]"
          >
            <Twitter color="white" />
          </ButtonLink>
        </div>
      </motion.div>
    </Section>
  );
};
