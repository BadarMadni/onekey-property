import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "@/components/ui/CTABanner";
import AnimateIn from "@/components/ui/AnimateIn";
import AnimatedPageHero from "@/components/sections/AnimatedPageHero";
import { KeyIcon, PoundIcon, SearchIcon, WrenchIcon, ShieldIcon, HomeIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Landlord Services",
  description:
    "Comprehensive landlord services including tenant sourcing, rent collection, inspections, maintenance management, compliance support & hassle-free property management.",
};

const services = [
  {
    icon: <KeyIcon />,
    title: "Tenant Sourcing",
    description:
      "We find reliable, fully vetted tenants fast. Our thorough referencing process includes credit checks, employment verification, and previous landlord references to protect your investment.",
  },
  {
    icon: <PoundIcon />,
    title: "Rent Collection",
    description:
      "Never chase rent again. We handle all rent collection, provide monthly statements, and manage any arrears professionally to ensure consistent cash flow.",
  },
  {
    icon: <SearchIcon />,
    title: "Property Inspections",
    description:
      "Regular property inspections with detailed reports and photographs. We identify maintenance issues early and ensure tenants are looking after your property.",
  },
  {
    icon: <WrenchIcon />,
    title: "Maintenance Management",
    description:
      "24/7 maintenance coordination with our network of trusted, vetted contractors. We handle emergencies, repairs, and planned maintenance efficiently and cost-effectively.",
  },
  {
    icon: <ShieldIcon />,
    title: "Compliance Support",
    description:
      "Stay fully compliant with all legal requirements. We manage gas safety certificates, EPC ratings, electrical checks, deposit protection, and right-to-rent checks.",
  },
  {
    icon: <HomeIcon />,
    title: "Hassle-Free Management",
    description:
      "Complete end-to-end property management. From marketing your property to handling tenant queries, we take care of everything so you can enjoy a truly hands-off investment.",
  },
];

export default function LandlordServicesPage() {
  return (
    <>
      <AnimatedPageHero
        title="Landlord Services"
        subtitle="Everything you need to maximise your rental income and protect your property investment, all under one roof."
      />

      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-light/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              title="What We Offer"
              subtitle="Comprehensive services tailored to every landlord's needs"
            />
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimateIn key={service.title} delay={i * 0.1}>
                <ServiceCard {...service} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Let Us Manage Your Property"
        subtitle="Book a free, no-obligation valuation and discover how much your property could earn."
      />
    </>
  );
}
