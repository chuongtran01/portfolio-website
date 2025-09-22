import GitHubProjects from "@/components/projects/GitHubProjects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Chuong Tran",
  description: "Explore Chuong Tran's featured projects",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex items-start xl:items-center justify-center min-h-screen px-8 py-16 pt-24 xl:pt-16">
        <div className="max-w-4xl w-full space-y-12">
          <GitHubProjects />
        </div>
      </main>
    </div>
  );
}
