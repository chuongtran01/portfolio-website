interface EducationItem {
  degree: string;
  university: string;
  date: string;
  gpa?: string;
}

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section className="border-t border-border pt-8">
      <div className="grid gap-5 sm:grid-cols-[8rem_1fr]">
        <h2 className="font-mono text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={`${edu.university}-${edu.date}`} className="grid gap-2 sm:grid-cols-[1fr_auto]">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                <p className="mt-1 text-muted-foreground">{edu.university}</p>
                {edu.gpa && <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-primary">{edu.gpa}</p>}
              </div>
              <span className="font-mono text-sm text-muted-foreground">{edu.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
