import Image from "next/image";
import AlumniList from "@/components/member/AlumniList";
import "@/styles/animations.css";

export default function Page() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] fade-in-up w-full flex flex-col gap-8 items-center pt-20 max-w-4xl mx-auto p-4 min-h-[80vh]">
      <h2 className="text-4xl font-bold mt-20">Alumni</h2>
      <AlumniList />
    </div>
  );
}
