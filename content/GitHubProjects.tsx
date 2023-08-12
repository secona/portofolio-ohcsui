import { GitHubRepo } from "@/components/GitHubRepo";
import { Section } from "@/components/Section";
import { ReactLogo } from "@/icons/ReactLogo";
import { RustLogo } from "@/icons/RustLogo";
import { SCSSLogo } from "@/icons/SCSSLogo";
import { TSLogo } from "@/icons/TSLogo";

export const GitHubProjects = () => {
  return (
    <Section id="github-projects" className="bg-yellow-300 py-24 px-5">
      <div className="flex flex-col gap-9">
        <h1 className="text-7xl text-center">My Projects</h1>
        <div className="flex flex-row flex-wrap gap-4 items-start justify-center">
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
          <GitHubRepo
            imageSrc="/mineswpr-screenshot.png"
            imageAlt="Mineswpr Screenshot"
            path="secona/mineswpr"
            description="Minesweeper clone in the command line written in Rust."
            langLogos={
              <>
                <RustLogo />
              </>
            }
          />
        </div>
      </div>
    </Section>
  );
};
