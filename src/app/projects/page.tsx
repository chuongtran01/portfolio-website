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
      <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-6 py-28 sm:py-36">
        <div className="w-full space-y-12">
          {isError ? (
            <div className="space-y-6">
              <GitHubProjects isLoading={false} />
              <p className="border-t border-border pt-6 font-mono text-xs text-muted-foreground" role="status">
                Live GitHub projects are unavailable locally:{" "}
                {error instanceof Error ? error.message : "Something went wrong"}
              </p>
            </div>
          ) : (
            <GitHubProjects isLoading={isPending} projects={data ?? []} />
          )}
        </div>
      </main>
    </div>
  );
}
