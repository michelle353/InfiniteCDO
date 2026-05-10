"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AmbientBackgroundProps {
  /** Visual intensity — controls glow opacity & saturation */
  intensity?: "subtle" | "medium";
  /** Render slowly drifting blur orbs for atmospheric motion */
  showOrbs?: boolean;
  /** Render faint dot/grid texture on top of the glow */
  showGrid?: boolean;
  /** Add a soft fade-to-white mask at top + bottom edges */
  edgeFade?: boolean;
  className?: string;
}

/**
 * AmbientBackground
 *
 * A premium, atmospheric background designed for hero sections —
 * inspired by Linear, Vercel, and OpenAI landing pages.
 *
 * Layer stack (back to front):
 *   1. White base
 *   2. Three large soft radial gradients (center, top-left, bottom-right)
 *      using the brand lavender/purple palette
 *   3. Three slowly drifting blur orbs (optional, motion-safe)
 *   4. Very faint SVG grain for organic texture
 *   5. Dot/grid pattern (optional, sits on top of the shader-like glow)
 *   6. Top + bottom mask fade-to-white for clean section transitions
 *
 * Performance:
 *   - Pure CSS + SVG — no WebGL, no canvas. Mobile-safe.
 *   - Uses `will-change` and `transform` for GPU-accelerated motion.
 *   - Respects `prefers-reduced-motion` (orbs become static).
 *   - All layers are `pointer-events-none` and `aria-hidden`.
 */
export default function AmbientBackground({
  intensity = "subtle",
  showOrbs = true,
  showGrid = true,
  edgeFade = true,
  className,
}: AmbientBackgroundProps) {
  const reduceMotion = useReducedMotion();
  const animate = showOrbs && !reduceMotion;

  // Two intensity presets — never go fully saturated, this is premium not cyberpunk.
  const glowAlpha = intensity === "medium" ? 0.32 : 0.22;
  const orbAlpha = intensity === "medium" ? 0.45 : 0.32;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {/* ── Layer 1: white base ────────────────────────────────────── */}
      <div className="absolute inset-0 bg-white" />

      {/* ── Layer 2: layered radial gradients (the "shader" core) ──
          Hues are pulled directly from the brand palette so the glow
          reads as part of the site, not a stand-alone effect.

            deepPurple #5B3FD6  → hsl(250, 67%, 54%)
            lavender   #B9A0F5  → hsl(257, 81%, 79%)
            lavenderMid #E5DAFC → hsl(263, 89%, 92%)
            lavenderLight #F4F0FF → hsl(258, 100%, 97%)                  */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse 70% 55% at 50% 35%,
              hsla(250, 67%, 54%, ${glowAlpha}) 0%,
              hsla(250, 67%, 54%, 0) 70%
            ),
            radial-gradient(
              ellipse 50% 40% at 15% 20%,
              hsla(257, 81%, 79%, ${glowAlpha * 0.9}) 0%,
              hsla(257, 81%, 79%, 0) 75%
            ),
            radial-gradient(
              ellipse 55% 45% at 85% 80%,
              hsla(263, 89%, 92%, ${glowAlpha * 1.1}) 0%,
              hsla(263, 89%, 92%, 0) 70%
            ),
            radial-gradient(
              ellipse 80% 60% at 50% 100%,
              hsla(258, 100%, 97%, ${glowAlpha * 1.2}) 0%,
              hsla(258, 100%, 97%, 0) 75%
            )
          `,
        }}
      />

      {/* ── Layer 3: drifting orbs ─────────────────────────────────
          Three independently animated blurred discs that gently drift.
          Disabled when prefers-reduced-motion is set. */}
      {showOrbs && (
        <>
          {/* deepPurple orb — top-left, the strongest brand presence */}
          <motion.div
            className="absolute -top-32 -left-32 h-[560px] w-[560px] rounded-full will-change-transform"
            style={{
              backgroundColor: `hsla(250, 67%, 54%, ${orbAlpha * 0.5})`,
              filter: "blur(120px)",
            }}
            animate={animate ? { x: [0, 40, 0], y: [0, 30, 0] } : undefined}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* lavender orb — top-right, the brand's signature soft purple */}
          <motion.div
            className="absolute top-1/4 -right-40 h-[520px] w-[520px] rounded-full will-change-transform"
            style={{
              backgroundColor: `hsla(257, 81%, 79%, ${orbAlpha * 0.6})`,
              filter: "blur(110px)",
            }}
            animate={animate ? { x: [0, -30, 0], y: [0, 40, 0] } : undefined}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          {/* lavenderMid orb — bottom, lifts the floor without darkening it */}
          <motion.div
            className="absolute -bottom-40 left-1/3 h-[460px] w-[460px] rounded-full will-change-transform"
            style={{
              backgroundColor: `hsla(263, 89%, 92%, ${orbAlpha * 0.8})`,
              filter: "blur(100px)",
            }}
            animate={animate ? { x: [0, 25, 0], y: [0, -35, 0] } : undefined}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
        </>
      )}

      {/* ── Layer 4: ultra-faint grain for organic texture ─────────
          Inline SVG turbulence at very low opacity. Adds that
          "real shader" feel without WebGL. */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.025] mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="ambient-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          {/* Tints grain to the brand deepPurple (#5B3FD6 = 0.357 0.247 0.839) */}
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.357  0 0 0 0 0.247  0 0 0 0 0.839  0 0 0 0.55 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#ambient-noise)" />
      </svg>

      {/* ── Layer 5: dot grid (sits on top of the glow) ────────────
          Sits BEHIND content but ABOVE the shader, exactly as briefed. */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            // Brand deepPurple #5B3FD6 = hsl(250, 67%, 54%)
            backgroundImage:
              "radial-gradient(circle, hsl(250 67% 54% / 0.55) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 75% 60% at 50% 50%, black 35%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 60% at 50% 50%, black 35%, transparent 80%)",
          }}
        />
      )}

      {/* ── Layer 6: edge fades to white ───────────────────────────
          Keeps the section transitioning cleanly into white surfaces. */}
      {edgeFade && (
        <>
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
        </>
      )}
    </div>
  );
}
