"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { fetchProjects, type UiProject } from "@/services/projects";
import { useQuery } from "@tanstack/react-query";
import MotionSection from "@/components/home/MotionSection";

function ProjectList({ projects }: { projects: UiProject[] }) {
  return (
    <div className="flex flex-col gap-12">
      {projects.map((project) => (
        <article
          key={`${project.id}-${project.name}`}
          className="group space-y-3"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold tracking-tight text-foreground underline-offset-4 group-hover:underline">
              {project.name}
            </h3>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="-mt-1 text-foreground/70 hover:text-foreground"
                >
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.name} on GitHub`}
                  >
                    <ExternalLink className="size-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Open on GitHub</TooltipContent>
            </Tooltip>
          </div>
          {project.description && (
            <p className="max-w-2xl text-base leading-relaxed text-foreground/85">
              {project.description}
            </p>
          )}
          {project.techStack.length > 0 && (
            <p className="text-sm font-medium text-foreground/70">
              {project.techStack.join(" · ")}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  const {
    data: projects = [],
    isError,
    isPending,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return (
    <MotionSection id="projects" className="scroll-mt-20 space-y-10">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Projects
      </h2>

      {isPending && (
        <div
          className="space-y-10"
          aria-busy="true"
          aria-label="Loading projects"
        >
          {[0, 1].map((i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-full max-w-2xl" />
              <Skeleton className="h-4 w-2/3 max-w-xl" />
            </div>
          ))}
        </div>
      )}
      {isError && (
        <p className="text-sm text-foreground/70">
          Unable to load GitHub projects.
        </p>
      )}
      {!isPending && !isError && <ProjectList projects={projects} />}
    </MotionSection>
  );
}
