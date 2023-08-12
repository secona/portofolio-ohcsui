import { Input } from "@/components/Input";
import { Section } from "@/components/Section";

export const ContactMe = () => {
  return (
    <Section className="bg-red-300 grid grid-cols-2 pb-0">
      <form className="flex flex-col gap-2 px-36">
        <h1 className="text-7xl">Contact Me</h1>
        <Input placeholder="Email" />
        <Input placeholder="Name" />
        <Input placeholder="Subject" />
      </form>
      <div className="border-l-4 border-solid border-black h-full bg-white"></div>
    </Section>
  );
};
