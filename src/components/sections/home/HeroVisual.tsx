import { Check } from "lucide-react";
import { TECH, TechLogo } from "@/components/ui/tech-logo";

const bars = [38, 62, 48, 80, 58, 92, 70];

/** Abstract product illustration: a web app, a phone, and two floating badges. */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[38rem] pb-12 pt-10 pr-3" aria-hidden="true">
      <div className="absolute inset-y-4 left-4 right-0 rounded-[2rem] bg-gradient-to-br from-primary/15 via-primary/5 to-transparent" />

      {/* Browser window */}
      <div className="relative ml-6 w-[80%] overflow-hidden rounded-xl border border-border bg-card shadow-xl">
        <div className="flex items-center gap-3 border-b border-border bg-section px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          </div>
          <div className="h-5 flex-1 rounded-md bg-background/80 ring-1 ring-border" />
        </div>
        <div className="grid grid-cols-[3.25rem_1fr] gap-4 p-4">
          <div className="space-y-2.5">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-2 rounded-full bg-foreground/10" style={{ width: `${70 - i * 8}%` }} />
            ))}
          </div>
          <div>
            <div className="h-3.5 w-2/5 rounded-full bg-foreground/80" />
            <div className="mt-2 h-2 w-3/5 rounded-full bg-foreground/15" />
            <div className="mt-4 grid grid-cols-3 gap-2.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg border border-border p-2.5">
                  <div className="h-4 w-4 rounded bg-primary/20" />
                  <div className="mt-2 h-2 w-3/4 rounded-full bg-foreground/60" />
                  <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-foreground/15" />
                </div>
              ))}
            </div>
            <div className="mt-4 flex h-24 items-end gap-2 rounded-lg border border-border bg-section/60 p-3">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="animate-grow flex-1 origin-bottom rounded-t bg-primary"
                  style={{ height: `${h}%`, opacity: 0.35 + (h / 100) * 0.65, animationDelay: `${0.5 + i * 0.07}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="absolute -bottom-0 right-0 w-[34%] animate-float rounded-[1.75rem] border-[5px] border-navy bg-card ring-1 ring-white/10 p-2.5 shadow-2xl">
        <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-foreground/15" />
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-primary/20 ring-1 ring-primary/30" />
          <div className="flex-1 space-y-1">
            <div className="h-1.5 w-3/4 rounded-full bg-foreground/60" />
            <div className="h-1.5 w-1/2 rounded-full bg-foreground/15" />
          </div>
        </div>
        <div className="mt-3 space-y-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg border border-border p-2">
              <div className="h-5 w-5 rounded-md bg-primary/15" />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 w-4/5 rounded-full bg-foreground/50" />
                <div className="h-1.5 w-1/3 rounded-full bg-foreground/15" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 h-7 rounded-lg bg-primary" />
      </div>

      {/* Badge: live project */}
      <div className="absolute -top-0 right-2 flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-lg">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        Learning App · Live on Google Play
      </div>

      {/* Badge: stack */}
      <div className="absolute bottom-3 left-2 flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2 shadow-lg">
        <div className="flex -space-x-1.5 text-foreground/80">
          {(["react", "nodejs", "docker"] as const).map((id) => (
            <span key={id} className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background">
              <TechLogo tech={TECH[id]} size={14} />
            </span>
          ))}
        </div>
        <span className="flex items-center gap-1 text-xs font-medium text-foreground">
          <Check size={14} className="text-brand" /> Modern stack
        </span>
      </div>
    </div>
  );
}
