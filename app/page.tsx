import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { GitHub, Linkedin, Twitter } from "react-feather";

export default function Home() {
  return (
    <>
      <Card>
        <h1 className="font-bold">Hello World</h1>
      </Card>
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
    </>
  );
}
