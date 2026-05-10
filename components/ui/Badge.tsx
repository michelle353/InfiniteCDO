import { cn } from "@/lib/utils";

type BadgeVariant = "purple" | "lavender" | "plum" | "outline";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  purple: "bg-brand-lavenderMid text-brand-plum ring-brand-lavender/50",
  lavender: "bg-brand-lavenderLight text-brand-deepPurple ring-brand-lavenderMid",
  plum: "bg-brand-plum text-white ring-brand-plumLight",
  outline: "bg-white text-brand-plum ring-brand-lavenderMid",
};

export default function Badge({ variant = "lavender", children, className }: BadgeProps) {
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
