"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description?: string;
  index?: number;
  theme?: "light" | "dark";
}

export default function StatCard({
  value,
  prefix,
  suffix,
  label,
  description,
  index = 0,
  theme = "light",
}: StatCardProps) {
  const isDark = theme === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative group rounded-2xl p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1",
        isDark
          ? "bg-brand-plum/40 border border-brand-lavender/15 hover:border-brand-lavender/30 hover:bg-brand-plum/60"
          : "bg-white border border-brand-lavenderMid hover:border-brand-lavender shadow-card hover:shadow-card-hover"
      )}
    >
      {/* Top accent line on hover */}
      <div
        className={cn(
          "absolute top-0 left-7 right-7 h-px opacity-0 group-hover:opacity-100 transition-opacity",
          isDark
            ? "bg-gradient-to-r from-transparent via-brand-lavender to-transparent"
            : "bg-gradient-to-r from-transparent via-brand-deepPurple to-transparent"
        )}
      />

      <div
        className={cn(
          "text-4xl lg:text-5xl font-bold tabular-nums mb-3 leading-none",
          isDark ? "text-white" : "text-brand-plum"
        )}
      >
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
      </div>
      <p
        className={cn(
          "text-base font-semibold mb-1.5",
          isDark ? "text-white" : "text-brand-nearBlack"
        )}
      >
        {label}
      </p>
      {description && (
        <p
          className={cn(
            "text-sm leading-relaxed",
            isDark ? "text-white/55" : "text-brand-nearBlack/55"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
