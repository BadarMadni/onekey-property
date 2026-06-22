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
      {/* Property header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold tracking-widest uppercase text-accent bg-accent/8 px-3 py-1 rounded-full">
              {type}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{name}</h2>
          <p className="flex items-center gap-1.5 text-gray-medium text-sm mt-1">
            <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </p>
        </div>
        <button
          onClick={() => setLightboxIndex(0)}
          className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors cursor-pointer group"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Show all {images.length} photos
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* Airbnb-style image grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-[320px] md:h-[500px] rounded-3xl overflow-hidden">
        {/* Hero — full height left side */}
        <div
          className="col-span-2 row-span-2 relative cursor-pointer group"
          onClick={() => setLightboxIndex(0)}
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 50vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        {/* 4 smaller images — right side */}
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
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              {isLast && remaining > 0 && (
                <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center gap-1">
                  <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  <span className="text-white font-bold text-lg">+{remaining}</span>
                  <span className="text-white/70 text-xs">more photos</span>
                </div>
              )}
            </div>
          );
        })}
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
