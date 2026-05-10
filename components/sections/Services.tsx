import { services } from "@/lib/data";
import Heading from "@/components/ui/Heading";
import ServiceCard from "@/components/ui/ServiceCard";
import InfinityWatermark from "@/components/ui/InfinityWatermark";

export default function Services() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden" id="services" aria-label="Services">
      <InfinityWatermark position="top-right" size="xl" color="purple" opacity="subtle" />
      <InfinityWatermark position="bottom-left" size="lg" color="lavender" opacity="subtle" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading
          eyebrow="What We Do"
          title="Strategic expertise across seven core areas"
          subtitle="Choose a focused engagement or a holistic partnership. Each offering delivers enterprise-grade thinking calibrated to your scale, stage, and mission."
          className="mb-16"
        />

        {/* 3-col grid on desktop, 2 on tablet, 1 on mobile.
            ServiceCard handles its own scroll-triggered animation. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>

      {/* Subtle bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-brand-lavenderLight/30 pointer-events-none" aria-hidden="true" />
    </section>
  );
}
