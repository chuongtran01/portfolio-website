import { Briefcase, Calendar, MapPin } from "lucide-react";

interface WorkExperienceItem {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  techStack: string[];
  current: boolean;
}

interface WorkExperienceProps {
  workExperience: WorkExperienceItem[];
}

export default function WorkExperience({ workExperience }: WorkExperienceProps) {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Work Experience</h2>
      </div>

      {workExperience.map((experience) => (
        <div key={experience.title} className={`border-l-4 ${experience.current ? "border-primary" : "border-muted"} pl-6 space-y-3`}>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Briefcase className="w-4 h-4 text-muted-foreground" />
                <span className="text-primary font-medium">{experience.company}</span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            {experience.description.map((desc) => (
              <li key={desc}>• {desc}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-3">
            {experience.techStack.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
