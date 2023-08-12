import { Section } from "@/components/Section";

export const AboutMe = () => {
  return (
    <Section
      id="about-me"
      className="grid h-[200vh] lg:h-[100vh] grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-0"
    >
      <div className="bg-orange-400 px-16 sm:px-24 md:px-48 lg:px-24 xl:px-36 h-full w-full border-t-4 lg:border-t-0 border-l-0 lg:border-l-4 border-solid border-black flex flex-col justify-center">
        <h1 className="text-7xl mb-4">About Me</h1>
        <p className="text-lg">
          I am a Web Developer and a dedicated student at University of
          Indonesia, majoring in Computer Science. I have been passionate about
          the world of Web Development since I was in junior high school. Fast
          forward a few years, I have multiple personal projects in Web
          Development and other areas of programming.
        </p>
      </div>
      <div className="px-16 sm:px-24 md:px-48 lg:px-24 xl:px-36 bg-blue-300 h-full w-full border-t-4 lg:border-t-0 border-l-0 lg:border-l-4 border-solid border-black flex flex-col justify-center">
        <p className="text-lg">
          Fueled by curiosity and passion, I am eager to learn more about the
          world of Computer Science and Web Development. I am open to new
          challenges and new experiences, whether it is Web Development or other
          fields of Computer Science. Every opportunity is a chance for me to
          learn, improve my skills, becoming a better person, and make
          contributions to the world.
        </p>
      </div>
    </Section>
  );
};
