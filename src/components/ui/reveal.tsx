import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Above-the-fold content: plays a CSS entrance on load (works without JavaScript). */
  hero?: boolean;
};

/**
 * Fade-up on scroll.
 *
 * Content is fully visible in the prerendered HTML, so search engines and slow connections always
 * get it. After hydration, only blocks that are still below the fold are hidden and then revealed
 * as they scroll into view, so nothing flashes. Disabled for visitors who prefer reduced motion.
 */
export function Reveal({ children, delay = 0, className, hero = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"visible" | "hidden" | "shown">("visible");

  useEffect(() => {
    if (hero) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) return; // already on screen

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hero]);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}s`, animationDelay: `${delay}s` } : undefined}
      className={cn(
        hero && "animate-fade-up",
        state === "hidden" && "translate-y-3 opacity-0",
        state === "shown" && "translate-y-0 opacity-100 transition-all duration-500 ease-out",
        className
      )}
    >
      {children}
    </div>
  );
}
