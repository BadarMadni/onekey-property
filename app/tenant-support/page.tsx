import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "@/components/ui/CTABanner";
import AnimateIn from "@/components/ui/AnimateIn";
import AnimatedPageHero from "@/components/sections/AnimatedPageHero";
import { WrenchIcon, DocumentIcon, TruckIcon, ChatIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Tenant Support",
  description:
    "Dedicated tenant support including maintenance reporting, tenancy guidance, move-in and move-out assistance, and easy contact options.",
};

const services = [
  {
    icon: <WrenchIcon />,
    title: "Maintenance Reporting",
    description:
      "Report maintenance issues quickly and easily. Our dedicated team coordinates repairs with trusted contractors and keeps you updated every step of the way.",
  },
  {
    icon: <DocumentIcon />,
    title: "Tenancy Guidance",
    description:
      "Have questions about your tenancy agreement, deposit, or rights? We provide clear, helpful guidance to ensure you understand everything about your tenancy.",
  },
  {
    icon: <TruckIcon />,
    title: "Move-In & Move-Out Support",
    description:
      "We make moving seamless. From key collection and inventory checks to end-of-tenancy guidance and deposit returns, we support you throughout.",
  },
  {
    icon: <ChatIcon />,
    title: "Easy Contact Options",
    description:
      "Reach us by phone, email, or through our contact form. Our responsive team is here to help with any questions or concerns during your tenancy.",
  },
];

export default function TenantSupportPage() {
  return (
    <>
      <AnimatedPageHero
        title="Tenant Support"
        subtitle="We're here to make your renting experience as smooth and comfortable as possible. Get the support you need, when you need it."
      />

      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-light/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              title="How We Support You"
              subtitle="Dedicated resources and assistance throughout your tenancy"
            />
          </AnimateIn>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <AnimateIn key={service.title} delay={i * 0.15}>
                <ServiceCard {...service} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <SectionHeading title="Need Help?" subtitle="Our team is ready to assist you" />
          </AnimateIn>
          <div className="grid sm:grid-cols-2 gap-6">
            <AnimateIn delay={0.1} direction="left">
              <div className="bg-white rounded-2xl p-6 border border-gray-border shadow-sm hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/15 to-accent-light/10 rounded-xl flex items-center justify-center text-accent mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Call Us</h3>
                <a href="tel:+447727821009" className="text-accent font-semibold hover:underline">+44 7727 821009</a>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="right">
              <div className="bg-white rounded-2xl p-6 border border-gray-border shadow-sm hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/15 to-accent-light/10 rounded-xl flex items-center justify-center text-accent mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Email Us</h3>
                <a href="mailto:info@onekeyproperty.co.uk" className="text-accent font-semibold hover:underline">info@onekeyproperty.co.uk</a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <CTABanner
        title="Have a Question?"
        subtitle="Get in touch and we'll respond within 24 hours."
        buttonText="Contact Us"
      />
    </>
  );
}
