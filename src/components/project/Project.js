import { macros } from "@/macros";
import Image from "next/image";

export default function Project({ index }) {
  return (
    <div
      className="flex flex-col gap-2 items-center sm:items-start rounded-lg transition-transform group"
      key={index}
    >
      <div className="flex flex-col items-center sm:items-start">
        <div className="w-[270px] h-[200px] overflow-hidden rounded-lg">
          <Image
            src={macros.projects[index].img}
            alt={macros.projects[index].name}
            width={270}
            height={200}
            className="object-cover w-full h-full transform-gpu origin-center transition-transform group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-2 items-center py-4 w-full rounded-b-lg z-10 bg-background transition-color">
          <h2 className="font-bold">{macros.projects[index].name}</h2>
        </div>
      </div>
    </div>
  );
}
