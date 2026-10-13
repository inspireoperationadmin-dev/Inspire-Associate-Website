import { TECH, TechLogo } from "@/components/ui/tech-logo";
import { marqueeTech } from "@/constants/tech";

/** Slow, pausable strip of technology logos. Purely decorative (the real list is in the Technology section). */
export function TechMarquee() {
  const group = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {marqueeTech.map((id) => (
        <li key={id} className="group flex items-center gap-2.5 text-muted-foreground">
          <TechLogo tech={TECH[id]} size={26} />
          <span className="whitespace-nowrap text-sm font-medium">{TECH[id].name}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Technologies we work with" className="border-y border-border bg-section py-6">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Technologies we work with
      </p>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {group(false)}
          {group(true)}
        </div>
      </div>
    </section>
  );
}
