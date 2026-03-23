import Placement from "./Placement";
import { macros } from "@/macros";
import Link from "next/link";

export default function PlacementList({ limit }) {
  const placement = limit ? macros.placements.slice(0, limit) : macros.placements;

  // this is broken on mobile view :(
  return (
    <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(3, 300px)" }}>
      {placement.map((_, index) => {
        const place = macros.placements[index];
        return (
            <Placement key={index} index={index} />
        );
      })}
    </div>
  );
}
