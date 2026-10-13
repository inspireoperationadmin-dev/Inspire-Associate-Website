import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroShowcase } from "@/components/sections/home/HeroShowcase";
import { cn } from "@/lib/utils";

const highlights = ["Web & mobile apps", "Brand, social & content", "Cloud & business support"];
const words = ["web apps", "mobile apps", "brands", "online stores", "campaigns"];

/** All words share one grid cell, so the box is as wide as the longest word and nothing jumps. */
function RotatingWord() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-grid text-brand" aria-hidden="true">
      {words.map((word, i) => (
        <span
          key={word}
          className={cn(
            "[grid-area:1/1] transition-all duration-500",
            i === active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
          )}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pb-14 pt-28 md:pb-20 md:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_at_top_left,black,transparent_65%)]" />
        <div className="absolute -left-24 -top-24 h-96 w-[24rem] rounded-full bg-primary/10 blur-3xl animate-blob" />
      </div>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div>
          <Reveal hero>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm sm:text-sm">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Software company · Jaffna, Sri Lanka
            </p>
          </Reveal>

          <Reveal hero delay={0.08}>
            <h1 className="text-[2.6rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-foreground sm:text-6xl lg:text-[3.6rem]">
              <span className="sr-only">
                We build web apps, mobile apps, brands, online stores and campaigns for growing businesses.
              </span>
              <span aria-hidden="true">
                We build
                <br />
                <RotatingWord />
                <br />
                for growing businesses.
              </span>
            </h1>
          </Reveal>

          <Reveal hero delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              From first sketch to live product, our Jaffna team designs and builds web and mobile apps,
              brands and content, and the digital operations that keep your business running.
            </p>
          </Reveal>

          <Reveal hero delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="group w-full sm:w-auto">
                <a href="#contact">
                  Start a project
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href="#services">Explore services</a>
              </Button>
            </div>
          </Reveal>

          <Reveal hero delay={0.32}>
            <ul className="mt-9 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-7">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={16} className="text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal hero delay={0.15}>
          <HeroShowcase />
        </Reveal>
      </div>
    </section>
  );
}
