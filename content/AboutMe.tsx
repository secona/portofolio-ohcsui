import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

export const AboutMe = () => {
  return (
    <Section className="bg-blue-300">
      <Card className="max-w-2xl">
        <h1 className="text-7xl">About Me</h1>
        <p>
          I am a Computer Science student at Universitas Indonesia. I have been
          passionate in the world of Web Development since I was in junior high
          school. It started out as a joke to friends by changing scores to 100
          using the Chrome Dev Tools. Fast forward 5 years, I have multiple
          personal projects in Web Development and other areas of programming.
        </p>
      </Card>
    </Section>
  );
};
