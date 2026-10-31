import EducationSection from "@/components/home/EducationSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import HomeNavigation from "@/components/home/HomeNavigation";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HomeNavigation />
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-24 px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <Footer />
      </div>
    </main>
  );
}
