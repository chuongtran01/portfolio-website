import { Badge } from "@/components/ui/badge";

interface SkillGroup {
  name: string;
  skills: string[];
}

interface SkillsProps {
  skills: SkillGroup[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Skills & Technologies</h2>
      </div>
      <div className="space-y-8">
        {skills.map((skillGroup) => (
          <div key={skillGroup.name} className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">{skillGroup.name}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.skills.map((skill) => (
                <Badge variant="outline" key={skill} className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
