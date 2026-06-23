"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AnimatedHero() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  return (
    <section className="relative overflow-hidden min-h-[80vh] md:min-h-[90vh] flex items-center">
      <Image
        src="/hero-home.jpg"
        alt="Modern property"
        fill
        priority
        fetchPriority="high"
        className="object-cover"
        sizes="100vw"
        quality={60}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/75 to-primary-light/50" />

      {/* Animated gradient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-accent/15 to-accent-light/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent-dark/10 to-transparent rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="lg:flex lg:items-center lg:gap-16">
        <div className="max-w-2xl lg:flex-shrink-0">
          <div
            className="flex items-center gap-3 mb-8"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.5s ease-out",
            }}
          >
            <div className="h-px w-10 bg-gradient-to-r from-accent to-accent-light" />
            <span className="text-accent-light text-sm font-semibold tracking-widest uppercase">
              Property Management
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out 0.15s",
            }}
          >
            We manage.
            <br />
            <span
              className="bg-gradient-to-r from-accent-light via-accent to-white bg-clip-text text-transparent inline-block"
              style={{
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.5s",
              }}
            >
              You earn.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.4s",
            }}
          >
            Expert property management and landlord services in Surrey.
            Hassle-free letting with maximum returns.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.6s",
            }}
          >
            <Button href="/contact" size="lg" variant="primary">
              Get Free Valuation
            </Button>
            <Button href="/landlord-services" size="lg" variant="outline">
              Our Services
            </Button>
          </div>

          {/* Trust strip */}
          <div
            className="mt-14 flex items-center gap-8 text-white/50 text-sm"
            style={{
              opacity: show ? 1 : 0,
              transition: "opacity 0.6s ease-out 0.9s",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-accent-light text-lg font-bold">200+</span>
              <span>Properties</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-accent-light text-lg font-bold">15+</span>
              <span>Years</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-accent-light text-lg font-bold">4.9</span>
              <span>Rating</span>
            </div>
          </div>
        </div>

        {/* Floating feature card — desktop only */}
        <div
          className="hidden lg:flex flex-col gap-4 ml-auto"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 0.7s",
          }}
        >
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-64 shadow-2xl shadow-black/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-gradient-to-br from-accent to-accent-dark rounded-lg flex items-center justify-center shadow-md shadow-accent/30">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Free Valuation</p>
                <p className="text-white/50 text-xs">No obligation</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-accent-light text-xs font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available today
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-64 shadow-2xl shadow-black/20 ml-8">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-3 font-medium">Occupancy Rate</p>
            <div className="flex items-end gap-2 mb-3">
              <span className="text-4xl font-bold text-white">98</span>
              <span className="text-accent-light text-xl font-bold mb-1">%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-accent to-accent-light h-1.5 rounded-full" style={{ width: "98%" }} />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-64 shadow-2xl shadow-black/20">
            <div className="flex items-center justify-between mb-2">
              <p className="text-white/50 text-xs uppercase tracking-widest font-medium">Client Rating</p>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-white text-3xl font-bold">4.9 <span className="text-white/40 text-sm font-normal">/ 5.0</span></p>
            <p className="text-white/40 text-xs mt-1">Based on 200+ reviews</p>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}
