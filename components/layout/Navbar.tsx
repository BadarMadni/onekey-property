"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/landlord-services", label: "Landlord Services" },
  { href: "/tenant-support", label: "Tenant Support" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-border/50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gradient-to-br from-accent-dark via-accent to-accent-light rounded-lg flex items-center justify-center shadow-md shadow-accent/20">
            <span className="text-white font-bold text-lg">O</span>
          </div>
          <div className="leading-tight">
            <span className="font-bold text-primary text-lg tracking-tight">One Key</span>
            <span className="block text-[10px] text-gray-medium font-medium tracking-widest uppercase">
              Property Management
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  pathname === link.href ? "text-accent" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="/contact" size="sm">Get Free Valuation</Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-foreground transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-border">
          <ul className="px-4 py-4 space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href ? "bg-accent/10 text-accent" : "text-foreground hover:bg-gray-light"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href="/contact" size="sm" className="w-full">Get Free Valuation</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
