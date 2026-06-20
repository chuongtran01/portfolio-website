import type { ReactNode } from "react";
import SectionLabel from "@/components/home/SectionLabel";

interface SectionRowProps {
  children: ReactNode;
  label: string;
}

export default function SectionRow({ children, label }: SectionRowProps) {
  return (
    <section className="border-t border-border pt-10">
      <div className="space-y-8">
        <SectionLabel>{label}</SectionLabel>
        {children}
      </div>
    </section>
  );
}
