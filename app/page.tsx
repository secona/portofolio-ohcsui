import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { GitHubRepo } from "@/components/GitHubRepo";
import { Section } from "@/components/Section";
import { ReactLogo } from "@/icons/ReactLogo";
import { RustLogo } from "@/icons/RustLogo";
import { SCSSLogo } from "@/icons/SCSSLogo";
import { TSLogo } from "@/icons/TSLogo";
import { GitHub, Linkedin, Twitter } from "react-feather";

export default function Home() {
  return (
    <>
      <Section className="bg-gray-100">
        <Card className="py-6 px-8">
          <p className="text-sm">Hello, World! My name is</p>
          <h1 className="text-4xl font-black">Vito Secona</h1>
          <h2 className="font-black">Web Developer</h2>
        </Card>
        <div className="flex gap-3">
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
        <Card className="py-6 px-8 max-w-2xl">
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
        <div className="flex flex-wrap gap-4">
          <GitHubRepo
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
            path="secona/pinisi"
            description="File explorer in the command line"
            langLogos={
              <>
                <RustLogo />
              </>
            }
          />
        </div>
      </Section>
    </>
  );
}
