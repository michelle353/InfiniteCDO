"use client";

import { stats } from "@/lib/data";
import Heading from "@/components/ui/Heading";
import StatCard from "@/components/ui/StatCard";
import InfinityWatermark from "@/components/ui/InfinityWatermark";

export default function Stats() {
  return (
    <section className="relative py-24 lg:py-28 bg-brand-lavenderLight overflow-hidden" aria-label="Impact statistics">
      <InfinityWatermark position="center" size="xl" color="purple" opacity="subtle" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading
          eyebrow="Proven Track Record"
          title="Enterprise-scale results"
          subtitle="Numbers that speak to the depth of experience behind every engagement."
          size="md"
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
