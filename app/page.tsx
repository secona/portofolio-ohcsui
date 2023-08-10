import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { GitHub, Linkedin, Twitter } from "react-feather";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center flex-col gap-3 pb-16">
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
      </div>
    </>
  );
}
