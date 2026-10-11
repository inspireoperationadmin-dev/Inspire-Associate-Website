import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  { title: "Discover", desc: "We clarify goals, users, and scope before writing a line of code." },
  { title: "Design", desc: "Wireframes and Figma prototypes you can review and approve." },
  { title: "Build", desc: "Agile sprints with regular demos and transparent progress." },
  { title: "Launch & support", desc: "Deployment, monitoring, and ongoing support after go-live." },
];

export default function DeliverySection() {
  const reduce = useReducedMotion();

  return (
    <section id="process" className="section-y bg-background">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-brand">
            <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
            How we work
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Delivery you can count on
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            From discovery to deployment, we work as an extension of your team. Agile processes,
            transparent communication, and on-time delivery — every sprint, every release.
          </p>
          <a
            href="#projects"
            className="group mt-6 inline-flex items-center gap-2 font-semibold text-brand hover:underline"
          >
            View our projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>

        <ol>
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
              {i < steps.length - 1 && (
                <>
                  <span aria-hidden="true" className="absolute left-[1.125rem] top-10 bottom-0 w-px bg-border" />
                  <motion.span
                    aria-hidden="true"
                    className="absolute left-[1.125rem] top-10 bottom-0 w-px origin-top bg-primary"
                    initial={reduce ? false : { scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.35, ease: "easeInOut" }}
                  />
                </>
              )}
              <motion.span
                aria-hidden="true"
                className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground ring-4 ring-background"
                initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type: "spring", stiffness: 260, damping: 18, delay: i * 0.35 }}
              >
                {i + 1}
              </motion.span>
              <Reveal delay={i * 0.12} className="pt-1">
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
