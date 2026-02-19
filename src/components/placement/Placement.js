"use client";

import { macros } from "@/macros";
import Image from "next/image";


// export default function Placement({ index }) {
//     function handleClick() {
//         window.open(macros.placements[index].link, "_blank");
//     }

//     return (
//         <div
//         className="flex flex-col gap-4 items-center sm:items-start border border-white/[.145] rounded-lg max-w-[400px] hover:bg-[#1a1a1a] hover:border-transparent transition-color overflow-hidden group"
//         key={index}
//         onClick={handleClick}
//         >
//         <div className="flex flex-col items-center sm:items-start">
//             <div className="w-[800px] h-[400px] overflow-hidden rounded-t-lg">
//             <Image
//                 src={macros.placements[index].img}
//                 alt={macros.placements[index].company}
//                 width={400}
//                 height={400}
//                 className="object-cover w-full h-full transform-gpu origin-center transition-transform scale-100 group-hover:scale-105"
//             />
//             </div>
//             <div className="flex flex-col gap-2 items-center sm:items-start p-4 w-full rounded-b-lg z-10 bg-background group-hover:bg-[#1a1a1a] transition-color">
//             </div>
//         </div>
//         </div>
//     );
// }

export default function Placement({ index }) {
    function handleClick() {
        window.open(macros.placements[index].link, "_blank");
    }

    return (
        <div
            className="flex flex-col border border-white/[.145] rounded-lg w-[300px] hover:bg-[#1a1a1a] hover:border-transparent transition-colors overflow-hidden group cursor-pointer"
            key={index}
            onClick={handleClick}
        >
            <div className="w-full h-[180px] overflow-hidden flex items-center justify-center bg-[#111]">
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