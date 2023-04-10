export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage?: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface FilterOptions {
  minPrice?: number;
  maxPrice?: number;
  categories?: string[];
  name?: string
}

export interface SortOptions {
  field?: keyof Product
  direction?: 'asc' | 'desc'
}
