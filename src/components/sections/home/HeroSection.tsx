import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, ShieldCheck } from "lucide-react";
import { InfiniteGrid } from "@/components/ui/InfiniteGrid";
import { LiquidGlassButton } from "@/components/ui/LiquidGlass";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] pt-20 flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* 1. Background Grid */}
      <div className="absolute inset-0 z-0 opacity-50">
        <InfiniteGrid />
      </div>

      {/* 2. Floating Glows (Fills empty space beautifully) */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />


      {/* 4. Main Content (Refined Typography) */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-8 flex flex-col items-center text-center mt-10">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-8"
        >
          <Rocket size={14} className="text-cyan-400" />
          <span className="text-xs md:text-sm font-semibold text-cyan-200 tracking-wide uppercase">
            Empowering Digital Futures
          </span>
        </motion.div>

        {/* Headline - Adjusted Sizes for Perfect Balance */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }} // Using Modern Font
        >
          Innovative Solutions.<br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 animate-gradient-x inline-block mt-2">
            Engineered for
          </span><br className="hidden sm:block" /> Your Growth.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          We design, build, and scale digital products — from web and mobile apps to cloud infrastructure — so your business can move faster and grow smarter.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 justify-center"
        >
          <LiquidGlassButton
            className="w-full sm:w-auto px-8 py-4 text-white text-base font-semibold bg-linear-to-r from-blue-600 to-cyan-500 border border-cyan-300/35 shadow-[0_0_18px_rgba(34,211,238,0.28)] hover:shadow-[0_0_26px_rgba(34,211,238,0.4)] transition-all duration-300 rounded-full flex items-center justify-center gap-2"
            onClick={(e) => { e.preventDefault(); document.getElementById("platforms")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            Our Services
            <ArrowRight size={18} />
          </LiquidGlassButton>
          
          <LiquidGlassButton
            className="w-full sm:w-auto px-8 py-4 text-white text-base font-semibold bg-white/5 border border-white/8 hover:bg-white/10 transition-all duration-300 rounded-full backdrop-blur-md flex items-center justify-center"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); } }
          >
            Get In Touch
          </LiquidGlassButton>
        </motion.div>

      </div>
    </section>
  );
}
