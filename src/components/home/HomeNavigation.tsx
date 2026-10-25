"use client";

import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeToggle from "@/components/home/ThemeToggle";
import { personal } from "@/lib/data";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
];

export default function HomeNavigation() {
  const [activeId, setActiveId] = useState<string | null>(null);
  // Set by a nav click so a short last section can't steal the highlight at the page bottom.
  const clickedId = useRef<string | null>(null);

  const handleClick = (id: string) => {
    clickedId.current = id;
    setActiveId(id);
  };

  useEffect(() => {
    const updateActive = () => {
      if (clickedId.current) return;
      const marker = window.innerHeight * 0.3;
      let current: string | null = null;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= marker) current = item.id;
      }
      // The last section is too short to reach the marker, so at the very bottom it wins.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = navItems[navItems.length - 1].id;
      setActiveId(current);
    };
    updateActive();
    const releaseClick = () => {
      clickedId.current = null;
      updateActive();
    };
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    window.addEventListener("wheel", releaseClick, { passive: true });
    window.addEventListener("touchmove", releaseClick, { passive: true });
    window.addEventListener("keydown", releaseClick);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
      window.removeEventListener("wheel", releaseClick);
      window.removeEventListener("touchmove", releaseClick);
      window.removeEventListener("keydown", releaseClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-background">
      <nav
        aria-label="Home sections"
        className="mx-auto flex w-full max-w-3xl items-center justify-between gap-6 px-6 py-3 text-[15px] font-medium"
      >
        <a
          href="#top"
          onClick={() => {
            clickedId.current = null;
            setActiveId(null);
          }}
          className="font-bold tracking-tight text-foreground"
        >
          {personal.name}
        </a>
        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-x-5 sm:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleClick(item.id)}
                  aria-current={activeId === item.id ? "true" : undefined}
                  className={cn(
                    "pb-1 transition-colors hover:text-foreground",
                    activeId === item.id
                      ? "text-foreground shadow-[inset_0_-2px_0_currentColor]"
                      : "text-foreground/65",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="sm:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle>{personal.name}</SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-4 text-lg font-medium">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <SheetClose asChild>
                      <a
                        href={`#${item.id}`}
                        onClick={() => handleClick(item.id)}
                        aria-current={activeId === item.id ? "true" : undefined}
                        className={cn(
                          "block py-2",
                          activeId === item.id
                            ? "text-foreground"
                            : "text-foreground/65",
                        )}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
