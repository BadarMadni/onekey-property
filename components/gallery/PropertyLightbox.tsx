"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/gallery-data";

type Props = {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
};

export default function PropertyLightbox({ images, startIndex, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const thumbRef = useRef<HTMLDivElement>(null);
  const img = images[index];

  const prev = () => setIndex((i) => (i <= 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll active thumbnail into view
  useEffect(() => {
    const el = thumbRef.current?.children[index] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [index]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
        <span className="text-white/60 text-sm font-medium tracking-wide">
          {index + 1} <span className="text-white/30">/</span> {images.length}
        </span>
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors cursor-pointer"
        >
          <span>Close</span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>
      </div>

      {/* Main image area */}
      <div className="flex-1 relative flex items-center justify-center px-16 py-6 min-h-0">
        {/* Prev */}
        <button
          onClick={prev}
          className="absolute left-4 w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all cursor-pointer z-10"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div key={img.src} className="relative w-full h-full max-w-5xl" style={{ animation: "fadeIn .2s ease-out" }}>
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-contain"
            priority
            sizes="90vw"
          />
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-4 w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all cursor-pointer z-10"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Thumbnail strip */}
      <div
        ref={thumbRef}
        className="flex gap-2 px-6 py-4 overflow-x-auto scrollbar-none border-t border-white/8"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((thumb, i) => (
          <button
            key={thumb.src}
            onClick={() => setIndex(i)}
            className={`flex-shrink-0 w-16 h-12 relative rounded-lg overflow-hidden transition-all duration-200 cursor-pointer ${
              i === index
                ? "ring-2 ring-white opacity-100"
                : "opacity-40 hover:opacity-80"
            }`}
          >
            <Image src={thumb.src} alt="" fill className="object-cover" sizes="64px" />
          </button>
        ))}
      </div>
    </div>
  );
}
