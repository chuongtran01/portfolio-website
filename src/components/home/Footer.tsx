import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import type { ReactNode } from "react";
import { contactInfo, personal } from "@/lib/data";

const githubLink = personal.socialLinks.find((link) => link.icon === "github");
const linkedInLink = personal.socialLinks.find((link) => link.icon === "linkedin");

interface FooterLink {
  href: string;
  icon: ReactNode;
  label: string;
}

const footerLinks: FooterLink[] = [
  ...(githubLink
    ? [
        {
          label: "GitHub",
          href: githubLink.href,
          icon: <FaGithub className="size-5" />,
        },
      ]
    : []),
  ...(linkedInLink
    ? [
        {
          label: "LinkedIn",
          href: linkedInLink.href,
          icon: <FaLinkedin className="size-5" />,
        },
      ]
    : []),
  {
    label: "Email",
    href: `mailto:${contactInfo.email}`,
    icon: <Mail className="size-5" />,
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-border pt-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-sm text-muted-foreground">
          {currentYear} {personal.name}
        </p>

        <div className="flex items-center gap-4">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noopener noreferrer"}
              aria-label={link.label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
