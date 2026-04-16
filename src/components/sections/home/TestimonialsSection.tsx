import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { testimonialsData } from "@/constants/data";

export default function TestimonialsSection() {
  const firstColumn = testimonialsData.slice(0, 3);
  const secondColumn = testimonialsData.slice(3, 6);
  const thirdColumn = testimonialsData.slice(6, 9);

  return (
    <section className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-200 h-100 bg-blue-800/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none will-change-[filter]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center max-w-xl mx-auto mb-14 will-change-[opacity,transform]"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-5">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight">
            What our clients say
          </h2>
          <p className="text-white/50 mt-4 text-lg">
            Trusted by teams across industries to deliver results that matter.
          </p>
        </motion.div>

        {/* Masking the top and bottom to create fade effect smoothly */}
        <div className="flex justify-center gap-6 mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-150 overflow-hidden will-change-transform">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </div>
      </div>
    </section>
  );
}