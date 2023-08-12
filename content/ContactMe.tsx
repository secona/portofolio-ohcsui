"use client";
import { Button } from "@/components/Button";
import { Input, TextArea } from "@/components/Input";
import { Section } from "@/components/Section";
import { useForm } from "react-hook-form";

export interface ContactMeForm {
  email: string;
  name: string;
  subject: string;
  message: string;
}

export const ContactMe = () => {
  const { register, handleSubmit, reset } = useForm<ContactMeForm>();

  return (
    <Section className="bg-red-300 grid grid-cols-2 pb-0">
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
      <div className="border-l-4 border-solid border-black h-full bg-white"></div>
    </Section>
  );
};
