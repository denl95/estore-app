import '@testing-library/jest-dom'
import { ProductCard } from '@/components/SearchPage/ProductGrid/ProductCard'
import { Product } from '@/types/product'
import { render, screen } from '@testing-library/react'

const product: Product = {
  id: 1,
  title: 'Test Product',
  description: 'A test product for Jest testing',
  category: 'Electronics',
  stock: 100,
  brand: '1',
  price: 99.99,
  rating: 4.5,
  thumbnail: 'https://example.com/product.jpg',
  images: [],
}
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

describe('ProductCard', () => {
  it('renders the product details', () => {
    render(<ProductCard item={product} />)
    expect(screen.getByRole('img')).toHaveAttribute('src', product.thumbnail)
    expect(screen.getByText(product.title)).toBeInTheDocument()
    expect(screen.getByText(product.description)).toBeInTheDocument()
    expect(
      screen.getByText(`Category: ${product.category}`)
    ).toBeInTheDocument()
    expect(
      screen.getByText(`Price: ${formatter.format(product.price)}`)
    ).toBeInTheDocument()
    expect(screen.getByText(`Rating: ${product.rating}`)).toBeInTheDocument()
  })
})
