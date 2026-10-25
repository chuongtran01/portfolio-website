import { education } from "@/lib/data";
import { formatDateRange } from "@/lib/utils";
import MotionSection from "@/components/home/MotionSection";

export default function EducationSection() {
  return (
    <MotionSection id="education" className="scroll-mt-20">
      <div className="space-y-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={`${edu.university}-${edu.date}`}
              className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:gap-7"
            >
              <p className="pt-1 text-sm tabular-nums text-foreground/70">
                {formatDateRange(edu.date)}
              </p>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  {edu.university}
                </h3>
                <p className="mt-1 text-foreground/85">
                  {edu.degree}
                  {edu.gpa && (
                    <span className="text-foreground/70">
                      {" "}
                      · {edu.gpa.replace(/^GPA:\s*/, "GPA ")}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
