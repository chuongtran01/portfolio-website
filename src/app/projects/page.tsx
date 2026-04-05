"use client";

import GitHubProjects from "@/components/projects/GitHubProjects";
import { fetchProjects } from "@/services/projects";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

export default function ProjectsPage() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return (
    <div className="min-h-screen bg-background">
      <main className="flex items-start xl:items-center justify-center min-h-screen px-8 py-16 pt-24 xl:pt-16">
        <div className="max-w-4xl w-full space-y-12">
          {isPending ? (
            <div className="flex justify-center py-16" aria-busy="true" aria-label="Loading projects">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : isError ? (
            <p className="text-center text-sm text-destructive" role="alert">
              {error instanceof Error ? error.message : "Something went wrong"}
            </p>
          ) : (
            <GitHubProjects projects={data ?? []} />
          )}
        </div>
      </main>
    </div>
  );
}
