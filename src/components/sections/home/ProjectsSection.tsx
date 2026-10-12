import { Reveal } from "@/components/ui/reveal";
import { TechLogo } from "@/components/ui/tech-logo";
import { projects, type Project } from "@/constants/data";
import { techForTag } from "@/constants/tech";
import { cn } from "@/lib/utils";

/** Screenshot in a browser frame, or a designed placeholder when we have no screenshot yet. */
function ProjectVisual({ project }: { project: Project }) {
  const Icon = project.icon;

  if (!project.image) {
    return (
      <div
        role="img"
        aria-label={`${project.title} (${project.category})`}
        className="relative flex aspect-16/10 flex-col items-center justify-center overflow-hidden rounded-2xl bg-navy p-8 text-center text-white"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[22px_22px]"
        />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-white/10 text-sky-400">
          <Icon size={38} aria-hidden="true" />
        </div>
        <p className="relative mt-5 text-2xl font-bold">{project.title}</p>
        <p className="relative mt-1 text-sm text-white/65">{project.category}</p>
      </div>
    );
  }

  if (project.image.device === "phone") {
    return (
      <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-navy">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[22px_22px]"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl"
        />
        {/* Phone: taller than the panel, so the bottom is cropped like a product shot */}
        <div className="absolute left-1/2 top-[8%] w-[42%] max-w-[16rem] -translate-x-1/2 rounded-[1.9rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl ring-1 ring-white/20 transition-transform duration-500 group-hover:-translate-y-1.5">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5 transition-transform duration-500 group-hover:-translate-y-1">
      <div className="flex items-center gap-3 border-b border-border bg-section px-4 py-2.5" aria-hidden="true">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <div className="h-5 flex-1 rounded-md bg-background/80 ring-1 ring-border" />
      </div>
      <img
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-y bg-background">
      <div className="container-x">
        <Reveal className="mb-12 grid gap-4 md:mb-16 md:grid-cols-2 md:items-end md:gap-16">
          <div>
            <p className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-brand">
              <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
              Our work
            </p>
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
              Products we have built and shipped
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            From learning platforms to business systems, a selection of our recent work.
          </p>
        </Reveal>

        <ul className="space-y-16 md:space-y-24">
          {projects.map((project, i) => (
            <li key={project.title}>
              <Reveal>
                <article className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  <div className={cn(i % 2 === 1 && "lg:order-2")}>
                    <ProjectVisual project={project} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                      <span className="h-px w-8 bg-border" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{project.category}</span>
                      <span
                        className={cn(
                          "ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold lg:ml-0",
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
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">{project.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">{project.desc}</p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => {
                        const tech = techForTag(tag);
                        return (
                          <li
                            key={tag}
                            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
                          >
                            {tech && <TechLogo tech={tech} size={13} />}
                            {tag}
                          </li>
                        );
                      })}
                    </ul>

                    <p className="mt-6 border-t border-border pt-4 text-sm font-medium text-foreground">
                      {project.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
