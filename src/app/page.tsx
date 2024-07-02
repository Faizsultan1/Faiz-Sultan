
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <TechStackSection/>
      <ProjectsSection/>
      <ContactSection/>
    </main>
  );
}
