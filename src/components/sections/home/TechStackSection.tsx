import { Database, Shield, Workflow, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { TECH, TechLogo } from "@/components/ui/tech-logo";
import { techGroups } from "@/constants/tech";

const reasons = [
  {
    title: "End-to-end ownership",
    icon: Shield,
    desc: "We take full responsibility from requirements to release: design, development, QA, deployment, and post-launch support.",
  },
  {
    title: "Agile & transparent",
    icon: Zap,
    desc: "Regular sprints, demos, and progress tracking. You always know what is being built and why.",
  },
  {
    title: "Scalable architecture",
    icon: Database,
    desc: "We engineer for growth from the start: modular codebases, cloud-native infrastructure, and performance budgets.",
  },
];

export default function TechStackSection() {
  return (
    <>
      <section id="technology" className="section-y bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-brand">
              <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
              Technology
            </p>
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
              Modern tools, zero compromise
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We use proven frameworks and best practices to build products that are fast, scalable, and
              maintainable, plus the design and social tools we use to run your brand and content.
            </p>
          </Reveal>

          <div className="border-b border-border">
            {techGroups.map((group, gi) => (
              <Reveal key={group.label} delay={Math.min(gi, 4) * 0.04}>
                <div className="grid gap-3 border-t border-border py-5 sm:grid-cols-[6.5rem_1fr] sm:gap-5">
                  <p className="pt-2 text-xs font-semibold uppercase tracking-wider text-brand">{group.label}</p>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => {
                      const isTech = typeof item === "string";
                      const name = isTech ? TECH[item].name : item.name;
                      return (
                        <li
                          key={name}
                          className="group inline-flex items-center gap-2.5 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                        >
                          {isTech ? (
                            <TechLogo tech={TECH[item]} size={18} className="text-foreground/70" />
                          ) : (
                            <Workflow size={18} className="text-foreground/70" aria-hidden="true" />
                          )}
                          {name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="section-y bg-section">
        <div className="container-x">
          <Reveal className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-brand">
              <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
              Why choose us
            </p>
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
              Technical expertise with a client-first mindset
            </h2>
          </Reveal>
          <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
            {reasons.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 0.08}>
                  <div className="border-t-2 border-primary pt-6">
                    <p className="text-5xl font-extrabold tracking-tight text-foreground/10">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <item.icon size={22} className="text-brand" aria-hidden="true" />
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{item.desc}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
