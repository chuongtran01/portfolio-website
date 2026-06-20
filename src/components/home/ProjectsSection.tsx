"use client";

import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import SectionLabel from "@/components/home/SectionLabel";
import { fetchProjects, type UiProject } from "@/services/projects";
import { useQuery } from "@tanstack/react-query";

function ProjectList({ projects }: { projects: UiProject[] }) {
  return (
    <div className="flex flex-col gap-12">
      {projects.map((project) => (
        <article key={`${project.id}-${project.name}`} className="group space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
              {project.name}
            </h3>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-muted-foreground transition-colors hover:text-primary"
              aria-label={`Open ${project.name}`}
            >
              <ExternalLink className="size-5" />
            </a>
          </div>
          {project.description && (
            <p className="text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          )}
          {project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-border bg-card/60 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          )}
          {project.topics.length > 0 && (
            <div className="flex flex-wrap gap-x-3 gap-y-2 pt-1">
              {project.topics.map((topic) => (
                <span key={topic} className="font-mono text-xs text-primary/80">
                  #{topic}
                </span>
              ))}
            </div>
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
    <section className="border-t border-border pt-8">
      <div className="mb-12 grid gap-4 sm:grid-cols-[8rem_1fr]">
        <SectionLabel>Projects</SectionLabel>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Selected tools and applications that show how I approach product
          problems, automation, and full-stack development.
        </p>
      </div>

      {isPending && (
        <p className="font-mono text-xs text-muted-foreground">Loading projects...</p>
      )}
      {isError && (
        <p className="font-mono text-xs text-muted-foreground">
          Unable to load GitHub projects.
        </p>
      )}
      {!isPending && !isError && <ProjectList projects={projects} />}
    </section>
  );
}
