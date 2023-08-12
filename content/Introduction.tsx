"use client";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { TypingCode } from "@/components/TypingCode";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ButtonLink } from "@/components/ButtonLink";

const rustCode = `#[derive(Default, PartialEq)]
pub struct Point<T = usize> {
    pub x: T,
    pub y: T,
}

impl Point<usize> {
    pub fn new(x: usize, y: usize) -> Self {
        Self { x, y }
    }
}`;

const reactCode = `export const Greeting = () => {
  const greetingToUse = (() => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) return 'Morning';
    if (hour >= 12 && hour < 18) return 'Afternoon';
    return 'Evening';
  })();

  return <h1>Good {greetingToUse}!</h1>;
};`;

const nodeCode = `async function main() {
  clients.connect();

  const app = createServer();

  app.listen(5000, () => {
    logger.info('Listening on port 5000 for ' + process.env.NODE_ENV);
  });
}`;

export const Introduction = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const mainY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section
      ref={ref}
      className="px-10 flex flex-col items-center justify-center"
    >
      <TypingCode code={rustCode} className="absolute left-[15%] top-[30%]" />
      <TypingCode code={reactCode} className="absolute right-[15%] top-[15%]" />
      <TypingCode code={nodeCode} className="absolute left-[47%] top-[62%]" />
      <motion.div style={{ y: mainY }}>
        <Card className="z-10 mb-2">
          <p className="text-lg">Hello, World! My name is</p>
          <h1 className="text-7xl">Vito Secona</h1>
          <h2 className="text-lg">Web Developer</h2>
        </Card>
        <ButtonLink href="#about-me" className="bg-orange-400">
          Learn More
        </ButtonLink>
      </motion.div>
    </Section>
  );
};
