import { about } from "@/lib/data";

const quickFacts = [
  ["Focus", "Full-stack web applications"],
  ["Location", about.contactInfo.location],
  ["Stack", "Java, TypeScript, React"],
];

export default function QuickFacts() {
  return (
    <section className="grid w-full gap-6 border-t border-border pt-10 sm:grid-cols-3">
      {quickFacts.map(([label, value]) => (
        <div key={label}>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {label}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">{value}</p>
        </div>
      ))}
    </section>
  );
}
