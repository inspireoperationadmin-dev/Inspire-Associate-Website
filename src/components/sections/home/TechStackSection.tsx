import { motion } from "framer-motion";
import { Database, Shield, Zap } from "lucide-react";
import { LiquidGlassButton } from "@/components/ui/LiquidGlass";
import { GlowCard } from "@/components/ui/spotlight-card";

export default function TechStackSection() {
  return (
    <>
      <section id="about" className="py-24 relative overflow-hidden bg-noise bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="will-change-[opacity,transform]"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              A Modern Tech Stack, Zero Compromise
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              We use industry-leading frameworks and best practices to build products that are fast, scalable, and maintainable. Clean code, automated tests, and CI/CD pipelines — from day one.
            </p>
            <LiquidGlassButton
              className="px-6 py-3 text-white text-base bg-white/5 border border-white/15 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              Start a Project
            </LiquidGlassButton>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl mx-auto lg:mx-0 will-change-[opacity,transform]"
          >
            <div className="bg-[#0b1121] rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-blue-900/30 relative group backdrop-blur-md">
              <div className="bg-[#0f172a] border-b border-white/5 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-4 text-xs font-mono text-white/40">our-stack.json</span>
              </div>
              
              <div className="p-6 relative">
                <div className="grid grid-cols-2 gap-3 relative">
                  {[
                    { label: "Frontend", value: "React · Next.js · Vue" },
                    { label: "Mobile", value: "React Native · Expo" },
                    { label: "Backend", value: "Node.js · Python · Go" },
                    { label: "Database", value: "PostgreSQL · MongoDB" },
                    { label: "Cloud", value: "AWS · GCP · Azure" },
                    { label: "DevOps", value: "Docker · k8s · CI/CD" },
                    { label: "Design", value: "Figma · Tailwind" },
                    { label: "AI/ML", value: "OpenAI · LangChain" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 hover:bg-white/10 transition-colors duration-300">
                      <p className="text-cyan-400 text-[10px] font-semibold uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-white/75 text-xs font-mono">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />

      <section id="why-us" className="py-24 relative overflow-hidden bg-noise bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16 will-change-[opacity,transform]"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">Why Choose Us</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">We combine technical expertise with a client-first mindset to deliver solutions that genuinely move the needle.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "End-to-End Ownership", icon: Shield, desc: "We take full responsibility from requirements to release — design, development, QA, deployment, and post-launch support." },
              { title: "Agile & Transparent", icon: Zap, desc: "Weekly sprints, daily standups, and real-time tracking. You always know what's being built and why." },
              { title: "Scalable Architecture", icon: Database, desc: "We engineer for growth from the start — modular codebases, cloud-native infra, and performance budgets." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="will-change-[opacity,transform]"
              >
                <GlowCard glowColor="blue" className="relative z-10 pointer-events-auto h-full p-6 flex flex-col gap-4 backdrop-blur-sm md:backdrop-blur-lg bg-[#0f172a]/50">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                      <feature.icon size={16} className="text-cyan-300" />
                      Value
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                  <div className="mt-auto pt-3 border-t border-white/8 text-xs font-semibold text-cyan-300">
                    Client-first execution
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
