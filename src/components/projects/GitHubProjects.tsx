"use client";

import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

export default function GitHubProjects({ projects = sampleProjects }: GitHubProjectsProps) {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border border-muted rounded-lg p-6 hover:bg-muted/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
              <div className="flex gap-2">
                {project.html_url && (
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            {project.description && <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>}

            <div className="flex items-center justify-between">
              {project.techStack && project.techStack.length > 0 && (
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {project.topics && project.topics.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.topics.map((topic) => (
                  <Badge key={topic} variant="secondary">
                    {topic}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
