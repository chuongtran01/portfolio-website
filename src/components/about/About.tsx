import ContactInformation from "@/components/about/ContactInformation";
import Education from "@/components/about/Education";
import Skills from "@/components/about/Skills";
import AboutStatement from "@/components/about/AboutStatement";
import { about } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center px-6 py-28 sm:py-36">
        <div className="space-y-16">
          <div className="space-y-4">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.28em] text-primary">
              Profile
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About
            </h1>
          </div>
          <AboutStatement statement={about.aboutStatement} />
          <ContactInformation contactInfo={about.contactInfo} />
          <Skills skills={about.skills} />
          <Education education={about.education} />
        </div>
      </main>
    </div>
  );
}
