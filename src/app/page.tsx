import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import ContactFooter from "@/components/contact-footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactFooter />
    </main>
  );
}
