"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 200, suffix: "+", label: "Properties Managed" },
  { value: 98, suffix: "%", label: "Occupancy Rate" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 4.9, suffix: "", label: "Customer Rating" },
];

export default function AnimatedStats() {
  return (
    <section className="py-14 bg-gradient-to-r from-gray-light via-white to-gray-light border-b border-gray-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <AnimateIn key={stat.label} delay={i * 0.1}>
            <div className="group relative bg-white border border-gray-border rounded-2xl px-6 py-7 text-center hover:border-accent/30 hover:shadow-lg hover:shadow-accent/8 transition-all duration-300 overflow-hidden">
              {/* Bottom accent glow */}
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-dark to-accent-light bg-clip-text text-transparent mb-2 tabular-nums">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-gray-medium font-medium text-xs uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
