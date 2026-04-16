import React, { useEffect, useRef, ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  glowColor = "purple",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!cardRef.current) return;
    const setCenter = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      cardRef.current.style.setProperty("--x", (rect.width / 2).toFixed(2));
      cardRef.current.style.setProperty("--y", (rect.height / 2).toFixed(2));
      cardRef.current.style.setProperty("--xp", "0.50");
      cardRef.current.style.setProperty("--yp", "0.50");
    };
    setCenter();
    window.addEventListener("resize", setCenter);
    return () => window.removeEventListener("resize", setCenter);
  }, []);
  const syncPointer = (clientX: number, clientY: number) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const xp = rect.width ? x / rect.width : 0.5;
    const yp = rect.height ? y / rect.height : 0.5;
    cardRef.current.style.setProperty("--x", x.toFixed(2));
    cardRef.current.style.setProperty("--xp", xp.toFixed(2));
    cardRef.current.style.setProperty("--y", y.toFixed(2));
    cardRef.current.style.setProperty("--yp", yp.toFixed(2));
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    syncPointer(e.clientX, e.clientY);
    if (cardRef.current) {
      cardRef.current.style.setProperty("--active", "1");
    }
  };

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    syncPointer(e.clientX, e.clientY);
    if (cardRef.current) {
      cardRef.current.style.setProperty("--active", "1");
    }
  };

  const handlePointerLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.setProperty("--active", "0.35");
    }
  };

  const { base, spread } = glowColorMap[glowColor];

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onMouseMove={(e) => {
        syncPointer(e.clientX, e.clientY);
        if (cardRef.current) {
          cardRef.current.style.setProperty("--active", "1");
        }
      }}
      onMouseEnter={(e) => {
        syncPointer(e.clientX, e.clientY);
        if (cardRef.current) {
          cardRef.current.style.setProperty("--active", "1");
        }
      }}
      onMouseLeave={handlePointerLeave}
      style={{
        "--base": base,
        "--spread": spread,
        "--radius": "14",
        "--border": "2",
        "--backdrop": "hsl(270 80% 6% / 0.85)",
        "--backup-border": "hsl(270 50% 30% / 0.25)",
        "--size": "220",
        "--outer": "1",
        "--active": "0.35",
        "--border-size": "calc(var(--border, 2) * 1px)",
        "--spotlight-size": "calc(var(--size, 150) * 1px)",
        "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
        backgroundImage: `radial-gradient(
          var(--spotlight-size) var(--spotlight-size) at
          calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
          hsl(var(--hue, 280) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.08)), transparent
        )`,
        backgroundColor: "var(--backdrop, transparent)",
        backgroundSize: "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
        backgroundPosition: "50% 50%",
        backgroundAttachment: "fixed",
        border: "var(--border-size) solid var(--backup-border)",
        position: "relative",
      } as React.CSSProperties}
      className={`glow-card rounded-2xl relative shadow-[0_1rem_2rem_-1rem_#000] backdrop-blur-md ${className}`}
    >
      <div data-glow-layer />
      {children}
    </div>
  );
};

export { GlowCard };
