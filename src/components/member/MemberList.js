import Member from "./Member";
import { macros } from "@/macros";
import Link from "next/link";

export default function MemberList({ limit, alumni }) {
  const members = limit ? macros.members.slice(0, limit) : macros.members;

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((_, index) => {
        const member = macros.members[index];
        return (
          <Link href={`/member/${member.slug}`} key={index}>
            <Member key={index} index={index} />
          </Link>
        );
      })}
    </div>
  );
}
