import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import DeliverySection from "@/components/sections/home/DeliverySection";
import ProjectsSection from "@/components/sections/home/ProjectsSection";
import TechStackSection from "@/components/sections/home/TechStackSection";
import { TechSprite } from "@/components/ui/tech-logo";
import { TechMarquee } from "@/components/ui/tech-marquee";
import ContactSection from "@/components/sections/home/ContactSection";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <TechSprite />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="overflow-x-hidden">
        <HeroSection />
        <TechMarquee />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <DeliverySection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
