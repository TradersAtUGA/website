import Project from "./Project";
import { macros } from "@/macros";
import Link from "next/link";

export default function ProjectList({ limit }) {
  const projects = limit ? macros.projects.slice(0, limit) : macros.projects;
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((_, index) => (
        <Link href={`/project/${index}`} key={index}>
          <Project key={index} index={index} />
        </Link>
      ))}
    </div>
  );
}
