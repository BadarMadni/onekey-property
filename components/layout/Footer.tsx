import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/landlord-services", label: "Landlord Services" },
  { href: "/tenant-support", label: "Tenant Support" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary via-primary-dark to-primary-dark text-white relative overflow-hidden">
      {/* Gradient glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-light/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-dark via-accent to-accent-light rounded-lg flex items-center justify-center shadow-md shadow-accent/20">
                <span className="text-white font-bold">O</span>
              </div>
              <span className="font-bold text-lg tracking-tight">One Key Property</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Professional property management services you can trust.
              Maximising returns for landlords and providing exceptional
              support for tenants.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest mb-5 text-accent-light/60">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-accent-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest mb-5 text-accent-light/60">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2.5">
                <PhoneIcon />
                <a href="tel:+447727821009" className="hover:text-accent-light transition-colors">+44 7727 821009</a>
              </li>
              <li className="flex items-center gap-2.5">
                <EmailIcon />
                <a href="mailto:info@onekeyproperty.co.uk" className="hover:text-accent-light transition-colors">info@onekeyproperty.co.uk</a>
              </li>
              <li className="flex items-start gap-2.5">
                <LocationIcon />
                <span>Egham, Surrey, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/30">
          &copy; {new Date().getFullYear()} One Key Property Management. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
