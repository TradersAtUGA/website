import { macros } from "@/macros";
import Image from "next/image";
import Link from "next/link";
import "@/styles/animations.css";

export async function generateStaticParams() {
  return macros.alumni.map((alumni) => ({
    slug: alumni.slug,
  }));
}
export default function Page({ params }) {
  const alum = macros.alumni.find((m) => m.slug === params.slug);

  if (!alum) return <div>Member not found</div>;
  return (
    <div className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto h-[80vh] items-center justify-center text-center sm:text-left px-8">
      <div className="w-1/2 flex flex-col gap-4 fade-in-left">
        <div className="w-full h-[200px] overflow-hidden rounded-lg sm:hidden">
          <Image
            src={alum.img}
            alt={alum.name}
            width={400}
            height={400}
            className="object-cover w-full h-full transform-gpu origin-center transition-transform scale-100 group-hover:scale-105"
          />
        </div>
        <h1 className="text-4xl font-bold">{alum.name}</h1>
        <div className="text-lg font-semibold">
          <p className="text-lg max-w-sm">{alum.work.company}</p>
          <p className="text-lg max-w-sm">{alum.work.title}</p>
          <p className="text-lg max-w-sm">{alum.work.location}</p>
        </div>
        <p className="text-lg max-w-sm">{alum.description}</p>

        <div className="flex gap-4 items-center justify-center mt-4 sm:justify-start">
          {alum.socials.map((social, index) => (
            <a key={index} href={social.href} className="text-2xl">
              {social.icon}
            </a>
          ))}
        </div>
        <Link
          href="/alumni"
          className="text-lg text-blue-500 hover:text-blue-700"
        >
          See all alumni
        </Link>
      </div>
      <div className="w-1/2 hidden sm:block">
        <Image
          src={alum.img}
          alt={alum.name}
          width={400}
          height={400}
          className="rounded-lg fade-in-right"
        />
      </div>
    </div>
  );
}
