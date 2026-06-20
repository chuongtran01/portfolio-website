import type { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Mail } from "lucide-react";
import { about, personal, type SocialIconId } from "@/lib/data";

const socialIcons: Record<SocialIconId, ReactNode> = {
  github: <FaGithub className="size-4" />,
  linkedin: <FaLinkedin className="size-4" />,
};

const resumeHref =
  process.env.NEXT_PUBLIC_RESUME_URL?.trim() || "/ChuongTran_Resume.pdf";

const socialLinks = personal.socialLinks.map((link) => ({
  name: link.name,
  href: link.href,
  icon: socialIcons[link.icon],
}));

export default function HeroSection() {
  return (
    <section className="flex flex-col items-start gap-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
          {personal.name}
        </h1>
        <p className="font-mono text-sm font-medium uppercase tracking-[0.28em] text-primary">
          {personal.title}
        </p>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {about.aboutStatement}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          asChild
          variant="outline"
          className="rounded-tr-none rounded-bl-none border-border/80 bg-card/60"
        >
          <a href={resumeHref} target="_blank" rel="noopener noreferrer">
            <FileText />
            Resume
            <ExternalLink />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="rounded-tr-none rounded-bl-none border-border/80 bg-card/60"
        >
          <a href={`mailto:${about.contactInfo.email}`}>
            <Mail />
            Email
          </a>
        </Button>
        {socialLinks.map((link) => (
          <Button
            key={link.name}
            asChild
            variant="outline"
            className="rounded-tr-none rounded-bl-none border-border/80 bg-card/60"
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
              {link.name}
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
}
