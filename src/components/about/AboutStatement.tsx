interface AboutStatementProps {
  statement: string;
}

export default function AboutStatement({ statement }: AboutStatementProps) {
  return (
    <section className="border-t border-border pt-8">
      <div className="grid gap-4 sm:grid-cols-[8rem_1fr]">
        <h2 className="font-mono text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
          About
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">{statement}</p>
      </div>
    </section>
  );
}
