export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

export type Property = {
  id: string;
  name: string;
  location: string;
  type: string;
  images: GalleryImage[];
};

function makeImages(id: string, name: string, count: number): GalleryImage[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/gallery/${id}/${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `${name} — Photo ${i + 1}`,
    category: id,
  }));
}

export const properties: Property[] = [
  {
    id: "property-1",
    name: "Surrey Residence",
    location: "Surrey, UK",
    type: "Detached House",
    images: makeImages("property-1", "Surrey Residence", 10),
  },
  {
    id: "property-2",
    name: "Egham Heights",
    location: "Egham, Surrey",
    type: "Semi-Detached",
    images: makeImages("property-2", "Egham Heights", 10),
  },
  {
    id: "property-3",
    name: "Richmond Walk",
    location: "Richmond, Surrey",
    type: "Terraced House",
    images: makeImages("property-3", "Richmond Walk", 18),
  },
  {
    id: "property-4",
    name: "Staines Court",
    location: "Staines-upon-Thames",
    type: "Apartment",
    images: makeImages("property-4", "Staines Court", 6),
  },
];

// Flat list for any component that still needs it
export const galleryImages: GalleryImage[] = properties.flatMap((p) => p.images);

// Categories derived from properties (for legacy filter components)
export const categories = [
  { id: "all", label: "All Properties", location: "" },
  ...properties.map((p) => ({ id: p.id, label: p.name, location: p.location })),
];
