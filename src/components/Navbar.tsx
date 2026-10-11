import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Technology", href: "#technology" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const ids = [...navLinks.map((l) => l.href.slice(1)), "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav aria-label="Main" className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt="Inspire Associates logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-lg bg-logo-tile p-1 object-contain"
          />
          <span className="text-base font-semibold tracking-tight text-foreground">Inspire Associates</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-foreground",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild className="hidden lg:inline-flex">
            <a href="#contact">Get in touch</a>
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-foreground hover:bg-accent lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Reading progress */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress, transformOrigin: "0% 50%" }}
          className="absolute inset-x-0 bottom-0 h-0.5 bg-primary"
        />
      )}

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background shadow-lg lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild size="lg" className="w-full">
                <a href="#contact" onClick={() => setOpen(false)}>Get in touch</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
