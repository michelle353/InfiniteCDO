"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ServiceIcon from "./ServiceIcon";
import { cn } from "@/lib/utils";

interface Service {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  color: string;
}

interface ServiceCardProps {
  service: Service;
  href?: string;
  index?: number;
}

// All variants coordinate within the purple palette but give each card
// a subtle distinct accent — keeping the grid harmonious, not monotonous.
const colorVariants: Record<string, { iconBg: string; iconColor: string; accent: string; ring: string }> = {
  deepPurple: {
    iconBg: "bg-gradient-to-br from-brand-deepPurple to-brand-plumLight",
    iconColor: "text-white",
    accent: "text-brand-deepPurple",
    ring: "group-hover:shadow-glow-purple/40",
  },
  plum: {
    iconBg: "bg-gradient-to-br from-brand-plum to-brand-deepPurple",
    iconColor: "text-white",
    accent: "text-brand-plum",
    ring: "group-hover:shadow-glow-purple/40",
  },
  plumLight: {
    iconBg: "bg-gradient-to-br from-brand-plumLight to-brand-lavender",
    iconColor: "text-white",
    accent: "text-brand-plumLight",
    ring: "group-hover:shadow-glow-lavender/50",
  },
  lavender: {
    iconBg: "bg-gradient-to-br from-brand-lavender to-brand-lavenderMid",
    iconColor: "text-brand-plum",
    accent: "text-brand-deepPurple",
    ring: "group-hover:shadow-glow-lavender/50",
  },
};

export default function ServiceCard({ service, href, index = 0 }: ServiceCardProps) {
  const variant = colorVariants[service.color] ?? colorVariants.deepPurple;
  const target = href ?? `/services#${service.id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={target}
        className={cn(
          "group relative block h-full p-8 bg-white rounded-2xl border border-brand-lavenderMid/60 transition-all duration-300",
          "hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-lavender",
          variant.ring
        )}
      >
        {/* Subtle top gradient line on hover */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-lavender to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Icon */}
        <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm", variant.iconBg)}>
          <ServiceIcon icon={service.icon} className={cn("w-7 h-7", variant.iconColor)} />
        </div>

        {/* Tagline */}
        <p className={cn("text-xs font-semibold uppercase tracking-[0.15em] mb-2", variant.accent)}>
          {service.tagline}
        </p>

        {/* Title */}
        <h3 className="text-xl font-bold text-brand-nearBlack mb-3 leading-snug group-hover:text-brand-deepPurple transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-brand-nearBlack/65 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Benefits */}
        <ul className="space-y-2 mb-6">
          {service.benefits.slice(0, 4).map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-brand-nearBlack/70">
              <svg className={cn("w-4 h-4 flex-shrink-0 mt-0.5", variant.accent)} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              {b}
            </li>
          ))}
        </ul>

        {/* Footer arrow */}
        <div className="flex items-center gap-1 text-sm font-semibold text-brand-nearBlack/40 group-hover:text-brand-deepPurple transition-colors">
          Learn more
          <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}
