import Placement from "./Placement";
import { macros } from "@/macros";
import Link from "next/link";

export default function PlacementList({ limit }) {
  const placement = limit ? macros.placements.slice(0, limit) : macros.placements;

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {placement.map((_, index) => {
        const place = macros.placements[index];
        return (
            <Placement key={index} index={index} />
        );
      })}
    </div>
  );
}
