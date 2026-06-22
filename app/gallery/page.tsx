import type { Metadata } from "next";
import AnimatedPageHero from "@/components/sections/AnimatedPageHero";
import CTABanner from "@/components/ui/CTABanner";
import PropertyShowcase from "@/components/gallery/PropertyShowcase";
import CountUp from "@/components/ui/CountUp";
import { properties } from "@/lib/gallery-data";

export const metadata: Metadata = {
  title: "Property Gallery",
  description:
    "Browse our portfolio of managed properties across Surrey. See the quality of homes One Key Property Management lets and maintains.",
};

const stats = [
  {
    value: 4, suffix: "+", label: "Properties Managed",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    value: 44, suffix: "", label: "Professional Photos",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    value: 100, suffix: "%", label: "Compliance Record",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    value: 24, suffix: "/7", label: "Maintenance Support",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function GalleryPage() {
  return (
    <>
      <AnimatedPageHero
        title="Our Property Portfolio"
        subtitle="A showcase of beautiful homes we let and manage across Surrey"
        image="/hero-contact.jpg"
      />

      {/* Premium Stats Strip */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-light/5 rounded-full blur-[80px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent-light">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-white tracking-tight">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-white/60 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {properties.map((property) => (
            <PropertyShowcase key={property.id} property={property} />
          ))}
        </div>
      </section>

      <CTABanner
        title="Have a Property to Let?"
        subtitle="Join our portfolio and let us find you quality, vetted tenants."
      />
    </>
  );
}
