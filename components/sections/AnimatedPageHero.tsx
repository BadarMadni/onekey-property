"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type AnimatedPageHeroProps = {
  title: string;
  subtitle: string;
  image?: string;
};

const defaultImages: Record<string, string> = {
  "Landlord Services": "/hero-landlord.jpg",
  "Tenant Support": "/hero-tenant.jpg",
  "Contact Us": "/hero-contact.jpg",
};

export default function AnimatedPageHero({ title, subtitle, image }: AnimatedPageHeroProps) {
  const bgImage = image || defaultImages[title] || "/hero-home.jpg";

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={75}
      />
      {/* Gradient Overlay - matching dark blue theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary/80 to-primary/70" />

      {/* Animated gradient glows */}
      <motion.div
        className="absolute top-10 right-10 w-56 h-56 bg-gradient-to-br from-accent/10 to-accent-light/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-accent-dark/8 to-transparent rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent-light" />
          <span className="text-accent-light/80 text-xs font-semibold tracking-widest uppercase">One Key Property</span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent-light" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-white/80 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
