"use client";

import { macros } from "@/macros";
import Image from "next/image";


export default function Placement({ index }) {
    function handleClick() {
        window.open(macros.placements[index].link, "_blank");
    }

    return (
        <div
            className="flex flex-col border border-white/20 rounded-lg w-[300px] h-[180px] hover:bg-[#e6e6e6] hover:border-white/40 transition-colors overflow-hidden group cursor-pointer bg-[#1E2A3A]"
            onClick={handleClick}
        >
            <div className="w-full h-full overflow-hidden flex items-center justify-center">
                <Image
                    src={macros.placements[index].img}
                    alt={macros.placements[index].company}
                    width={300}
                    height={180}
                    className="object-contain w-full h-full p-4 transform-gpu transition-transform scale-100 group-hover:scale-105"
                />
            </div>
        </div>
    );
}