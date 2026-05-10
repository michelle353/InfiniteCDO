import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "The Infinite CDO | Fractional Chief Digital, Data & AI Officer",
  description:
    "Michelle Ghai — Fractional CDO helping businesses and nonprofits unlock the full potential of digital transformation, data analytics, and AI. 20+ years of enterprise experience.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <About />
      <Testimonials />
      <BlogPreview />
      <CTABand />
    </>
  );
}
