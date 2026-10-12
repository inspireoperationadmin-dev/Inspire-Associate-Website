import { ArrowRight, Check, PackageCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    title: "Discover",
    desc: "We learn your business, your users, and what success looks like before any design or code.",
    points: ["Goals, users, and scope workshops", "Priorities, timeline, and budget", "Technical feasibility check"],
    output: "Project brief and roadmap",
  },
  {
    title: "Design",
    desc: "We shape the experience and the brand so you can see and approve it before we build.",
    points: ["User flows and wireframes", "Interactive Figma prototype", "Visual style and design system"],
    output: "Approved prototype",
  },
  {
    title: "Build",
    desc: "Short agile sprints with regular demos, so you see real progress and can steer as we go.",
    points: ["Frontend, backend, and integrations", "Code reviews and automated tests", "Staging builds you can try"],
    output: "Working product, sprint by sprint",
  },
  {
    title: "Launch & grow",
    desc: "We deploy, hand over, and stay with you as the product, brand, and audience grow.",
    points: ["Deployment and monitoring", "Training and handover", "Support, social, and content to grow"],
    output: "Live product and support plan",
  },
];

export default function DeliverySection() {
  return (
    <section id="process" className="section-y relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-size-[28px_28px] mask-[radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
      />
      <div className="container-x relative">
        <Reveal className="mb-12 grid gap-4 md:mb-14 md:grid-cols-2 md:items-end md:gap-16">
          <div>
            <p className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-sky-400">
              <span className="h-px w-8 bg-sky-400/60" aria-hidden="true" />
              How we work
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
              From first idea to live product, in four clear steps
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              We work as an extension of your team. You always know what is happening, what comes
              next, and what you will receive at the end of each step.
            </p>
            <a
              href="#projects"
              className="group mt-5 inline-flex items-center gap-2 font-semibold text-sky-400 hover:underline"
            >
              See what we have built
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="flex">
              <Reveal delay={i * 0.08} className="flex w-full">
                <article className="group relative flex w-full flex-col rounded-2xl border border-white/10 bg-white/4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.07]">
                  <div className="flex items-center justify-between">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-lg font-bold text-sky-400 ring-1 ring-sky-400/30"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                      Step {i + 1} of {steps.length}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{step.desc}</p>

                  <ul className="mt-5 space-y-2.5">
                    {step.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm text-white/85">
                        <Check size={16} className="mt-0.5 shrink-0 text-sky-400" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <div className="rounded-xl border border-sky-400/20 bg-sky-400/5 p-3.5">
                      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
                        <PackageCheck size={15} aria-hidden="true" />
                        You get
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">{step.output}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
