import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { projects } from "@/constants/data";
import { techForTag } from "@/constants/tech";
import { TechLogo } from "@/components/ui/tech-logo";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-y bg-section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our work"
          title="Selected projects"
          description="Products we are building and shipping, from mobile learning apps to AI-powered platforms."
        />

        <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <li key={project.title} className="flex">
                <Reveal delay={Math.min(i, 3) * 0.05} className="flex w-full">
                  <article className="group flex w-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon size={22} aria-hidden="true" />
                        </div>
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {project.category}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                          project.status === "Live"
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
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground">{project.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
                    </div>

                    <ul className="mt-auto flex flex-wrap gap-2">
                      {project.tags.map((tag) => {
                        const tech = techForTag(tag);
                        return (
                          <li
                            key={tag}
                            className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                          >
                            {tech && <TechLogo tech={tech} size={14} />}
                            {tag}
                          </li>
                        );
                      })}
                    </ul>

                    <p className="border-t border-border pt-3 text-sm font-medium text-card-foreground">
                      {project.note}
                    </p>
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
