interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

/**
 * Reusable page header for all interior pages.
 * Uses the brand lavender → white gradient for an executive but warm tone.
 */
export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-brand-lavenderLight pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden" aria-label={eyebrow}>
      {/* Soft background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-lavender/30 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-brand-lavenderMid/40 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-deepPurple mb-4">
            {eyebrow}
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-brand-nearBlack tracking-tight leading-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-brand-nearBlack/70 leading-relaxed">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Bottom fade into white */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
    </section>
  );
}
