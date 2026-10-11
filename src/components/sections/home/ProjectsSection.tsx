import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/constants/data";
import { techForTag } from "@/constants/tech";
import { TechLogo } from "@/components/ui/tech-logo";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-y bg-background">
      <div className="container-x">
        <Reveal className="mb-10 grid gap-4 md:mb-14 md:grid-cols-2 md:items-end md:gap-16">
          <div>
            <p className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-brand">
              <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
              Our work
            </p>
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
              Products we are building and shipping
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            From learning platforms to business systems, a selection of our recent and ongoing work.
          </p>
        </Reveal>

        <ul className="border-b border-border">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <li key={project.title} className="border-t border-border">
                <Reveal delay={Math.min(i, 3) * 0.05}>
                  <article className="group grid gap-5 px-2 py-8 transition-colors hover:bg-section lg:grid-cols-[2.5rem_15rem_1fr_13rem] lg:items-start lg:gap-8 md:px-5">
                    <p className="hidden text-sm font-semibold text-brand lg:block lg:pt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </p>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-brand transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{project.category}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => {
                          const tech = techForTag(tag);
                          return (
                            <li
                              key={tag}
                              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
                            >
                              {tech && <TechLogo tech={tech} size={13} />}
                              {tag}
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end lg:gap-3">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
                          project.status !== "In development"
                            ? "bg-primary/10 text-brand"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {project.status === "Live" && (
                          <span className="relative flex h-2 w-2" aria-hidden="true">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                          </span>
                        )}
                        {project.status}
                      </span>
                      <p className="flex items-center gap-1 text-sm font-medium text-foreground">
                        {project.note}
                        <ArrowUpRight
                          size={16}
                          className="hidden text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:block"
                          aria-hidden="true"
                        />
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
