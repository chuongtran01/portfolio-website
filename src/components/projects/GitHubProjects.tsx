"use client";

import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface Project {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  techStack: string[];
  topics: string[];
}

interface GitHubProjectsProps {
  projects?: Project[];
  isLoading?: boolean;
}

function ProjectCardSkeleton() {
  return (
    <div className="space-y-4 border-b border-border pb-10">
      <div className="flex items-start justify-between gap-4">
        <Skeleton className="h-7 flex-1 max-w-[220px]" />
        <Skeleton className="h-5 w-5 shrink-0 rounded" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-11/12 max-w-md" />
      <div className="flex flex-wrap gap-2 pt-1">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-[4.5rem] rounded-full" />
      </div>
    </div>
  );
}

// Sample projects data - you can replace this with your actual projects
const sampleProjects: Project[] = [
  {
    id: 1,
    name: "Brain Tumors Classification",
    description: "A brain tumors classification model using deep learning",
    html_url: "https://github.com/chuongtran01/brain-tumors-classification",
    techStack: ["Python", "TensorFlow"],
    topics: ["python", "machine-learning", "deep-learning", "classification"],
  },
  {
    id: 3,
    name: "Resume Builder",
    description: "A resume generator with AI-driven enhancements to tailor resumes for specific job descriptions",
    html_url: "https://github.com/chuongtran01/resume-builder",
    techStack: ["TypeScript", "Google Gemini"],
    topics: ["typescript", "resume", "ai", "google-gemini"],
  },
  {
    id: 4,
    name: "Job Scheduler",
    description: "Database-driven cron scheduler in Spring Boot, allowing dynamic task registration and rescheduling at runtime via RESTful APIs",
    html_url: "https://github.com/chuongtran01/scheduler",
    techStack: ["Java", "Spring Boot"],
    topics: ["java", "spring-boot", "database"],
  },
];

export default function GitHubProjects({ projects = sampleProjects, isLoading }: GitHubProjectsProps) {
  return (
    <div className="space-y-14">
      <div className="space-y-4">
        <p className="font-mono text-sm font-medium uppercase tracking-[0.28em] text-primary">
          Build Log
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Featured Projects
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          Selected tools and applications that show how I approach product
          problems, automation, and full-stack development.
        </p>
      </div>

      {isLoading ? (
        <div
          className="flex flex-col gap-10 border-t border-border pt-8"
          aria-busy="true"
          aria-label="Loading projects"
        >
          {Array.from({ length: 3 }, (_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-12 border-t border-border pt-8">
          {projects.map((project) => (
            <article key={project.id} className="group space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {project.name}
                </h2>
                {project.html_url && (
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`Open ${project.name}`}
                  >
                    <ExternalLink className="size-5" />
                  </a>
                )}
              </div>

              {project.description && (
                <p className="text-base leading-relaxed text-muted-foreground">{project.description}</p>
              )}

              {project.techStack && project.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-border bg-card/60 font-mono text-xs text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}

              {project.topics && project.topics.length > 0 && (
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
      )}
    </div>
  );
}
