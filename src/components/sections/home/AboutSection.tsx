import { Building2, Code2, Megaphone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    icon: Code2,
    title: "Technology",
    desc: "Web, mobile, and cloud products engineered to scale with your business.",
  },
  {
    icon: Megaphone,
    title: "Digital services",
    desc: "Design, marketing, and business support delivered under one roof.",
  },
  {
    icon: Building2,
    title: "Hybrid co-working ecosystem",
    desc: "Space, staff, and storage (Triple S) for startups and growing teams in Jaffna.",
  },
];

const values = [
  { word: "Growth", line: "Solutions built to scale as your business does." },
  { word: "Innovation", line: "Modern tools and fresh thinking applied to real problems." },
  { word: "Trust", line: "Clear communication and dependable delivery, every time." },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-y bg-background">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-brand">
              <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
              About us
            </p>
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
              An innovation and technology hub, built in Jaffna.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Inspire Associates builds software products and delivers digital solutions for modern
              businesses. We combine technology, digital services, and a collaborative hybrid
              co-working ecosystem to support startups and businesses from idea to execution and growth.
            </p>
          </Reveal>

          <ul className="space-y-4">
            {pillars.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 0.08}>
                  <div className="group flex gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-brand transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:mt-20 md:grid-cols-3">
          {values.map((v, i) => (
            <li key={v.word} className="bg-section p-6 sm:p-8">
              <Reveal delay={i * 0.08}>
                <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  <span className="text-brand">{String(i + 1).padStart(2, "0")}</span> {v.word}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.line}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
