import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { servicesData } from "@/constants/data";

export default function ServicesSection() {
  return (
    <section id="services" className="section-y bg-section">
      <div className="container-x">
        <SectionHeader
          eyebrow="What we offer"
          title="Services built around your business"
          description="From software development and design to day-to-day business operations, everything you need to grow under one roof."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, i) => {
            const Icon = service.icon;
            return (
              <li key={service.id} className="flex">
                <Reveal delay={Math.min(i, 5) * 0.04} className="flex w-full">
                  <article className="group flex w-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {service.category}
                    </p>
                    <h3 className="text-lg font-semibold text-card-foreground">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.content}</p>
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
