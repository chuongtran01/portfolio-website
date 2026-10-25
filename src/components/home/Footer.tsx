import { contactInfo, personal } from "@/lib/data";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-muted px-6 py-8 sm:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-2xl font-bold tracking-tight text-foreground">
            Get in touch
          </p>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-lg font-semibold text-foreground underline underline-offset-[5px]"
          >
            {contactInfo.email}
          </a>
        </div>

        <div className="flex flex-col gap-1 text-sm text-foreground/70 sm:items-end">
          <div className="flex gap-4">
            {personal.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                {link.name}
              </a>
            ))}
          </div>
          <p>
            © {currentYear} {personal.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
