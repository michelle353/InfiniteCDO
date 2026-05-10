import { cn } from "@/lib/utils";

interface InfinityWatermarkProps {
  /** Position within parent (parent must be relative + overflow-hidden) */
  position?: "top-right" | "bottom-left" | "center" | "top-left" | "bottom-right";
  size?: "sm" | "md" | "lg" | "xl";
  opacity?: "subtle" | "medium";
  color?: "purple" | "lavender" | "white";
  className?: string;
}

const sizeMap = {
  sm: "w-48 h-24",
  md: "w-72 h-36",
  lg: "w-[28rem] h-56",
  xl: "w-[40rem] h-80",
};

const positionMap = {
  "top-right": "-top-12 -right-12",
  "top-left": "-top-12 -left-12",
  "bottom-right": "-bottom-12 -right-12",
  "bottom-left": "-bottom-12 -left-12",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

const colorMap = {
  purple: "stroke-brand-deepPurple",
  lavender: "stroke-brand-lavender",
  white: "stroke-white",
};

const opacityMap = {
  subtle: "opacity-[0.05]",
  medium: "opacity-[0.10]",
};

/**
 * Decorative infinity-symbol watermark that echoes the brand mark.
 * Use sparingly as a background flourish on signature sections.
 */
export default function InfinityWatermark({
  position = "top-right",
  size = "lg",
  opacity = "subtle",
  color = "purple",
  className,
}: InfinityWatermarkProps) {
  return (
    <div
      className={cn(
        "absolute pointer-events-none",
        positionMap[position],
        sizeMap[size],
        opacityMap[opacity],
        className
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50,50 C50,30 70,20 85,35 L100,50 L115,65 C130,80 150,70 150,50 C150,30 130,20 115,35 L100,50 L85,65 C70,80 50,70 50,50 Z"
          className={cn("fill-none", colorMap[color])}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
