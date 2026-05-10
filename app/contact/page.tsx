import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import PageHero from "@/components/sections/PageHero";
import InfinityWatermark from "@/components/ui/InfinityWatermark";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute discovery call with Michelle Ghai to explore how digital and AI capabilities can create meaningful change for your organization.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's collaborate"
        subtitle="Start with a free 30-minute discovery call. We'll talk through your goals, challenges, and what's possible."
      />

      {/* Contact section with branded background */}
      <div className="relative bg-gradient-to-b from-white via-brand-lavenderLight/40 to-white py-20 lg:py-24 overflow-hidden">
        <InfinityWatermark position="top-right" size="xl" color="purple" opacity="subtle" />
        <InfinityWatermark position="bottom-left" size="lg" color="lavender" opacity="subtle" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deepPurple mb-3">The Process</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-brand-plum mb-2 tracking-tight">How it works</h2>
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-brand-deepPurple to-brand-lavender mb-6" aria-hidden="true" />
                <ol className="space-y-5">
                  {[
                    { n: "01", title: "Send a message", desc: "Tell us a bit about your organization and what you're working on." },
                    { n: "02", title: "We respond in 24hrs", desc: "You'll hear back within one business day to schedule a time." },
                    { n: "03", title: "Free discovery call", desc: "30 minutes to explore what's possible. No sales pitch — just a real conversation." },
                    { n: "04", title: "Proposal if it fits", desc: "If there's a good fit, we'll outline a scope and engagement structure." },
                  ].map(({ n, title, desc }) => (
                    <li key={n} className="flex gap-4">
                      <span className="text-3xl font-bold bg-gradient-to-br from-brand-lavender to-brand-lavenderMid bg-clip-text text-transparent font-mono leading-none flex-shrink-0 w-10">{n}</span>
                      <div>
                        <p className="font-semibold text-brand-nearBlack mb-0.5">{title}</p>
                        <p className="text-sm text-brand-nearBlack/60 leading-relaxed">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Social links */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deepPurple mb-4">Connect</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "LinkedIn", href: siteConfig.social.linkedin, icon: "linkedin" },
                    { label: "X / Twitter", href: siteConfig.social.twitter, icon: "x" },
                    { label: "Instagram", href: siteConfig.social.instagram, icon: "instagram" },
                    { label: "Facebook", href: siteConfig.social.facebook, icon: "facebook" },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white border border-brand-lavenderMid rounded-xl px-4 py-3 text-sm text-brand-plum hover:border-brand-lavender hover:bg-brand-lavenderLight hover:shadow-sm transition-all"
                    >
                      <span className="w-7 h-7 rounded-lg bg-brand-lavenderLight flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-brand-deepPurple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                      </span>
                      <span className="font-medium">{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Note card */}
              <div className="relative bg-gradient-to-br from-brand-plum to-brand-deepPurple rounded-2xl p-6 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle, #B9A0F5 1px, transparent 1px)", backgroundSize: "20px 20px" }} aria-hidden="true" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-lavender mb-3">A friendly note</p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Not ready for a call yet? Feel free to reach out just to say hello or ask a question. There&apos;s no minimum commitment to get in touch.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
