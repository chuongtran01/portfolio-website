"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const icons = [
  {
    name: "Github",
    href: "https://github.com/chuongtran01",
    icon: <FaGithub size={48} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chuongtran2001/",
    icon: <FaLinkedin size={48} />,
  },
];

const profile = {
  name: "Chuong Tran",
  title: "Software Engineer",
  resume: "/ChuongTran_Resume.pdf",
};

export default function HomePage() {
  const handleIconClick = (href: string) => {
    // For external links, we still need window.open to open in new tab
    // Next.js router.push() is for internal navigation only
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const handleResumeClick = () => {
    // Resume file is in the public folder, so we reference it directly
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
            {icons.map((icon) => (
              <div key={icon.name} onClick={() => handleIconClick(icon.href)} className="cursor-pointer hover:opacity-70 transition-opacity duration-200">
                {icon.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
