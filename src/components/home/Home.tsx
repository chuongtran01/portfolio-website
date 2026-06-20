"use client";

import type { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Mail } from "lucide-react";
import { about, personal, workExperience, type SocialIconId } from "@/lib/data";

const socialIcons: Record<SocialIconId, ReactNode> = {
  github: <FaGithub className="size-4" />,
  linkedin: <FaLinkedin className="size-4" />,
};

const resumeHref =
  process.env.NEXT_PUBLIC_RESUME_URL?.trim() || "/ChuongTran_Resume.pdf";

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

const socialLinks = personal.socialLinks.map((link) => ({
  name: link.name,
  href: link.href,
  icon: socialIcons[link.icon],
}));

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-mono text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
      {children}
    </h2>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-20">
        <section className="flex flex-col items-start gap-8">
          <div className="space-y-4">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.28em] text-primary">
              {personal.title}
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
              {personal.name}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I build practical web applications with Java, TypeScript, React,
              Spring Boot, and cloud tools. I like turning complex problems into
              focused, reliable software.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-tr-none rounded-bl-none border-border/80 bg-card/60"
            >
              <a href={resumeHref} target="_blank" rel="noopener noreferrer">
                <FileText />
                Resume
                <ExternalLink />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-tr-none rounded-bl-none border-border/80 bg-card/60"
            >
              <a href={`mailto:${about.contactInfo.email}`}>
                <Mail />
                Email
              </a>
            </Button>
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                asChild
                variant="outline"
                className="rounded-tr-none rounded-bl-none border-border/80 bg-card/60"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                  {link.name}
                </a>
              </Button>
            ))}
          </div>

          <div className="grid w-full gap-6 border-t border-border pt-10 sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Focus
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                Full-stack web applications
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Location
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {about.contactInfo.location}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Stack
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                Java, TypeScript, React
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <div className="grid gap-4 sm:grid-cols-[8rem_1fr]">
            <SectionLabel>About</SectionLabel>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {about.aboutStatement}
            </p>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <div className="grid gap-5 sm:grid-cols-[8rem_1fr]">
            <SectionLabel>Contact</SectionLabel>
            <div className="grid gap-4">
              {[
                ["Email", about.contactInfo.email],
                ["Phone", about.contactInfo.phone],
                ["Location", about.contactInfo.location],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 border-b border-border pb-4 text-sm last:border-b-0 last:pb-0"
                >
                  <span className="text-muted-foreground">{label}</span>
                  <span className="text-right font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <div className="grid gap-6 sm:grid-cols-[8rem_1fr]">
            <SectionLabel>Stack</SectionLabel>
            <div className="divide-y divide-border">
              {about.skills.map((skillGroup) => (
                <div
                  key={skillGroup.name}
                  className="grid gap-3 py-6 first:pt-0 last:pb-0 sm:grid-cols-[7rem_1fr]"
                >
                  <h3 className="text-sm font-semibold text-foreground">
                    {skillGroup.name}
                  </h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {skillGroup.skills.map((skill) => (
                      <span key={skill} className="font-mono text-xs text-muted-foreground">
                        #{skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <div className="grid gap-5 sm:grid-cols-[8rem_1fr]">
            <SectionLabel>Education</SectionLabel>
            <div className="space-y-8">
              {about.education.map((edu) => (
                <div key={`${edu.university}-${edu.date}`} className="grid gap-2 sm:grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                    <p className="mt-1 text-muted-foreground">{edu.university}</p>
                    {edu.gpa && (
                      <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-primary">
                        {edu.gpa}
                      </p>
                    )}
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">{edu.date}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <div className="mb-12 grid gap-4 sm:grid-cols-[8rem_1fr]">
            <SectionLabel>Experience</SectionLabel>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Roles where I built, maintained, and improved production web
              applications with a practical full-stack toolkit.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {workExperience.map((experience) => (
              <article
                key={`${experience.company}-${experience.title}-${experience.date}`}
                className="grid gap-4 sm:grid-cols-[8rem_1fr] sm:gap-8"
              >
                <div className="pt-1">
                  <span className="font-mono text-sm text-muted-foreground">
                    {experience.date}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        {experience.company}
                        <span className="ml-2 font-normal text-muted-foreground">
                          — {experience.title}
                        </span>
                      </h3>
                      {experience.current && (
                        <span className="rounded border border-primary/25 bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-sm text-muted-foreground">
                      {experience.location}
                    </p>
                  </div>

                  <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {experience.description.map((desc) => (
                      <li key={desc}>{desc}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {experience.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-border bg-card/60 font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

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
      </div>
    </main>
  );
}
