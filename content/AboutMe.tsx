import { Section } from "@/components/Section";
import { cn } from "@/utils/classnames";

const paragraphCN = cn(
  "h-full w-full",
  "flex flex-col justify-center",
  "px-16 sm:px-24 md:px-48 lg:px-24 xl:px-36",
  "border-t-4 lg:border-t-0",
  "border-l-0 lg:border-l-4",
  "border-solid border-black"
);

export const AboutMe = () => {
  return (
    <Section
      id="about-me"
      className={cn(
        "grid",
        "h-[200vh] lg:h-[100vh]",
        "grid-rows-2 lg:grid-rows-1",
        "grid-cols-1 lg:grid-cols-2"
      )}
    >
      <div className={cn(paragraphCN, "bg-orange-400")}>
        <h1 className="text-7xl mb-4">About Me</h1>
        <p className="text-lg">
          I am a Web Developer and a dedicated student at University of
          Indonesia, majoring in Computer Science. I have been passionate about
          the world of Web Development since I was in junior high school. Fast
          forward a few years, I have multiple personal projects in Web
          Development and other areas of programming.
        </p>
      </div>
      <div className={cn(paragraphCN, "bg-blue-300")}>
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
