import { GitHubRepo } from "@/components/GitHubRepo";
import { Section } from "@/components/Section";
import { ReactLogo } from "@/icons/ReactLogo";
import { RustLogo } from "@/icons/RustLogo";
import { SCSSLogo } from "@/icons/SCSSLogo";
import { TSLogo } from "@/icons/TSLogo";

export const GitHubProjects = () => {
  return (
    <Section className="bg-yellow-300">
      <div className="flex flex-wrap gap-4 items-start">
        <GitHubRepo
          imageSrc="/task-tracker-screenshot.png"
          imageAlt="Task Tracker Screenshot"
          path="secona/task-tracker"
          description="Task tracking application"
          langLogos={
            <>
              <ReactLogo />
              <SCSSLogo />
              <TSLogo />
            </>
          }
        />
        <GitHubRepo
          imageSrc="/pinisi-screenshot.png"
          imageAlt="Pinisi Screenshot"
          path="secona/pinisi"
          description="File explorer in the command line (under development)"
          langLogos={
            <>
              <RustLogo />
            </>
          }
        />
      </div>
    </Section>
  );
};
