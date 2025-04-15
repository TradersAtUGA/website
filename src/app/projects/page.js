import ProjectList from "@/components/project/ProjectList";

export default function Page() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] fade-in-up w-full flex flex-col gap-8 items-center pt-20 max-w-4xl mx-auto p-4">
      <h2 className="text-4xl font-bold mt-20">Projects</h2>
      <ProjectList />
    </div>
  );
}
