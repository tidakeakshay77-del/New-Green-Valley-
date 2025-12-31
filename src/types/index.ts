export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  withCount?: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: 'crop' | 'vegetable';
  image: string;
  description: string;
  season: string;
  availability: 'available' | 'seasonal' | 'out-of-stock';
  farmingMethod: string;
  benefits?: string[];
  harvestTime?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: string;
}
