import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { pillars } from "@/constants/data";

export default function ServicesSection() {
  return (
    <section id="services" className="section-y bg-section">
      <div className="container-x">
        <Reveal className="mb-12 grid gap-4 md:mb-16 md:grid-cols-2 md:items-end md:gap-16">
          <div>
            <p className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-brand">
              <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
              What we do
            </p>
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
              Everything your business needs to build and grow
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            From software development and design to day-to-day operations, three focused practices
            working together under one roof.
          </p>
        </Reveal>

        <ul className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <li key={pillar.id} className="flex">
              <Reveal delay={i * 0.08} className="flex w-full">
                <article className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white">
                    <pillar.icon size={26} aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-sm font-semibold text-brand">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 text-2xl font-bold text-card-foreground">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.blurb}</p>

                  <ul className="mt-6 space-y-4 border-t border-border pt-6">
                    {pillar.items.map((item) => (
                      <li key={item.title} className="flex gap-3">
                        <Check size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-semibold text-card-foreground">{item.title}</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
