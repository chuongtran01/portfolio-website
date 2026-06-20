"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Mail } from "lucide-react";
import { about, personal, type SocialIconId } from "@/lib/data";

const socialIcons: Record<SocialIconId, ReactNode> = {
  github: <FaGithub className="size-4" />,
  linkedin: <FaLinkedin className="size-4" />,
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
  return (
    <main className="min-h-screen bg-background px-6 pt-32 sm:pt-40">
      <section className="mx-auto flex w-full max-w-2xl flex-col items-start gap-8">
        <div className="space-y-4">
          <p className="font-mono text-sm font-medium uppercase tracking-[0.28em] text-primary">
            {profile.title}
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            {profile.name}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I build practical web applications with Java, TypeScript, React,
            Spring Boot, and cloud tools. I like turning complex problems into
            focused, reliable software.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline" className="rounded-tr-none rounded-bl-none border-border/80 bg-card/60">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">
              <FileText />
              Resume
              <ExternalLink />
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-tr-none rounded-bl-none border-border/80 bg-card/60">
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

        <nav className="flex flex-wrap items-center gap-4 pt-8 text-base font-medium">
          <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/about">
            About
          </Link>
          <span className="text-muted-foreground/45">/</span>
          <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/experience">
            Experience
          </Link>
          <span className="text-muted-foreground/45">/</span>
          <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/projects">
            Projects
          </Link>
        </nav>

        <div className="grid w-full gap-6 border-t border-border pt-10 sm:grid-cols-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">Focus</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">Full-stack web applications</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">Location</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">{about.contactInfo.location}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">Stack</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">Java, TypeScript, React</p>
          </div>
        </div>
      </section>
    </main>
  );
}
