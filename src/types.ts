export type PageTab = 'shop' | 'portfolio' | 'services' | 'about' | 'contact';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  brand: string;
  category: 'Power Tools' | 'Hand Tools - Fundi' | 'Building Materials' | 'Roofing (Mabati)' | 'Electricals';
  price: number; // in KSh
  originalPrice?: number;
  unit?: string; // e.g. '/ pc', 'Wholesale'
  badge?: 'Top Seller' | 'Bulk Offer' | 'Hot Deal' | 'New Arrival' | 'KEBS Certified';
  imageUrl: string;
  specs: ProductSpec[];
  description: string;
  inStock: boolean;
  rating?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterState {
  categories: string[];
  brands: string[];
  minPrice: string;
  maxPrice: string;
  sortBy: 'relevance' | 'price-low' | 'price-high' | 'newest';
  searchQuery: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  year: string;
  imageUrl: string;
  description: string;
  scope: string;
  scale: string;
  compliance: string;
}

export interface SupplyHighlight {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Branch {
  name: string;
  address: string;
  city: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: string;
}

export interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  companyName?: string;
  category: string;
  message: string;
  branch: string;
}
