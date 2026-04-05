"use client";

import GitHubProjects from "@/components/projects/GitHubProjects";
import { fetchProjects } from "@/services/projects";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

export default function ProjectsPageClient() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  if (isPending) {
    return (
      <div className="flex justify-center py-16" aria-busy="true" aria-label="Loading projects">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-sm text-destructive" role="alert">
        {error instanceof Error ? error.message : "Something went wrong"}
      </p>
    );
  }

  return <GitHubProjects projects={data ?? []} />;
}
