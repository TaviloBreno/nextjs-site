export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  state: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  imageUrl: string;
  badge?: string;
  type: 'apartamento' | 'casa' | 'sobrado' | 'cobertura' | 'terreno' | 'comercial';
}

export interface SearchFilters {
  city: string;
  type: string;
  priceRange: string;
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
}