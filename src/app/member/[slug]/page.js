import { macros } from "@/macros";
import Image from "next/image";
import Link from "next/link";
import "@/styles/animations.css";

export async function generateStaticParams() {
  return macros.members.map((member) => ({
    slug: member.slug,
  }));
}
export default function Page({ params }) {
  const member = macros.members.find((m) => m.slug === params.slug);

  if (!member) return <div>Member not found</div>;
  return (
    <div className="flex flex-col sm:flex-row gap-8 max-w-4xl mx-auto items-center justify-center text-center sm:text-left px-4 py-8">
      <div className="w-1/2 flex flex-col gap-4 fade-in-left">
        <div className="w-full h-[200px] overflow-hidden rounded-lg sm:hidden">
          <Image
            src={member.img}
            alt={member.name}
            width={400}
            height={400}
            className="object-cover w-full h-full transform-gpu origin-center transition-transform scale-100 group-hover:scale-105"
          />
        </div>
        <h1 className="text-4xl font-bold">{member.name}</h1>
        <p className="text-xl font-semibold">{member.role}</p>
        <p className="text-lg max-w-sm">{member.description}</p>
        <div className="flex gap-4 items-center justify-center mt-4 sm:justify-start">
          {member.socials.map((social, index) => (
            <a key={index} href={social.href} className="text-2xl">
              {social.icon}
            </a>
          ))}
        </div>
        <Link
          href="/about"
          className="text-lg text-blue-500 hover:text-blue-700"
        >
          See all members
        </Link>
      </div>
      <div className="w-1/2 hidden sm:block">
        <Image
          src={member.img}
          alt={member.name}
          width={400}
          height={400}
          className="rounded-lg fade-in-right"
        />
      </div>
    </div>
  );
}
