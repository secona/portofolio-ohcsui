import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { GitHubRepo } from "@/components/GitHubRepo";
import { Section } from "@/components/Section";
import { TypingCode } from "@/components/TypingCode";
import { ReactLogo } from "@/icons/ReactLogo";
import { RustLogo } from "@/icons/RustLogo";
import { SCSSLogo } from "@/icons/SCSSLogo";
import { TSLogo } from "@/icons/TSLogo";
import { GitHub, Linkedin, Twitter } from "react-feather";

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

export default function Home() {
  return (
    <>
      <Section className="bg-gray-100">
        <TypingCode code={rustCode} className="absolute left-[15%] top-[25%]" />
        <TypingCode
          code={reactCode}
          className="absolute right-[15%] top-[55%]"
        />
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
      </Section>
      <Section className="bg-blue-300">
        <Card className="max-w-2xl">
          <h1 className="text-6xl">About Me</h1>
          <p>
            I am a Computer Science student at Universitas Indonesia. I have
            been passionate in the world of Web Development since I was in
            junior high school. It started out as a joke to friends by changing
            scores to 100 using the Chrome Dev Tools. Fast forward 5 years, I
            have multiple personal projects in Web Development and other areas
            of programming.
          </p>
        </Card>
      </Section>
      <Section className="bg-yellow-300">
        <div className="flex flex-wrap gap-4 items-start">
          <GitHubRepo
            imageSrc="/task-tracker-screenshot.png"
            imageAlt="Task Tracker Screenshot"
            path="secona/task-tracker"
            description="Task tracking application"
            langLogos={
              <>
                <ReactLogo />
                <SCSSLogo />
                <TSLogo />
              </>
            }
          />
          <GitHubRepo
            imageSrc="/pinisi-screenshot.png"
            imageAlt="Pinisi Screenshot"
            path="secona/pinisi"
            description="File explorer in the command line (under development)"
            langLogos={
              <>
                <RustLogo />
              </>
            }
          />
        </div>
      </Section>
      <Section className="bg-red-300 grid grid-cols-2 pb-0">
        <div></div>
        <div className="border-l-4 border-solid border-black h-full bg-white"></div>
      </Section>
    </>
  );
}
