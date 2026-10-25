import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutStatement, contactInfo, personal } from "@/lib/data";

const resumeHref =
  process.env.NEXT_PUBLIC_RESUME_URL?.trim() || "/ChuongTran_Resume.pdf";

const linkClass =
  "text-[15px] font-medium text-foreground underline decoration-foreground/30 underline-offset-[5px] transition-colors hover:decoration-foreground";

export default function HeroSection() {
  return (
    <section id="top" className="flex scroll-mt-20 flex-col items-start gap-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-foreground sm:text-7xl">
          {personal.name}
        </h1>
        <p className="text-lg font-medium text-foreground/70 sm:text-xl">
          {personal.title}
        </p>
        <p className="max-w-xl text-lg leading-relaxed text-foreground sm:text-xl">
          {aboutStatement}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <Button asChild size="lg" className="rounded-none">
          <a href={resumeHref} target="_blank" rel="noopener noreferrer">
            <FileText />
            Resume
            <ExternalLink />
          </a>
        </Button>
        <a href={`mailto:${contactInfo.email}`} className={linkClass}>
          Email
        </a>
        {personal.socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
}
