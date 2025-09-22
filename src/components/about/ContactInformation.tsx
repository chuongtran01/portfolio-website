import { Mail, Phone, MapPin } from "lucide-react";

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

interface ContactInformationProps {
  contactInfo: ContactInfo;
}

export default function ContactInformation({ contactInfo }: ContactInformationProps) {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Contact Information</h2>
      </div>
      <div className="grid gap-2">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-muted-foreground" />
          <span className="text-foreground">{contactInfo.email}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-muted-foreground" />
          <span className="text-foreground">{contactInfo.phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-muted-foreground" />
          <span className="text-foreground">{contactInfo.location}</span>
        </div>
      </div>
    </div>
  );
}
