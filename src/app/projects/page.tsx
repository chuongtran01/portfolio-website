"use client";

import GitHubProjects from "@/components/projects/GitHubProjects";
import { fetchProjects } from "@/services/projects";
import { useQuery } from "@tanstack/react-query";

export default function ProjectsPage() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return (
    <div className="min-h-screen bg-background">
      <main className="flex items-start xl:items-center justify-center min-h-screen px-8 py-16 pt-24 xl:pt-16">
        <div className="max-w-4xl w-full space-y-12">
          {isError ? (
            <p className="text-center text-sm text-destructive" role="alert">
              {error instanceof Error ? error.message : "Something went wrong"}
            </p>
          ) : (
            <GitHubProjects isLoading={isPending} projects={data ?? []} />
          )}
        </div>
      </main>
    </div>
  );
}
