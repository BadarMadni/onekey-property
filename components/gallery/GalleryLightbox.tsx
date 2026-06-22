"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/gallery-data";

type Props = {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function GalleryLightbox({ images, index, onClose, onPrev, onNext }: Props) {
  const img = images[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-primary-dark/96 backdrop-blur-xl" />

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 bg-white/10 text-white text-sm font-medium px-5 py-2 rounded-full backdrop-blur-sm border border-white/10">
        {index + 1} / {images.length}
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/10 flex items-center justify-center text-white transition-all duration-200 hover:rotate-90 hover:scale-110 cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 md:left-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/10 flex items-center justify-center text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm cursor-pointer"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative z-10 mx-16 md:mx-24 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={1200}
          height={800}
          className="w-full h-auto max-h-[80vh] object-contain"
          priority
          sizes="(max-width: 768px) 90vw, 80vw"
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 md:right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/10 flex items-center justify-center text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm cursor-pointer"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Caption */}
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-white/50 text-xs tracking-wide">
        {img.alt}
      </p>
    </div>
  );
}
