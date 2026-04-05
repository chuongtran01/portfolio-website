import ContactInformation from "@/components/about/ContactInformation";
import Education from "@/components/about/Education";
import Skills from "@/components/about/Skills";
import AboutStatement from "@/components/about/AboutStatement";
import CertificationsAndAwards from "@/components/about/CertificationsAndAwards";
import { about } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex items-start xl:items-center justify-center min-h-screen px-8 py-16 pt-24">
        <div className="max-w-4xl w-full space-y-8">
          <AboutStatement statement={about.aboutStatement} />
          <ContactInformation contactInfo={about.contactInfo} />
          <Skills skills={about.skills} />
          <Education education={about.education} />
          <CertificationsAndAwards certificationsAndAwards={about.certificationsAndAwards} />
        </div>
      </main>
    </div>
  );
}
