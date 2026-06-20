import EducationSection from "@/components/home/EducationSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import HomeNavigation from "@/components/home/HomeNavigation";
import ProjectsSection from "@/components/home/ProjectsSection";
import StackSection from "@/components/home/StackSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-20">
        <HeroSection />
        <HomeNavigation />
        <ExperienceSection />
        <ProjectsSection />
        <StackSection />
        <EducationSection />
      </div>
    </main>
  );
}
