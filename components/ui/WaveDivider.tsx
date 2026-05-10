import { cn } from "@/lib/utils";

interface WaveDividerProps {
  /** Color of the wave (the next section's background) */
  fill?: "white" | "lavender" | "lavenderLight" | "plum";
  /** Place the wave at the top (flipped) or bottom of a section */
  position?: "top" | "bottom";
  className?: string;
}

const fillMap = {
  white: "#FFFFFF",
  lavender: "#B9A0F5",
  lavenderLight: "#F4F0FF",
  plum: "#3B236D",
};

/**
 * Elegant curved divider for transitioning between sections.
 * Position at the bottom of a section with `position="bottom"` and `fill`
 * matching the NEXT section's background color.
 */
export default function WaveDivider({
  fill = "white",
  position = "bottom",
  className,
}: WaveDividerProps) {
  return (
    <div
      className={cn(
        "absolute left-0 right-0 w-full pointer-events-none leading-[0]",
        position === "bottom" ? "bottom-0" : "top-0 rotate-180",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16 lg:h-20 block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,32 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440,80 L0,80 Z"
          fill={fillMap[fill]}
        />
      </svg>
    </div>
  );
}
