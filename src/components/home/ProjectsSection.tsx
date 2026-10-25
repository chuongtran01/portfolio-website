"use client";

import { ExternalLink } from "lucide-react";
import { fetchProjects, type UiProject } from "@/services/projects";
import { useQuery } from "@tanstack/react-query";
import MotionSection from "@/components/home/MotionSection";

function ProjectList({ projects }: { projects: UiProject[] }) {
  return (
    <div className="flex flex-col gap-12">
      {projects.map((project) => (
        <article key={`${project.id}-${project.name}`} className="group space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold tracking-tight text-foreground underline-offset-4 group-hover:underline">
              {project.name}
            </h3>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-foreground/70 transition-colors hover:text-foreground"
              aria-label={`Open ${project.name}`}
            >
              <ExternalLink className="size-5" />
            </a>
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
  const { data: projects = [], isError, isPending } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return (
    <MotionSection
      id="projects"
      className="scroll-mt-20 space-y-10"
    >
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Projects
      </h2>

      {isPending && (
        <p className="text-sm text-foreground/70">Loading projects...</p>
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
