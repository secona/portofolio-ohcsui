import Link from "next/link";
import { Card } from "./Card";

export const GitHubRepo = () => {
  return (
    <Card className="py-6 px-8">
      <Link href="#" className="text-xl font-bold underline">
        secona/task-tracker
      </Link>
      <p>Task tracking application</p>
    </Card>
  );
};
