interface AboutStatementProps {
  statement: string;
}

export default function AboutStatement({ statement }: AboutStatementProps) {
  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">About</h2>
      </div>
      <p className="leading-relaxed text-muted-foreground text-base">{statement}</p>
    </div>
  );
}
