import { motion } from "framer-motion";
import { Monitor, Smartphone, Cloud, Palette, TrendingUp, Globe, Star } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { projects } from "@/constants/data"; // Import from data.ts

// Icon component mapper
const iconMap = {
  Monitor,
  Smartphone, 
  Cloud,
  Palette,
  TrendingUp,
  Globe,
};

export default function ProjectsSection() {
  return (
    <section id="docs" className="py-24 relative overflow-hidden bg-noise bg-[#020617]">
      <div className="absolute top-0 left-1/2 w-full max-w-150 h-75 bg-blue-800/10 rounded-full blur-[80px] md:blur-[120px] -translate-x-1/2 pointer-events-none will-change-[filter]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 will-change-[opacity,transform]"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">Completed Projects</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">Real results delivered for real clients — from sleek digital products to enterprise-grade platforms.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const IconComponent = iconMap[project.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="will-change-[opacity,transform]"
              >
                <GlowCard glowColor="blue" className="h-full p-6 flex flex-col gap-4 backdrop-blur-sm md:backdrop-blur-lg bg-[#0f172a]/50">
                  <div className="flex items-center justify-between">
                    <span className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest ${project.accent}`}>
                      <span className={project.accent}>
                        {IconComponent && <IconComponent size={20} />}
                      </span>
                      {project.category}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{project.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/60 text-xs font-mono">{tag}</span>
                    ))}
                  </div>
                  <div className={`flex items-center gap-2 pt-3 border-t border-white/8 text-xs font-semibold ${project.accent}`}>
                    <Star size={12} className="shrink-0" />
                    {project.result}
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}