import { cn } from "@/lib/utils";

type BadgeVariant = "blue" | "cyan" | "green" | "purple" | "slate" | "orange";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  blue: "bg-blue-100 text-blue-700 ring-blue-200",
  cyan: "bg-cyan-100 text-cyan-700 ring-cyan-200",
  green: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  purple: "bg-purple-100 text-purple-700 ring-purple-200",
  slate: "bg-slate-100 text-slate-600 ring-slate-200",
  orange: "bg-orange-100 text-orange-700 ring-orange-200",
};

export default function Badge({ variant = "slate", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ring-1",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
