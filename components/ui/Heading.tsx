import { cn } from "@/lib/utils";

interface HeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  accent?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "text-2xl md:text-3xl",
  md: "text-3xl md:text-4xl lg:text-display-md",
  lg: "text-4xl md:text-5xl lg:text-display-lg",
};

/**
 * Branded heading block with optional eyebrow + accent underline.
 * The accent underline is a small lavender-to-purple gradient bar
 * that gives every section a consistent visual signature.
 */
export default function Heading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  accent = true,
  className,
  as: Tag = "h2",
  size = "md",
}: HeadingProps) {
  const isDark = theme === "dark";
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
            "text-sm font-semibold uppercase tracking-[0.18em] mb-3",
            isDark ? "text-brand-lavender" : "text-brand-deepPurple"
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          sizeMap[size],
          "font-bold tracking-tight leading-[1.15]",
          isDark ? "text-white" : "text-brand-nearBlack"
        )}
      >
        {title}
      </Tag>
      {accent && (
        <div
          className={cn(
            "h-1 w-16 rounded-full mt-5",
            align === "center" && "mx-auto",
            isDark
              ? "bg-gradient-to-r from-brand-lavender to-white/40"
              : "bg-gradient-to-r from-brand-deepPurple to-brand-lavender"
          )}
          aria-hidden="true"
        />
      )}
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            isDark ? "text-white/70" : "text-brand-nearBlack/65"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
