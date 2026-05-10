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
            theme === "dark" ? "text-blue-400" : "text-blue-600"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-display-md font-bold tracking-tight",
          theme === "dark" ? "text-white" : "text-slate-900"
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            theme === "dark" ? "text-slate-400" : "text-slate-600"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
