import { Section } from "@/components/Section";

export const AboutMe = () => {
  return (
    <Section className="bg-white grid grid-cols-2 gap-0">
      <div className="bg-orange-400 h-full w-full"></div>
      <div className="px-36 bg-blue-300 h-full w-full border-l-4 border-solid border-black flex flex-col justify-center">
        <h1 className="text-7xl mb-4">About Me</h1>
        <p className="text-lg">
          I am a Computer Science student at Universitas Indonesia. I have been
          passionate in the world of Web Development since I was in junior high
          school. It started out as a joke to friends by changing scores to 100
          using the Chrome Dev Tools. Fast forward 5 years, I have multiple
          personal projects in Web Development and other areas of programming.
        </p>
      </div>
    </Section>
  );
};
