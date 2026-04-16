import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export function GlassFilter() {
  return (
    <svg className="pointer-events-none absolute" style={{ width: 0, height: 0 }}>
      <defs>
        <filter
          id="liquid-glass-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.06 0.06"
            numOctaves="1"
            seed="2"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="1.5" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="55"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="3" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

interface LiquidGlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function LiquidGlassButton({
  className,
  asChild = false,
  children,
  ...props
}: LiquidGlassButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="liquid-glass-button"
      className={cn(
        "relative inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-semibold outline-none",
        "focus-visible:ring-2 focus-visible:ring-purple-400/60",
        "disabled:pointer-events-none disabled:opacity-50",
        "hover:scale-[1.03] active:scale-[0.97] transition-transform duration-200",
        className
      )}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <div
        className="absolute inset-0 z-0 rounded-full"
        style={{
          boxShadow:
            "0 0 6px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.12), inset 3px 3px 0.5px -3px rgba(255,255,255,0.18), inset -3px -3px 0.5px -3px rgba(255,255,255,0.12), inset 1px 1px 1px -0.5px rgba(255,255,255,0.3), inset -1px -1px 1px -0.5px rgba(255,255,255,0.15), inset 0 0 8px 4px rgba(255,255,255,0.06), inset 0 0 2px 2px rgba(255,255,255,0.04), 0 0 16px rgba(167,139,250,0.15)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 overflow-hidden rounded-full"
        style={{ backdropFilter: 'blur(12px) url("#liquid-glass-filter")' }}
      />
      <span className="relative z-10 flex items-center gap-2 pointer-events-none">
        {children}
      </span>
    </Comp>
  );
}

// ─── Liquid Glass Card ───────────────────────────────────────────────────────

export function GlassDistortionFilter() {
  return (
    <svg style={{ display: "none" }}>
      <filter
        id="glass-distortion"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        filterUnits="objectBoundingBox"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.001 0.005"
          numOctaves="1"
          seed="17"
          result="turbulence"
        />
        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
        </feComponentTransfer>
        <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
        <feSpecularLighting
          in="softMap"
          surfaceScale="5"
          specularConstant="1"
          specularExponent="100"
          lightingColor="white"
          result="specLight"
        >
          <fePointLight x="-200" y="-200" z="300" />
        </feSpecularLighting>
        <feComposite
          in="specLight"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
          result="litImage"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="softMap"
          scale="200"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function LiquidGlassCard({ children, className = "", style = {} }: LiquidGlassCardProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-3xl cursor-default", className)}
      style={{
        boxShadow: "0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)",
        ...style,
      }}
    >
      {/* Distorted blur layer */}
      <div
        className="absolute inset-0 z-0 rounded-3xl overflow-hidden"
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />
      {/* Tinted overlay */}
      <div
        className="absolute inset-0 z-10 rounded-3xl"
        style={{ background: "rgba(120, 60, 220, 0.12)" }}
      />
      {/* Inner sheen */}
      <div
        className="absolute inset-0 z-20 rounded-3xl"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255,255,255,0.18), inset -1px -1px 1px 1px rgba(255,255,255,0.08), inset 0 0 20px 2px rgba(140,80,255,0.08)",
        }}
      />
      {/* Content */}
      <div className="relative z-30">{children}</div>
    </div>
  );
}

interface LiquidGlassNavProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function LiquidGlassNav({ children, className, ...props }: LiquidGlassNavProps) {
  return (
    <div className={cn("relative", className)} {...props}>
      <div
        className="absolute inset-0 -z-10 overflow-hidden rounded-full"
        style={{ backdropFilter: 'blur(20px) url("#liquid-glass-filter")' }}
      />
      <div
        className="absolute inset-0 -z-10 rounded-full"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.12), inset 1px 1px 1px -0.5px rgba(255,255,255,0.25), inset -1px -1px 1px -0.5px rgba(255,255,255,0.1), inset 0 0 12px 4px rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.2)",
        }}
      />
      {children}
    </div>
  );
}
