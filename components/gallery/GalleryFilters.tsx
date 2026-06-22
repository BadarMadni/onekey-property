"use client";

import { categories, galleryImages } from "@/lib/gallery-data";

type Props = {
  active: string;
  onChange: (id: string) => void;
};

export default function GalleryFilters({ active, onChange }: Props) {
  const countFor = (id: string) =>
    id === "all"
      ? galleryImages.length
      : galleryImages.filter((img) => img.category === id).length;

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              isActive
                ? "bg-gradient-to-r from-accent-dark to-accent text-white shadow-lg shadow-accent/30 scale-105"
                : "bg-white border border-gray-border text-gray-medium hover:border-accent hover:text-accent hover:shadow-md"
            }`}
          >
            {cat.label}
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                isActive ? "bg-white/25 text-white" : "bg-gray-light text-gray-medium"
              }`}
            >
              {countFor(cat.id)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
