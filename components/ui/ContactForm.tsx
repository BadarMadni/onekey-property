"use client";

import { useState } from "react";
import Button from "./Button";

const serviceOptions = [
  { value: "", label: "Select a service..." },
  { value: "property-management", label: "Full Property Management" },
  { value: "tenant-sourcing", label: "Tenant Sourcing" },
  { value: "valuation", label: "Free Valuation" },
  { value: "maintenance", label: "Maintenance Request" },
  { value: "general", label: "General Enquiry" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-gradient-to-br from-accent/5 to-accent-light/5 border border-accent/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-gray-medium">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">Full Name</label>
          <input id="name" name="name" required placeholder="John Smith"
            className="w-full px-4 py-3 border border-gray-border rounded-xl bg-gray-light/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Phone Number</label>
          <input id="phone" name="phone" type="tel" required placeholder="07XXX XXXXXX"
            className="w-full px-4 py-3 border border-gray-border rounded-xl bg-gray-light/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email Address</label>
        <input id="email" name="email" type="email" required placeholder="john@example.com"
          className="w-full px-4 py-3 border border-gray-border rounded-xl bg-gray-light/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all" />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1.5">Service Required</label>
        <select id="service" name="service" required
          className="w-full px-4 py-3 border border-gray-border rounded-xl bg-gray-light/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all">
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
        <textarea id="message" name="message" rows={4} placeholder="Tell us about your requirements..."
          className="w-full px-4 py-3 border border-gray-border rounded-xl bg-gray-light/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all resize-none" />
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Enquiry"}
      </Button>
      {status === "error" && (
        <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
