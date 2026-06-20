"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "EXPERIENCE", href: "/experience" },
  { label: "PROJECTS", href: "/projects" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-2xl items-center justify-between gap-4 px-6 py-4 sm:py-5">
        <Link
          href="/"
          className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
        >
          CT
        </Link>
        <div className="flex flex-wrap items-center justify-end gap-x-2 gap-y-1 text-xs font-medium sm:gap-x-3 sm:text-sm">
          {navigationItems.map((item, index) => {
            const isActive = isClient && pathname === item.href;

            return (
              <div key={item.href} className="flex items-center gap-2 sm:gap-3">
                {index > 0 && <span className="select-none text-muted-foreground/45">/</span>}
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
