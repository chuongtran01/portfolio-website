import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import SectionLabel from "@/components/home/SectionLabel";

const featuredProjects = [
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
    description:
      "A resume generator with AI-driven enhancements to tailor resumes for specific job descriptions",
    html_url: "https://github.com/chuongtran01/resume-builder",
    techStack: ["TypeScript", "Google Gemini"],
    topics: ["typescript", "resume", "ai", "google-gemini"],
  },
  {
    id: 4,
    name: "Job Scheduler",
    description:
      "Database-driven cron scheduler in Spring Boot, allowing dynamic task registration and rescheduling at runtime via RESTful APIs",
    html_url: "https://github.com/chuongtran01/scheduler",
    techStack: ["Java", "Spring Boot"],
    topics: ["java", "spring-boot", "database"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="border-t border-border pt-8">
      <div className="mb-12 grid gap-4 sm:grid-cols-[8rem_1fr]">
        <SectionLabel>Projects</SectionLabel>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Selected tools and applications that show how I approach product
          problems, automation, and full-stack development.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {featuredProjects.map((project) => (
          <article key={project.id} className="group space-y-4">
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
            <p className="text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>
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
            <div className="flex flex-wrap gap-x-3 gap-y-2 pt-1">
              {project.topics.map((topic) => (
                <span key={topic} className="font-mono text-xs text-primary/80">
                  #{topic}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
