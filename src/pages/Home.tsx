import { Navbar } from "@/components/Navbar"; 
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/sections/home/HeroSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import DeliverySection from "@/components/sections/home/DeliverySection";
import ProjectsSection from "@/components/sections/home/ProjectsSection";
import TechStackSection from "@/components/sections/home/TechStackSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import ContactSection from "@/components/sections/home/ContactSection";

const Divider = () => (
  <div className="w-full h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <Navbar />

      <main className="overflow-x-hidden"> {/* Scroll x-axis issue தடுக்கப்பட்டது */}
        <HeroSection />
        <Divider />
        <ServicesSection />
        <Divider />
        <DeliverySection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <TechStackSection />
        {/* <Divider />
        <TestimonialsSection /> */}
        <Divider />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}