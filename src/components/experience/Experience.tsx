import { Badge } from "@/components/ui/badge";
import { workExperience } from "@/lib/data";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex items-start xl:items-center justify-center min-h-screen px-8 py-16 pt-24">
        <div className="max-w-4xl w-full space-y-12">
          <div className="space-y-8">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Work Experience</h2>
            </div>

            {workExperience.map((experience) => (
              <div
                key={`${experience.company}-${experience.title}-${experience.date}`}
                className={`border-l-4 ${experience.current ? "border-primary" : "border-muted"} pl-6 space-y-3`}
              >
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
                    <li key={desc} className="text-sm">• {desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {experience.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
