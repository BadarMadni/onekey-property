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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <AnimateIn key={stat.label} delay={i * 0.1}>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-dark to-accent-light bg-clip-text text-transparent mb-2">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-gray-medium font-medium text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
