"use client";
import { Button } from "@/components/Button";
import { ButtonLink } from "@/components/ButtonLink";
import { Input, TextArea } from "@/components/Input";
import { Section } from "@/components/Section";
import { cn } from "@/utils/classnames";
import { GitHub, Icon, Instagram, Linkedin, Twitter } from "react-feather";
import { useForm } from "react-hook-form";

interface Link {
  href: string;
  username: string;
  textClass: string;
  bgClass: string;
  icon: Icon;
}

const links: Link[] = [
  {
    href: "https://github.com/secona",
    username: "@secona",
    textClass: "text-white",
    bgClass: "bg-[#333333]",
    icon: GitHub,
  },
  {
    href: "https://linkedin.com/in/secona",
    username: "@secona",
    textClass: "text-white",
    bgClass: "bg-[#0077b5]",
    icon: Linkedin,
  },
  {
    href: "https://twitter.com/vitosecona",
    username: "@vitosecona",
    textClass: "text-white",
    bgClass: "bg-[#1DA1F2]",
    icon: Twitter,
  },
  {
    href: "https://instagram.com/vitosecona",
    username: "@vitosecona",
    textClass: "text-white",
    bgClass: "bg-[#405DE6]",
    icon: Instagram,
  },
];

export interface ContactMeForm {
  email: string;
  name: string;
  subject: string;
  message: string;
}

export const ContactMe = () => {
  const { register, handleSubmit, reset } = useForm<ContactMeForm>();

  return (
    <Section className="bg-red-400 grid grid-cols-2 gap-0">
      <form
        onSubmit={handleSubmit(async (v) => {
          await fetch("/api/contact-me", {
            method: "POST",
            body: JSON.stringify(v),
          });

          reset();
        })}
        className="flex flex-col gap-3 px-36"
      >
        <h1 className="text-7xl mb-4">Contact Me</h1>
        <Input {...register("email")} placeholder="Email" />
        <Input {...register("name")} placeholder="Name" />
        <Input {...register("subject")} placeholder="Subject" />
        <TextArea {...register("message")} placeholder="Message" rows={5} />
        <Button className="mx-auto">Send</Button>
      </form>
      <div className="border-l-4 border-solid border-black h-full bg-white flex flex-col justify-center px-36 gap-3">
        <h1 className="text-7xl mb-4">Social Media</h1>
        {links.map((link, i) => (
          <ButtonLink
            key={i}
            href={link.href}
            className={cn(link.bgClass, link.textClass)}
          >
            <link.icon />
            <span>{link.username}</span>
          </ButtonLink>
        ))}
      </div>
    </Section>
  );
};
