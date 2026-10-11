import { Database, Shield, Workflow, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
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
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-brand">
              <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
              Technology
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              A modern tech stack, zero compromise
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We use industry-leading frameworks and best practices to build products that are fast,
              scalable, and maintainable. Clean code, automated tests, and CI/CD pipelines from day one.
            </p>
            <Button asChild size="lg" variant="outline" className="mt-8 w-full sm:w-auto">
              <a href="#contact">Start a project</a>
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-3 rounded-xl border border-border bg-section p-4 sm:p-6">
            {techGroups.map((group, gi) => (
              <Reveal key={group.label} delay={gi * 0.04}>
                <div className="flex flex-col gap-2 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-start sm:gap-4">
                  <p className="w-24 shrink-0 pt-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
                    {group.label}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => {
                      const isTech = typeof item === "string";
                      const name = isTech ? TECH[item].name : item.name;
                      return (
                        <li
                          key={name}
                          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-sm"
                        >
                          {isTech ? (
                            <TechLogo tech={TECH[item]} size={18} />
                          ) : (
                            <Workflow size={18} className="text-brand" aria-hidden="true" />
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
          </Reveal>
        </div>
      </section>

      <section id="why-us" className="section-y bg-section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why choose us"
            title="Technical expertise with a client-first mindset"
            description="We combine engineering discipline with clear communication to deliver solutions that genuinely move your business forward."
          />
          <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
            {reasons.map((item, i) => (
              <li key={item.title} className="flex">
                <Reveal delay={i * 0.05} className="flex w-full">
                  <article className="group w-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon size={22} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
