import type { ReactNode } from "react";
import SectionLabel from "@/components/home/SectionLabel";

interface SectionRowProps {
  children: ReactNode;
  label: string;
}

export default function SectionRow({ children, label }: SectionRowProps) {
  return (
    <section className="border-t border-border pt-8">
      <div className="grid gap-4 sm:grid-cols-[8rem_1fr]">
        <SectionLabel>{label}</SectionLabel>
        {children}
      </div>
    </section>
  );
}
