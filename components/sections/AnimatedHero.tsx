"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function AnimatedHero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image */}
      <Image
        src="/hero-home.jpg"
        alt="Modern property"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={75}
      />
      {/* Dark overlay with blue tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/75 to-primary-light/50" />

      {/* Animated gradient glow */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-accent/15 to-accent-light/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent-dark/10 to-transparent rounded-full blur-[100px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-10 bg-gradient-to-r from-accent to-accent-light" />
            <span className="text-accent-light text-sm font-semibold tracking-widest uppercase">
              Property Management
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
          >
            We manage.
            <br />
            <motion.span
              className="bg-gradient-to-r from-accent-light via-accent to-white bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              You earn.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed"
          >
            Expert property management and landlord services in Surrey.
            Hassle-free letting with maximum returns.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/contact" size="lg" variant="primary">
              Get Free Valuation
            </Button>
            <Button href="/landlord-services" size="lg" variant="outline">
              Our Services
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-14 flex items-center gap-8 text-white/50 text-sm"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
