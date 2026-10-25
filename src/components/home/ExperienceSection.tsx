import { Badge } from "@/components/ui/badge";
import { workExperience } from "@/lib/data";
import { formatDateRange } from "@/lib/utils";
import MotionSection from "@/components/home/MotionSection";

export default function ExperienceSection() {
  return (
    <MotionSection id="experience" className="scroll-mt-20 space-y-10">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Experience
      </h2>

      <div className="flex flex-col gap-12">
        {workExperience.map((experience) => (
          <article
            key={`${experience.company}-${experience.title}-${experience.date}`}
            className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:gap-7"
          >
            <p className="pt-1 text-sm tabular-nums text-foreground/70">
              {formatDateRange(experience.date)}
            </p>
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="flex flex-wrap items-center gap-x-3 text-xl font-bold leading-tight tracking-tight text-foreground">
                  {experience.company}
                  {experience.current && (
                    <Badge
                      variant="secondary"
                      className="gap-1.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                    >
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"
                      />
                      Present
                    </Badge>
                  )}
                </h3>
                <p className="font-medium text-foreground/70">
                  {experience.title}
                </p>
                {experience.location && (
                  <p className="text-sm text-foreground/70">
                    {experience.location}
                  </p>
                )}
              </div>

              {experience.description.length > 0 && (
                <ul className="max-w-2xl list-disc space-y-2.5 pl-5 text-base leading-relaxed text-foreground/85">
                  {experience.description.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
              )}

              {experience.techStack.length > 0 && (
                <p className="text-sm font-medium text-foreground/70">
                  {experience.techStack.join(" · ")}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
