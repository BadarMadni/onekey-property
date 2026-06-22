"use client";

import { useState, useMemo, useCallback } from "react";
import { galleryImages, categories } from "@/lib/gallery-data";
import GalleryFilters from "./GalleryFilters";
import GalleryGrid from "./GalleryGrid";
import GalleryLightbox from "./GalleryLightbox";

export default function GalleryClient() {
  const [active, setActive] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => active === "all" ? galleryImages : galleryImages.filter((img) => img.category === active),
    [active]
  );

  const handleFilter = useCallback((id: string) => {
    setLightboxIndex(null);
    setActive(id);
  }, []);

  const activeLabel = categories.find((c) => c.id === active)?.label ?? "All Properties";

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-light/70 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-gray-medium">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span><strong className="text-foreground font-semibold">{filtered.length}</strong> photos</span>
          </div>
          <div className="w-px h-4 bg-gray-border" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-light" />
            <span><strong className="text-foreground font-semibold">4</strong> managed properties</span>
          </div>
          <div className="w-px h-4 bg-gray-border" />
          <span className="text-accent font-medium">{activeLabel}</span>
        </div>

        <GalleryFilters active={active} onChange={handleFilter} />

        <div key={active} className="animate-gallery-in">
          <GalleryGrid images={filtered} onOpen={setLightboxIndex} />
        </div>

        {lightboxIndex !== null && (
          <GalleryLightbox
            images={filtered}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex((i) => (i! <= 0 ? filtered.length - 1 : i! - 1))}
            onNext={() => setLightboxIndex((i) => ((i! + 1) % filtered.length))}
          />
        )}
      </div>
    </section>
  );
}
