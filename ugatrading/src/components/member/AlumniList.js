import Alumni from "./Alumni";
import { macros } from "@/macros";
import Link from "next/link";

export default function AlumniList({ limit }) {
  const alumni = limit ? macros.alumni.slice(0, limit) : macros.alumni;

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {alumni.map((_, index) => {
        const alum = macros.alumni[index];
        return (
          <Link href={`/alum/${alum.slug}`} key={index}>
            <Alumni key={index} index={index} />
          </Link>
        );
      })}
    </div>
  );
}
