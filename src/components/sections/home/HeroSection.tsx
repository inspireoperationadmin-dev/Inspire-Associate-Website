import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { TECH, TechLogo } from "@/components/ui/tech-logo";
import type { TechId } from "@/constants/tech";

const highlights = ["Web & mobile apps", "UI/UX design", "Cloud & business support"];

// Logos that float around the brand mark (desktop only)
const floating: { id: TechId; className: string; delay: string }[] = [
  { id: "react", className: "left-2 top-10", delay: "0s" },
  { id: "nodejs", className: "right-4 top-6", delay: "1.2s" },
  { id: "python", className: "-left-2 bottom-24", delay: "2.4s" },
  { id: "docker", className: "right-0 bottom-28", delay: "0.6s" },
  { id: "figma", className: "left-12 bottom-4", delay: "1.8s" },
  { id: "kubernetes", className: "right-14 bottom-2", delay: "3s" },
];

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-28 md:pb-24 md:pt-36">
      {/* Soft background: dotted grid + a slow blue glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-32 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-blob" />
      </div>

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-section px-3 py-1 text-xs font-medium text-muted-foreground sm:text-sm">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Software company · Jaffna, Sri Lanka
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              Innovative solutions, engineered for{" "}
              <span className="relative inline-block text-brand">
                your growth.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2 w-full text-primary/60"
                >
                  <motion.path
                    d="M2 8 C 40 2, 90 2, 130 6 S 180 9, 198 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={reduce ? false : { pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, delay: 0.7, ease: "easeInOut" }}
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We design, build, and scale digital products — from web and mobile apps to cloud
              infrastructure — so your business can move faster and grow smarter.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="group w-full sm:w-auto">
                <a href="#contact">
                  Start a project
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href="#services">Our services</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <ul className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={16} className="text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="hidden lg:block">
          <div className="relative mx-auto flex aspect-square max-w-md flex-col items-center justify-center rounded-2xl border border-border bg-section p-10">
            <div className="animate-float rounded-3xl bg-logo-tile p-8 shadow-sm">
              <img src="/logo.png" alt="" width={240} height={240} className="h-52 w-52 object-contain" />
            </div>
            <p className="mt-6 text-lg font-semibold text-foreground">Inspire Associates</p>
            <p className="mt-1 text-sm text-muted-foreground">Growth | Innovation | Trust</p>

            {floating.map((f) => (
              <div
                key={f.id}
                aria-hidden="true"
                style={{ animationDelay: f.delay }}
                className={`absolute ${f.className} animate-float rounded-xl border border-border bg-card p-3 shadow-sm`}
              >
                <TechLogo tech={TECH[f.id]} size={24} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
