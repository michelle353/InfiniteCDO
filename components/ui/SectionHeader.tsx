import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = "center",
  theme = "light",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-widest mb-3",
            theme === "dark" ? "text-brand-lavender" : "text-brand-deepPurple"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-display-md font-bold tracking-tight",
          theme === "dark" ? "text-white" : "text-brand-nearBlack"
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            theme === "dark" ? "text-white/70" : "text-brand-nearBlack/60"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
