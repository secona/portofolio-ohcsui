import { AboutMe } from "@/content/AboutMe";
import { ContactMe } from "@/content/ContactMe";
import { Footer } from "@/content/Footer";
import { GitHubProjects } from "@/content/GitHubProjects";
import { Introduction } from "@/content/Introduction";

export default function Home() {
  return (
    <>
      <Introduction />
      <AboutMe />
      <GitHubProjects />
      <ContactMe />
      <Footer />
    </>
  );
}
