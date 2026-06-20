import { Badge } from "@/components/ui/badge";
import { workExperience } from "@/lib/data";
import MotionSection from "@/components/home/MotionSection";

export default function ExperienceSection() {
  return (
    <MotionSection
      id="experience"
      className="scroll-mt-10 space-y-12 pt-10"
    >
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Experience
      </h2>

      <div className="flex flex-col gap-12">
        {workExperience.map((experience) => (
          <article
            key={`${experience.company}-${experience.title}-${experience.date}`}
            className="grid gap-4 sm:grid-cols-[9rem_1fr] sm:gap-8"
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

              <ul className="max-w-2xl space-y-3 text-sm leading-relaxed text-muted-foreground">
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
    </MotionSection>
  );
}
