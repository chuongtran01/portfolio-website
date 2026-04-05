import WorkExperience from "@/components/experience/WorkExperience";
import { workExperience } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex items-start xl:items-center justify-center min-h-screen px-8 py-16 pt-24">
        <div className="max-w-4xl w-full space-y-12">
          <WorkExperience workExperience={workExperience} />
        </div>
      </main>
    </div>
  );
}
