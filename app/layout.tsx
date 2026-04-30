import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.onekeyproperty.co.uk"),
  title: {
    default: "One Key Property Management | Professional Letting & Property Management",
    template: "%s | One Key Property Management",
  },
  description:
    "Trusted property management in Surrey. Tenant sourcing, rent collection, maintenance & compliance. Free valuations for landlords. Dedicated tenant support.",
  keywords: [
    "property management",
    "letting agent Egham",
    "landlord services Surrey",
    "tenant sourcing",
    "rent collection",
    "property maintenance",
    "letting agent Surrey",
    "property management UK",
  ],
  authors: [{ name: "One Key Property Management" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.onekeyproperty.co.uk",
    siteName: "One Key Property Management",
    title: "One Key Property Management | Trusted Letting & Management Services",
    description:
      "Professional property management in Surrey. Free valuations, expert landlord services & dedicated tenant support.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.onekeyproperty.co.uk" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "One Key Property Management",
  description: "Professional property management and letting services in Surrey, UK.",
  url: "https://www.onekeyproperty.co.uk",
  email: "info@onekeyproperty.co.uk",
  areaServed: { "@type": "Place", name: "Surrey, United Kingdom" },
  serviceType: ["Property Management", "Tenant Sourcing", "Rent Collection"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
