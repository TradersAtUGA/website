import { macros } from "@/macros";
import Image from "next/image";

export default function Alumni({ index }) {
  return (
    <div
      className="flex flex-col gap-4 items-center sm:items-start border border-white/[.145] rounded-lg max-w-[300px] hover:bg-[#1a1a1a] hover:border-transparent transition-color overflow-hidden group"
      key={index}
    >
      <div className="flex flex-col items-center sm:items-start">
        <div className="w-[200px] h-[200px] overflow-hidden rounded-t-lg">
          <Image
            src={macros.alumni[index].img}
            alt={macros.alumni[index].name}
            width={200}
            height={200}
            className="object-cover w-full h-full transform-gpu origin-center transition-transform scale-100 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-2 items-center sm:items-start p-4 w-full rounded-b-lg z-10 bg-background group-hover:bg-[#1a1a1a] transition-color">
          <h2
            className="font-bold"
            style={{
              fontSize:
                macros.alumni[index].name.length > 17 ? "0.9rem" : "1.1rem",
            }}
          >
            {macros.alumni[index].name}
          </h2>
          <p className="text-center sm:text-left">
            {macros.alumni[index].role}
          </p>
        </div>
      </div>
    </div>
  );
}
