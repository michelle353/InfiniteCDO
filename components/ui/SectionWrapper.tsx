import { cn } from "@/lib/utils";
import InfinityWatermark from "./InfinityWatermark";
import WaveDivider from "./WaveDivider";

type SectionBg = "white" | "lavenderLight" | "lavender" | "plum" | "gradient-lavender";

interface SectionWrapperProps {
  children: React.ReactNode;
  bg?: SectionBg;
  /** Render an infinity watermark as background flourish */
  watermark?: boolean;
  watermarkPosition?: "top-right" | "bottom-left" | "top-left" | "bottom-right";
  /** Render a wave divider at bottom transitioning to next section */
  waveBottom?: SectionBg;
  /** Render a wave divider at top */
  waveTop?: SectionBg;
  id?: string;
  ariaLabel?: string;
  spacing?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const bgMap: Record<SectionBg, string> = {
  white: "bg-white",
  lavenderLight: "bg-brand-lavenderLight",
  lavender: "bg-brand-lavender",
  plum: "bg-brand-plum",
  "gradient-lavender": "bg-gradient-to-b from-brand-lavenderLight to-white",
};

const spacingMap = {
  sm: "py-14 lg:py-20",
  md: "py-20 lg:py-28",
  lg: "py-24 lg:py-32",
  xl: "py-28 lg:py-40",
};

const waveColorMap: Record<SectionBg, "white" | "lavender" | "lavenderLight" | "plum"> = {
  white: "white",
  lavenderLight: "lavenderLight",
  lavender: "lavender",
  plum: "plum",
  "gradient-lavender": "lavenderLight",
};

const watermarkColorForBg: Record<SectionBg, "purple" | "lavender" | "white"> = {
  white: "purple",
  lavenderLight: "purple",
  lavender: "white",
  plum: "white",
  "gradient-lavender": "purple",
};

/**
 * Standardized section wrapper. Handles consistent padding, optional
 * infinity-symbol watermark, and optional wave dividers — so every
 * section feels visually rhythmic without per-section boilerplate.
 */
export default function SectionWrapper({
  children,
  bg = "white",
  watermark = false,
  watermarkPosition = "top-right",
  waveBottom,
  waveTop,
  id,
  ariaLabel,
  spacing = "lg",
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "relative overflow-hidden",
        bgMap[bg],
        spacingMap[spacing],
        className
      )}
    >
      {watermark && (
        <InfinityWatermark
          position={watermarkPosition}
          size="xl"
          color={watermarkColorForBg[bg]}
          opacity="subtle"
        />
      )}
      {waveTop && <WaveDivider position="top" fill={waveColorMap[waveTop]} />}

      <div className="relative">{children}</div>

      {waveBottom && <WaveDivider position="bottom" fill={waveColorMap[waveBottom]} />}
    </section>
  );
}
