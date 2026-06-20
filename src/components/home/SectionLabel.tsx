import type { ReactNode } from "react";

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-mono text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
      {children}
    </h2>
  );
}
