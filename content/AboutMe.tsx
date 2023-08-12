import { Section } from "@/components/Section";

export const AboutMe = () => {
  return (
    <Section
      id="about-me"
      className="bg-orange-400 grid h-[200vh] lg:h-[100vh] grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-0"
    >
      <div className="h-full w-full"></div>
      <div className="px-16 sm:px-24 md:px-48 lg:px-24 xl:px-36 bg-blue-300 h-full w-full border-t-4 lg:border-t-0 border-l-0 lg:border-l-4 border-solid border-black flex flex-col justify-center">
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
