"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "EXPERIENCE", href: "/experience" },
  { label: "PROJECTS", href: "/projects" },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <>
      {/* Mobile/Tablet Navigation - Top Horizontal */}
      <div className="block xl:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive = isClient && pathname === item.href;
              return (
                <Button key={item.href} variant={isActive ? "default" : "ghost"} size="sm" onClick={() => handleNavigation(item.href)} className="font-semibold text-sm cursor-pointer">
                  {item.label}
                </Button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Desktop Navigation - Bottom Right Vertical */}
      <div className="hidden xl:block fixed bottom-6 right-6 z-50">
        <nav className="flex flex-col items-end gap-3">
          {navigationItems.map((item) => {
            const isActive = isClient && pathname === item.href;
            return (
              <Button key={item.href} variant={isActive ? "default" : "ghost"} size="lg" onClick={() => handleNavigation(item.href)} className="font-semibold text-base cursor-pointer">
                {item.label}
              </Button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
