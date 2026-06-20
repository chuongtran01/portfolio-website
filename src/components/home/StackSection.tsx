import { about } from "@/lib/data";

export default function StackSection() {
  return (
    <section id="stack" className="scroll-mt-10 border-t border-border pt-10">
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Stack
        </h2>

        <div className="divide-y divide-border">
          {about.skills.map((skillGroup) => (
            <div
              key={skillGroup.name}
              className="grid gap-3 py-6 first:pt-0 last:pb-0 sm:grid-cols-[8rem_1fr]"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {skillGroup.name}
              </h3>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {skillGroup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-muted-foreground"
                  >
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
