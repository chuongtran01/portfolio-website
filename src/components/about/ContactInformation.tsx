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
  const contactItems = [
    {
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\D/g, "")}`,
      icon: Phone,
    },
    {
      label: "Location",
      value: contactInfo.location,
      icon: MapPin,
    },
  ];

  return (
    <section className="border-t border-border pt-8">
      <div className="grid gap-5 sm:grid-cols-[8rem_1fr]">
        <h2 className="font-mono text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Contact
        </h2>
        <div className="grid gap-4">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <Icon className="size-4 text-primary" />
                <span className="text-muted-foreground">{item.label}</span>
                <span className="ml-auto text-right font-medium text-foreground">{item.value}</span>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 border-b border-border pb-4 text-sm transition-colors last:border-b-0 last:pb-0 hover:text-primary"
              >
                {content}
              </a>
            ) : (
              <div
                key={item.label}
                className="flex items-center gap-3 border-b border-border pb-4 text-sm last:border-b-0 last:pb-0"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
