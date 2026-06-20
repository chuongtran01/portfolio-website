import type { ReactNode } from "react";
import SectionLabel from "@/components/home/SectionLabel";

interface SectionRowProps {
  children: ReactNode;
  id?: string;
  label: string;
}

export default function SectionRow({ children, id, label }: SectionRowProps) {
  return (
    <section id={id} className="scroll-mt-10 border-t border-border pt-10">
      <div className="space-y-8">
        <SectionLabel>{label}</SectionLabel>
        {children}
      </div>
    </section>
  );
}
