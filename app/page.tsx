import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import BenefitCard from "@/components/ui/BenefitCard";
import CTABanner from "@/components/ui/CTABanner";
import AnimateIn from "@/components/ui/AnimateIn";
import AnimatedHero from "@/components/sections/AnimatedHero";
import AnimatedStats from "@/components/sections/AnimatedStats";
import { ShieldIcon, ClockIcon, PoundIcon, HeartIcon, KeyIcon, WrenchIcon, ChartIcon } from "@/components/ui/Icons";

export default function HomePage() {
  return (
    <>
      <AnimatedHero />
      <AnimatedStats />

      {/* Benefits */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-white via-gray-light/50 to-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              title="Why Landlords Choose Us"
              subtitle="We take the stress out of property management with our comprehensive services"
            />
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <AnimateIn delay={0.1} direction="left">
              <BenefitCard icon={<PoundIcon />} title="Maximise Your Rental Income" description="Our expert pricing and marketing strategies ensure your property generates the best possible returns." />
            </AnimateIn>
            <AnimateIn delay={0.2} direction="right">
              <BenefitCard icon={<ShieldIcon />} title="Fully Compliant & Insured" description="We handle all legal requirements, safety checks, and compliance so you have complete peace of mind." />
            </AnimateIn>
            <AnimateIn delay={0.3} direction="left">
              <BenefitCard icon={<ClockIcon />} title="Save Your Time" description="From tenant sourcing to maintenance, we manage everything so you can focus on what matters." />
            </AnimateIn>
            <AnimateIn delay={0.4} direction="right">
              <BenefitCard icon={<HeartIcon />} title="Dedicated Support" description="A named property manager for every landlord, providing personal and responsive service." />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              title="Our Services"
              subtitle="Comprehensive property management for landlords and tenants"
              light
            />
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <KeyIcon />, title: "Tenant Sourcing", description: "Finding quality, vetted tenants quickly to minimise void periods." },
              { icon: <PoundIcon />, title: "Rent Collection", description: "Reliable rent collection and arrears management on your behalf." },
              { icon: <WrenchIcon />, title: "Maintenance", description: "24/7 maintenance coordination with trusted local contractors." },
              { icon: <ChartIcon />, title: "Full Management", description: "End-to-end property management so you can be hands-off." },
            ].map((service, i) => (
              <AnimateIn key={service.title} delay={i * 0.15}>
                <ServiceCard {...service} dark />
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.6}>
            <div className="text-center mt-12">
              <Button href="/landlord-services" variant="primary" size="lg">View All Services &rarr;</Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTABanner
        title="Ready to Let Your Property?"
        subtitle="Get a free, no-obligation valuation today and find out how much your property could earn."
      />
    </>
  );
}
