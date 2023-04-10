import type { NextApiRequest, NextApiResponse } from 'next'
import productsJson from './products.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  const categories = Array.from(new Set(productsJson.products.map((product) => product.category)));

  res.status(200).json(categories)
}
