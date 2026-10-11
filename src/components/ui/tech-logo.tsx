import { TECH, type Tech } from "@/constants/tech";

/** A technology logo. Dark logos inherit the text colour so they stay visible in dark mode. */
export function TechLogo({
  tech,
  size = 20,
  className,
}: {
  tech: Tech;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={tech.color ?? "currentColor"}
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d={tech.path} />
    </svg>
  );
}

export { TECH };
