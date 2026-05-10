import InfinityWatermark from "@/components/ui/InfinityWatermark";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

/**
 * Reusable page header used by all interior pages.
 * Lavender → white gradient with subtle infinity watermark and
 * a curved bottom transition for visual continuity.
 */
export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section
      className="relative bg-gradient-to-b from-brand-lavenderLight via-brand-lavenderLight/70 to-white pt-32 pb-24 lg:pt-40 lg:pb-28 overflow-hidden"
      aria-label={eyebrow}
    >
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-lavender/30 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-brand-lavenderMid/40 blur-[80px]" />
      </div>

      <InfinityWatermark position="top-right" size="xl" color="purple" opacity="subtle" />

      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #5B3FD6 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black 30%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 90%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deepPurple mb-4">
            {eyebrow}
          </p>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-nearBlack tracking-tight leading-[1.05] mb-6">
            {title}
          </h1>
          {/* Accent line */}
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-brand-deepPurple to-brand-lavender mb-6" aria-hidden="true" />
          {subtitle && (
            <p className="text-xl text-brand-nearBlack/65 leading-relaxed max-w-2xl">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Wave transition into next section */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-14 block">
          <path
            d="M0,24 C240,60 480,0 720,24 C960,48 1200,12 1440,36 L1440,60 L0,60 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
