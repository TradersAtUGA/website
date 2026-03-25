import Placement from "./Placement";
import { macros } from "@/macros";
import Link from "next/link";

export default function PlacementList({ limit }) {
  const placement = limit ? macros.placements.slice(0, limit) : macros.placements;

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {placement.map((_, index) => {
        return (
            <Placement key={index} index={index} />
        );
      })}
    </div>
  );
}
