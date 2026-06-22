"use client";

import Image from "next/image";
import type { GalleryImage } from "@/lib/gallery-data";
import { categories } from "@/lib/gallery-data";

type Props = {
  images: GalleryImage[];
  onOpen: (index: number) => void;
};

function getCategoryLabel(cat: string) {
  return categories.find((c) => c.id === cat)?.label ?? cat;
}

// Every 5th image (pos 0) = featured (col-span-2, row-span-2)
function getSpan(i: number) {
  return i % 5 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1";
}

export default function GalleryGrid({ images, onOpen }: Props) {
  if (images.length === 0) {
    return <div className="text-center py-24 text-gray-medium text-sm">No images found.</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-4">
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`${getSpan(i)} relative overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-500`}
          style={{ animationDelay: `${Math.min(i * 0.04, 0.6)}s` }}
          onClick={() => onOpen(i)}
        >
          {/* Image fills the entire grid cell */}
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-108"
            sizes="(max-width: 768px) 50vw, 33vw"
          />

          {/* Dark gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Slide-up label */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-350 ease-out">
            <span className="inline-flex items-center gap-1.5 bg-accent/95 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              {getCategoryLabel(img.category)}
            </span>
          </div>

          {/* Zoom icon centre */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-13 h-13 rounded-full bg-white/20 backdrop-blur-md border border-white/30 p-3 scale-75 group-hover:scale-100 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Featured badge on large image */}
          {i % 5 === 0 && (
            <div className="absolute top-3 left-3">
              <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
