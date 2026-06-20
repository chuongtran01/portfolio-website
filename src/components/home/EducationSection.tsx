import { about } from "@/lib/data";
import SectionRow from "@/components/home/SectionRow";

export default function EducationSection() {
  return (
    <SectionRow id="education" label="Education">
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
    </SectionRow>
  );
}
