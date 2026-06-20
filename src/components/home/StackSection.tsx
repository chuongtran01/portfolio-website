import { about } from "@/lib/data";
import SectionRow from "@/components/home/SectionRow";

export default function StackSection() {
  return (
    <SectionRow id="stack" label="Stack">
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
    </SectionRow>
  );
}
