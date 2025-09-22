import { Award, Calendar, Building } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CertificationAndAwardItem {
  title: string;
  company: string;
  date: string;
}

interface CertificationsAndAwardsProps {
  certificationsAndAwards: CertificationAndAwardItem[];
}

export default function CertificationsAndAwards({ certificationsAndAwards }: CertificationsAndAwardsProps) {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Awards</h2>
      </div>

      <div className="grid gap-4">
        {certificationsAndAwards.map((cert, index) => (
          <Card key={index} className="flex flex-row items-center justify-between p-4 hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <div>
                  <h3 className="font-medium text-foreground">{cert.title}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Building className="w-3 h-3 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{cert.company}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{cert.date}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
