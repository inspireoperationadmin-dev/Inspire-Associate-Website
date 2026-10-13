import type { CSSProperties } from "react";
import { TECH, type Tech } from "@/constants/tech";

/**
 * Every logo path is defined once in this hidden sprite; <TechLogo> references it with <use>.
 * This keeps the prerendered HTML small (each logo path would otherwise repeat many times).
 */
export function TechSprite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      {Object.values(TECH).map((t) => (
        <symbol key={t.id} id={`tech-${t.id}`} viewBox="0 0 24 24">
          <path d={t.path} />
        </symbol>
      ))}
    </svg>
  );
}

/**
 * A technology logo, shown in its brand colour. Logos whose brand colour is black/white (Next.js,
 * Expo, Express, GitHub) use the text colour so they stay readable on light and dark backgrounds.
 * Pass `colored={false}` for a monochrome logo that only turns colourful when an ancestor with
 * the `group` class is hovered.
 */
export function TechLogo({
  tech,
  size = 20,
  className,
  colored = true,
}: {
  tech: Tech;
  size?: number;
  className?: string;
  colored?: boolean;
}) {
  const brand = tech.color;
  const style = brand ? ({ "--tech-color": brand } as CSSProperties) : undefined;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      style={colored && brand ? { ...style, color: brand } : style}
      className={`transition-colors duration-200 ${brand ? "group-hover:text-[var(--tech-color)]" : colored ? "text-foreground" : ""} ${className ?? ""}`}
    >
      <use href={`#tech-${tech.id}`} />
    </svg>
  );
}

export { TECH };
