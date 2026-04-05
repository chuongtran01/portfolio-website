"use client";

import type { ReactNode } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { personal, type SocialIconId } from "@/lib/data";

const socialIcons: Record<SocialIconId, ReactNode> = {
  github: <FaGithub size={48} />,
  linkedin: <FaLinkedin size={48} />,
};

const resumeHref =
  process.env.NEXT_PUBLIC_RESUME_URL?.trim() || "/ChuongTran_Resume.pdf";

const profile = {
  name: personal.name,
  title: personal.title,
  resume: resumeHref,
};

const socialLinks = personal.socialLinks.map((link) => ({
  name: link.name,
  href: link.href,
  icon: socialIcons[link.icon],
}));

export default function HomePage() {
  const handleIconClick = (href: string) => {
    // For external links, we still need window.open to open in new tab
    // Next.js router.push() is for internal navigation only
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const handleResumeClick = () => {
    window.open(profile.resume, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-background relative px-4 py-6 xl:py-6 pt-20 xl:pt-6">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight mb-4">{profile.name}</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">{profile.title}</p>

          <div className="mb-12">
            <Button variant="outline" size="lg" onClick={handleResumeClick} className="cursor-pointer px-8 py-3 text-base">
              <FileText size={24} />
              View Resume
              <ExternalLink size={24} />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8">
            {socialLinks.map((link) => (
              <div key={link.name} onClick={() => handleIconClick(link.href)} className="cursor-pointer hover:opacity-70 transition-opacity duration-200">
                {link.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
