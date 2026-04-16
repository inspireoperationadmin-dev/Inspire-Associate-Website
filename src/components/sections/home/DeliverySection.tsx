import { motion, type Variants } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function DeliverySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-noise bg-[#020617]">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none will-change-[filter]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          className="will-change-[opacity,transform]"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
            Delivery You Can Count On
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-white/60 mb-8 leading-relaxed">
            From discovery to deployment, we work as an extension of your team. Agile processes, transparent communication, and on-time delivery — every sprint, every release.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a href="#docs" className="text-cyan-400 font-semibold flex items-center gap-2 hover:text-blue-400 transition-colors group">
              View Completed Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative will-change-[opacity,transform]"
        >
          {/* Reduced blur complexity for mobile performance */}
          <div className="glass-panel bg-[#0f172a]/80 backdrop-blur-md md:backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 md:p-8 relative z-10 shadow-xl shadow-blue-900/10">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
              <h3 className="text-white font-medium flex items-center gap-2">
                <Activity size={18} className="text-cyan-400" />
                Project Success Rate
              </h3>
              <span className="text-xs text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-md border border-cyan-500/20">2025</span>
            </div>
            
            {/* THE FIX: Replaced Height Animation with ScaleY to prevent Android Jank */}
            <div className="h-48 flex items-end gap-2 sm:gap-4 w-full">
              {[55, 70, 60, 85, 65, 95, 80, 100, 75, 92].map((height, i) => (
                <div key={i} className="flex-1 h-full flex items-end">
                  <motion.div 
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: "bottom", height: `${height}%` }}
                    className="w-full h-full bg-linear-to-t from-blue-700/40 to-cyan-400/80 rounded-t-sm relative group will-change-transform"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-t-sm" />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
