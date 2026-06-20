interface SkillGroup {
  name: string;
  skills: string[];
}

interface SkillsProps {
  skills: SkillGroup[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="border-t border-border pt-8">
      <div className="grid gap-6 sm:grid-cols-[8rem_1fr]">
        <h2 className="font-mono text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Stack
        </h2>
        <div className="divide-y divide-border">
          {skills.map((skillGroup) => (
            <div key={skillGroup.name} className="grid gap-3 py-6 first:pt-0 last:pb-0 sm:grid-cols-[7rem_1fr]">
              <h3 className="text-sm font-semibold text-foreground">{skillGroup.name}</h3>
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
  );
}
