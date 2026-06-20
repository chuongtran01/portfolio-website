import { about } from "@/lib/data";
import SectionRow from "@/components/home/SectionRow";

const contactItems = [
  ["Email", about.contactInfo.email],
  ["Phone", about.contactInfo.phone],
  ["Location", about.contactInfo.location],
];

export default function ContactSection() {
  return (
    <SectionRow label="Contact">
      <div className="grid gap-4">
        {contactItems.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between gap-4 border-b border-border pb-4 text-sm last:border-b-0 last:pb-0"
          >
            <span className="text-muted-foreground">{label}</span>
            <span className="text-right font-medium text-foreground">{value}</span>
          </div>
        ))}
      </div>
    </SectionRow>
  );
}
