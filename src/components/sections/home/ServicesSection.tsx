import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/RadialOrbitalTimeline";
import { servicesData } from "@/constants/data";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(1);
  const [showAllServices, setShowAllServices] = useState(false);
  const mobileServices = showAllServices ? servicesData : servicesData.slice(0, 8);

  return (
    <section id="services" className="py-20 md:py-[5%] relative overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          whileInView={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw] rounded-full bg-blue-600/20 blur-[80px] md:blur-[120px] will-change-[transform,opacity]"
        />
      </div>

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="text-center mb-12 md:mb-[5%] will-change-[opacity]"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white/5 backdrop-blur-md px-6 py-2 rounded-full mb-6 inline-flex items-center gap-[0.8rem] border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
          >
            <span className="w-[0.6rem] h-[0.6rem] rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-cyan-200">
              What We Offer
            </span>
          </motion.div>

          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-3xl md:text-[3.5rem] font-black font-heading text-white mb-4 tracking-tight"
          >
            Our Services
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-base md:text-[1.1rem] text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Explore our comprehensive suite of digital services designed to accelerate your business growth.
          </motion.p>
        </motion.div>

        <div className="hidden lg:flex relative min-h-[60vh] items-center justify-center">
          <RadialOrbitalTimeline timelineData={servicesData} />
        </div>

        <div className="flex flex-col gap-4 lg:hidden max-w-2xl mx-auto">
          {mobileServices.map((service) => {
            const isActive = activeService === service.id;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 backdrop-blur-md ${
                  isActive ? "bg-blue-900/20 border-cyan-500/40" : "bg-white/5 border-white/10"
                }`}
              >
                <button
                  onClick={() => setActiveService(isActive ? null : service.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isActive ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5 text-white/60"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-white font-bold">{service.title}</p>
                      <p className="text-xs text-white/40 uppercase tracking-wider mt-0.5">{service.category}</p>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-white/40 transition-transform duration-300 ${isActive ? "rotate-180 text-cyan-400" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-2 border-t border-white/5">
                        <p className="text-white/60 text-sm leading-relaxed mb-4">{service.content}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-md">
                            Efficiency: {service.energy}%
                          </span>
                          <span className="text-xs text-white/40">Status: {service.status}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => setShowAllServices((prev) => !prev)}
              className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors"
            >
              {showAllServices ? "Show Less Services ↑" : "View All Services ->"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
