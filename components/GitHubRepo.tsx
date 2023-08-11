import Link from "next/link";
import { Card } from "./Card";
import { ReactNode } from "react";
import { ExternalLink } from "react-feather";

interface GitHubRepoProps {
  path: string;
  description: string;
  langLogos?: ReactNode;
}

export const GitHubRepo = (props: GitHubRepoProps) => {
  return (
    <Card className="py-6 px-8 w-96">
      <Link
        href={`https://github.com/${props.path}`}
        className="text-xl font-bold underline text-center"
      >
        <span className="mr-1">{props.path}</span>
        <ExternalLink size="1rem" className="inline" />
      </Link>
      <p>{props.description}</p>
      <div className="flex gap-2 mt-2">{props.langLogos}</div>
    </Card>
  );
};
