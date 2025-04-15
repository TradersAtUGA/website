import { macros } from "@/macros";
import Image from "next/image";
import Link from "next/link";
import "@/styles/animations.css";

export default function Page({ params }) {
  const id = params.id;
  const project = macros.projects[id];
  return (
    <div className="flex flex-col sm:flex-row gap-16 max-w-4xl h-full mx-auto items-center justify-center text-center sm:text-left px-8 min-h-[70vh]">
      <div className="w-full fade-in-right relative flex flex-col gap-4 items-center justify-center h-[300px]">
        <Image
          src={project.img}
          alt={project.name}
          width={440}
          height={300}
          className="rounded-lg w-[440px] h-[300px] object-cover transform-gpu origin-center transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-4 fade-in-left">
        <h1 className="text-4xl font-bold">{project.name}</h1>

        <div className="text-lg max-w-sm w-[400px]">
          {project.description.map((para, i) => (
            <p key={i} className="mb-4">{para}</p>
          ))}
        </div>
        <div className="flex gap-4 items-center justify-center mt-4 sm:justify-start">
          {project.socials.map((social, index) => (
            <a key={index} href={social.href} className="text-2xl">
              {social.icon}
            </a>
          ))}
        </div>
        <Link
          href="/projects"
          className="text-lg text-blue-500 hover:text-blue-700"
        >
          See all projects
        </Link>
      </div>
    </div>
  );
}
