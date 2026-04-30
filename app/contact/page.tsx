import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import AnimatedPageHero from "@/components/sections/AnimatedPageHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with One Key Property Management. Free property valuations, landlord enquiries, and tenant support. Call, email, or use our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <AnimatedPageHero
        title="Contact Us"
        subtitle="Whether you're a landlord looking for management services or a tenant needing support, we're here to help."
      />

      {/* Form + Details */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-light/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-border">
              <h2 className="text-2xl font-bold mb-2">Send Us an Enquiry</h2>
              <p className="text-gray-medium mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Details */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <ContactDetail
                  icon={<PhoneIcon />}
                  label="Phone"
                  value="+44 7727 821009"
                  href="tel:+447727821009"
                />
                <ContactDetail
                  icon={<EmailIcon />}
                  label="Email"
                  value="info@onekeyproperty.co.uk"
                  href="mailto:info@onekeyproperty.co.uk"
                />
                <ContactDetail
                  icon={<LocationIcon />}
                  label="Office"
                  value="Egham, Surrey, United Kingdom"
                />
                <ContactDetail
                  icon={<ClockIcon />}
                  label="Hours"
                  value="Mon - Fri: 9:00 AM - 6:00 PM"
                />
              </div>

              {/* Trust Box */}
              <div className="mt-8 bg-gradient-to-br from-primary to-primary-light rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Why Contact Us?</h3>
                <ul className="space-y-2">
                  {[
                    "Free, no-obligation property valuations",
                    "Expert advice from experienced managers",
                    "Quick response within 24 hours",
                    "Friendly, professional service",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                      <svg className="w-4 h-4 text-accent-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactDetail({ icon, label, value, href }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-accent-light/5 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-medium font-medium">{label}</p>
        {href ? (
          <a href={href} className="font-semibold text-foreground hover:text-accent transition-colors">
            {value}
          </a>
        ) : (
          <p className="font-semibold text-foreground">{value}</p>
        )}
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
