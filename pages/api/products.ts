import type { NextApiRequest, NextApiResponse } from 'next'
import productsJson from './products.json'
import { filterAndSortProducts } from '@/utils/filterAndSortProducts'
import { Product } from '@/types/product'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const {
    field,
    direction,
    minPrice = 0,
    maxPrice = Number.MAX_SAFE_INTEGER,
    categories,
    name,
  } = req.query as Record<string, string>
  const products = filterAndSortProducts(
    productsJson.products,
    { minPrice: Number(minPrice), maxPrice: Number(maxPrice), categories: categories?.split(','), name },
    { field: field as keyof Product, direction: direction as 'desc' | 'asc' }
  )

  res.status(200).json(products)
}
