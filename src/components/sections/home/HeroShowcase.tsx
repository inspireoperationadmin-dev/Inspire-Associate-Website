import { useEffect, useState } from "react";
import { heroSlides } from "@/constants/data";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 4200;

/** Frame ratio = the widest screenshot, so no slide is cropped at the sides; taller ones lose only their bottom edge. */
const FRAME_RATIO = Math.max(...heroSlides.map((s) => s.image.width / s.image.height));

/**
 * Desktop UI screenshots in a browser frame that flip automatically.
 * The first slide is in the prerendered HTML; the rest cross-fade in after hydration.
 * Autoplay pauses on hover/focus and is off for visitors who prefer reduced motion.
 */
export function HeroShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion || heroSlides.length < 2) return;
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, reduceMotion, active]);

  const current = heroSlides[active];

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Screenshots of our recent work"
      className="relative mx-auto w-full max-w-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-4xl bg-linear-to-br from-primary/15 via-primary/5 to-transparent"
      />

      <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/10">
        <div className="flex items-center gap-3 border-b border-border bg-section px-4 py-2.5" aria-hidden="true">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          </div>
          <div className="flex h-6 flex-1 items-center justify-center rounded-md bg-background/80 px-3 text-xs font-medium text-muted-foreground ring-1 ring-border">
            <span className="truncate">{current.title}</span>
          </div>
        </div>

        {/* All slides share one grid cell in a fixed-ratio frame, so nothing resizes while they cross-fade. */}
        <div className="grid bg-card" style={{ aspectRatio: FRAME_RATIO }} aria-live={paused ? "polite" : "off"}>
          {heroSlides.map((slide, i) => (
            <div
              key={slide.title}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${heroSlides.length}: ${slide.title}`}
              aria-hidden={i === active ? undefined : true}
              className={cn(
                "min-h-0 [grid-area:1/1] transition-all duration-700 ease-out",
                i === active ? "translate-x-0 scale-100 opacity-100" : "pointer-events-none translate-x-4 scale-[0.985] opacity-0"
              )}
            >
              <img
                src={slide.image.src}
                alt={slide.image.alt}
                width={slide.image.width}
                height={slide.image.height}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : undefined}
                decoding="async"
                className="block h-full w-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-5 flex items-center justify-between gap-4">
        <p className="min-w-0 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{current.title}</span>
          <span className="mx-2 text-border" aria-hidden="true">
            /
          </span>
          {current.caption}
        </p>
        <div className="flex shrink-0 items-center gap-2">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${slide.title}`}
              aria-current={i === active ? "true" : undefined}
              className="group flex h-6 items-center"
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-all duration-300",
                  i === active ? "w-7 bg-primary" : "w-1.5 bg-foreground/20 group-hover:bg-foreground/40"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
