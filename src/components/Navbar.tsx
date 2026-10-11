import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-us" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 inset-x-0 z-100 transition-all duration-700", // v4: z-[100] -> z-100
      scrolled ? "py-[1%]" : "py-[2%]"
    )}>
      {/* Scrolled Glass Background */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.8 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.8 }}
            className="absolute inset-0 -z-10 bg-[#0a0214]/60 backdrop-blur-[20px] border-b border-white/10"
          />
        )}
      </AnimatePresence>

      {/* Container - v4 Canonical: max-w-350 for 1400px */}
      <div className="w-[92%] max-w-350 mx-auto grid grid-cols-2 md:grid-cols-3 items-center">
        
        {/* 1. Logo Section (Left) */}
        <Link href="/" className="flex items-center gap-[0.8vw] w-fit group">
          <div className="relative w-[3.2rem] h-[3.2rem] transition-transform duration-500 group-hover:rotate-[5deg]">
            <img src="/logo.png" alt="Inspire Associate logo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]" />
          </div>
          <span className="hidden lg:block font-heading font-bold text-[1.1rem] tracking-tighter text-white/90">
            INSPIRE ASSOCIATE
          </span>
        </Link>

        {/* 2. Navigation Items (Center) */}
        <div className="hidden md:flex justify-center items-center">
          <ul className="flex items-center gap-[0.5vw] bg-white/3 border border-white/10 backdrop-blur-md rounded-full px-[1vw] py-2"> 
            {/* v4: bg-white/[0.03] -> bg-white/3 | py-[0.5rem] -> py-2 */}
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative px-[1.2vw] py-2 text-[0.85rem] font-medium text-white/60 hover:text-white transition-all duration-500 group"
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Smooth Background Hover - v4: bg-linear-to-b */}
                  <span className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. CTA Button (Right) */}
        <div className="flex justify-end items-center gap-[2vw]">
          <button className="hidden md:block relative group overflow-hidden px-[1.8vw] py-[0.7rem] rounded-full transition-all duration-500">
            {/* Default State: v4 bg-linear-to-r */}
            <div className="absolute inset-0 bg-linear-to-r from-[#1E40AF] via-[#3B82F6] to-[#06B6D4] opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
            
            {/* Hover State: Glass Effect */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 backdrop-blur-md border border-white/20 transition-opacity duration-500" />
            
            <span className="relative z-10 text-white font-bold text-[0.85rem] tracking-wide"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); } }
            >

              GET STARTED
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/80 transition-transform active:scale-90"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size="2rem" /> : <Menu size="2rem" />}
          </button>
        </div>
      </div>

{/* Mobile Menu Overlay */}
<AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, x: "100%" }} // x: 50 ஐ விட 100% சிறந்தது
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      className="fixed inset-0 w-full h-screen bg-[#0a0214] z-200 flex flex-col items-center justify-center overflow-hidden" 
     
    >
      {/* Close Button */}
      <button 
        aria-label="Close menu"
        onClick={() => setMobileMenuOpen(false)} 
        className="absolute top-7.5 right-7.5 text-white/70 hover:text-white p-2"
      >
        <X size="2.5rem" />
      </button>

      <div className="flex flex-col items-center gap-[5vh]">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white/60 text-[2rem] font-bold hover:text-cyan-400 transition-colors active:scale-95"
            onClick={(e) => {
              setMobileMenuOpen(false); 
              const target = document.querySelector(link.href);
              if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {link.name}
          </a>
        ))}

        {/* Mobile Get Started Button */}
        <button 
          className="mt-5 w-[80vw] max-w-75 py-[1.2rem] bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-500/20 active:scale-95 transition-transform"
          onClick={(e) => { 
            e.preventDefault();
            setMobileMenuOpen(false); 
            setTimeout(() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }, 300); 
          }}
        >
          GET STARTED
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
}