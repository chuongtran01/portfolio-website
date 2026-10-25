import EducationSection from "@/components/home/EducationSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import HomeNavigation from "@/components/home/HomeNavigation";
import ProjectsSection from "@/components/home/ProjectsSection";
import StackSection from "@/components/home/StackSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HomeNavigation />
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-24 px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <StackSection />
        <EducationSection />
        <Footer />
      </div>
    </main>
  );
}
