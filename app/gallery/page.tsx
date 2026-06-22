import type { Metadata } from "next";
import AnimatedPageHero from "@/components/sections/AnimatedPageHero";
import CTABanner from "@/components/ui/CTABanner";
import PropertyShowcase from "@/components/gallery/PropertyShowcase";
import AnimateIn from "@/components/ui/AnimateIn";
import { properties } from "@/lib/gallery-data";

export const metadata: Metadata = {
  title: "Property Gallery",
  description:
    "Browse our portfolio of managed properties across Surrey. See the quality of homes One Key Property Management lets and maintains.",
};

export default function GalleryPage() {
  const totalPhotos = properties.reduce((sum, p) => sum + p.images.length, 0);

  return (
    <>
      <AnimatedPageHero
        title="Our Property Portfolio"
        subtitle="A showcase of beautiful homes we let and manage across Surrey"
        image="/hero-contact.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Stats */}
          <AnimateIn>
            <div className="flex flex-wrap items-center justify-center gap-8 mb-16 pb-16 border-b border-gray-border">
              {[
                { value: properties.length, label: "Managed Properties" },
                { value: totalPhotos, label: "Property Photos" },
                { value: "Surrey", label: "Area Served" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-gray-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Properties */}
          {properties.map((property, i) => (
            <AnimateIn key={property.id} delay={i * 0.1}>
              <PropertyShowcase property={property} />
            </AnimateIn>
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
