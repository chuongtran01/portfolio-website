import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contactInfo, personal } from "@/lib/data";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <Card className="rounded-none border-0 bg-muted py-8 shadow-none">
        <CardContent className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div className="space-y-2">
            <p className="text-2xl font-bold tracking-tight text-foreground">
              Get in touch
            </p>
            <Button
              asChild
              variant="link"
              className="h-auto p-0 text-lg font-semibold text-foreground underline underline-offset-[5px]"
            >
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </Button>
          </div>

          <div className="flex flex-col gap-1 text-sm text-foreground/70 sm:items-end">
            <div className="flex gap-4">
              {personal.socialLinks.map((link) => (
                <Button
                  key={link.name}
                  asChild
                  variant="link"
                  className="h-auto p-0 text-sm font-normal text-foreground/70 hover:text-foreground"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </Button>
              ))}
            </div>
            <p>
              © {currentYear} {personal.name}
            </p>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
}
