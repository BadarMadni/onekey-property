"use client";

import { useState } from "react";
import Image from "next/image";
import type { Property } from "@/lib/gallery-data";
import PropertyLightbox from "./PropertyLightbox";

type Props = { property: Property };

export default function PropertyShowcase({ property }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { name, location, type, images } = property;
  const preview = images.slice(0, 5);
  const remaining = images.length - 5;

  return (
    <div className="mb-20">
      {/* Premium property header */}
      <div className="relative mb-6 pl-5 border-l-[3px] border-accent">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
          <div>
            {/* Type badge + verified */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-accent/15 to-accent-light/10 text-accent-dark text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-accent/20">
                {type}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Managed by One Key
              </span>
            </div>

            {/* Name */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              {name}
            </h2>

            {/* Location */}
            <p className="flex items-center gap-1.5 text-gray-medium text-sm mt-2">
              <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </p>
          </div>

          {/* CTA button */}
          <button
            onClick={() => setLightboxIndex(0)}
            className="flex-shrink-0 flex items-center gap-2 bg-foreground hover:bg-primary-light text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 cursor-pointer group"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            View all {images.length} photos
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>
      </div>

      {/* Airbnb-style image grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-[320px] md:h-[520px] rounded-3xl overflow-hidden ring-1 ring-black/8 shadow-xl shadow-black/8">
        {/* Hero */}
        <div
          className="col-span-2 row-span-2 relative cursor-pointer group"
          onClick={() => setLightboxIndex(0)}
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 50vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        {/* 4 smaller images */}
        {preview.slice(1).map((img, i) => {
          const isLast = i === 3;
          return (
            <div
              key={img.src}
              className="relative cursor-pointer group overflow-hidden"
              onClick={() => setLightboxIndex(i + 1)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              {isLast && remaining > 0 && (
                <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center gap-1">
                  <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  <span className="text-white font-bold text-xl">+{remaining}</span>
                  <span className="text-white/70 text-xs tracking-wide">more photos</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Gradient divider */}
      <div className="flex items-center gap-4 mt-20">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-border to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-border to-transparent" />
      </div>

      {lightboxIndex !== null && (
        <PropertyLightbox
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
