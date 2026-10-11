import { Reveal } from "@/components/ui/reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto mb-12 max-w-2xl text-center md:mb-16" : "mb-8 max-w-xl"}>
      <p
        className={`mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-brand ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
        {eyebrow}
        <span className={`h-px w-8 bg-brand/60 ${centered ? "" : "hidden"}`} aria-hidden="true" />
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
