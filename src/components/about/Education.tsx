import { GraduationCap, Calendar } from "lucide-react";

interface EducationItem {
  degree: string;
  university: string;
  date: string;
}

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Education</h2>
      </div>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-muted pl-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-lg font-medium text-foreground">{edu.degree}</h3>
            </div>
            <p className="text-muted-foreground font-medium">{edu.university}</p>
            <div className="flex items-center gap-2 mt-1">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{edu.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
