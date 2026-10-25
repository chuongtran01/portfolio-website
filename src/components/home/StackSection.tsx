import { skills } from "@/lib/data";
import MotionSection from "@/components/home/MotionSection";

export default function StackSection() {
  return (
    <MotionSection id="skills" className="scroll-mt-20">
      <div className="space-y-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Skills
        </h2>

        <div className="divide-y divide-border">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.name}
              className="grid gap-3 py-6 first:pt-0 last:pb-0 sm:grid-cols-[8rem_1fr] sm:gap-7"
            >
              <h3 className="text-sm font-medium text-foreground/70 sm:pt-0.5">
                {skillGroup.name}
              </h3>
              <div className="flex flex-wrap gap-x-2 gap-y-2 text-base leading-relaxed text-foreground">
                {skillGroup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="after:ml-2 after:text-foreground/30 after:content-['·'] last:after:hidden"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
