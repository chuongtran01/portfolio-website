"use client";

import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/": "HOME",
  "/experience": "EXPERIENCE",
  "/about": "ABOUT",
  "/projects": "PROJECTS",
};

export default function PageTitle() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "PAGE";

  return <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">{title}</h1>;
}
