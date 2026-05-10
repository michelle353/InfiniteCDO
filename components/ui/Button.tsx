import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-deepPurple text-white hover:bg-brand-deepPurpleHover shadow-sm hover:shadow-md active:scale-[0.98]",
  secondary:
    "bg-brand-plum text-white hover:bg-brand-plumLight shadow-sm hover:shadow-md active:scale-[0.98]",
  ghost:
    "bg-transparent text-brand-deepPurple hover:bg-brand-lavenderLight active:scale-[0.98]",
  outline:
    "bg-white border border-brand-lavenderMid text-brand-plum hover:border-brand-lavender hover:bg-brand-lavenderLight active:scale-[0.98]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-6 py-3 text-base gap-2",
};

const baseClasses =
  "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-deepPurple focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, external, children, className, ...props }, ref) => {
    const classes = cn(baseClasses, variants[variant], sizes[size], className);

    if (href) {
      if (external) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
