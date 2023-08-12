import { Button } from "@/components/Button";
import { Input, TextArea } from "@/components/Input";
import { Section } from "@/components/Section";

export const ContactMe = () => {
  return (
    <Section className="bg-red-300 grid grid-cols-2 pb-0">
      <form className="flex flex-col gap-3 px-36">
        <h1 className="text-7xl mb-4">Contact Me</h1>
        <Input placeholder="Email" />
        <Input placeholder="Name" />
        <Input placeholder="Subject" />
        <TextArea placeholder="Message" rows={5} />
        <Button className="mx-auto">Send</Button>
      </form>
      <div className="border-l-4 border-solid border-black h-full bg-white"></div>
    </Section>
  );
};
