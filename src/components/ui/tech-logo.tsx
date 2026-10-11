import type { CSSProperties } from "react";
import { TECH, type Tech } from "@/constants/tech";

/**
 * A technology logo. It is monochrome (inherits the text colour) so every logo stays readable on
 * light and dark backgrounds, and turns into its brand colour when an ancestor with the
 * `group` class is hovered. Pass `colored` to always show the brand colour.
 */
export function TechLogo({
  tech,
  size = 20,
  className,
  colored = false,
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
      className={`transition-colors duration-200 ${brand ? "group-hover:text-[var(--tech-color)]" : ""} ${className ?? ""}`}
    >
      <path d={tech.path} />
    </svg>
  );
}

export { TECH };
