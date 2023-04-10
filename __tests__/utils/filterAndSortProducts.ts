import { FilterOptions, Product, SortOptions } from '@/types/product'
import { filterAndSortProducts } from '@/utils/filterAndSortProducts'

describe('filterAndSortProducts', () => {
  const products: Product[] = [
    {
      id: 1,
      title: 'Product A',
      description: 'Description A',
      price: 10,
      rating: 4.5,
      stock: 10,
      brand: 'Brand A',
      category: 'Category A',
      thumbnail: '',
      images: [],
    },
    {
      id: 2,
      title: 'Product B',
      description: 'Description B',
      price: 20,
      rating: 4.0,
      stock: 5,
      brand: 'Brand B',
      category: 'Category B',
      thumbnail: '',
      images: [],
    },
    {
      id: 3,
      title: 'Product C',
      description: 'Description C',
      price: 30,
      rating: 3.5,
      stock: 3,
      brand: 'Brand C',
      category: 'Category C',
      thumbnail: '',
      images: [],
    },
  ]

  test('should filter products by price and sort by rating in descending order', () => {
    const filterOptions: FilterOptions = { maxPrice: 20 }
    const sortOptions: SortOptions = { field: 'rating', direction: 'desc' }
    const expectedProducts = [products[0], products[1]]

    const filteredAndSortedProducts = filterAndSortProducts(
      products,
      filterOptions,
      sortOptions
    )

    expect(filteredAndSortedProducts).toEqual(expectedProducts)
  })

  test('should filter products by category and name', () => {
    const filterOptions: FilterOptions = { categories: ['Category A'], name: 'A' }
    const expectedProducts = [products[0]]

    const filteredProducts = filterAndSortProducts(
      products,
      filterOptions,
      {} // sort options not specified
    )

    expect(filteredProducts).toEqual(expectedProducts)
  })

  test('should return all products if no filter or sort options are specified', () => {
    const expectedProducts = products

    const allProducts = filterAndSortProducts(products, {}, {})

    expect(allProducts).toEqual(expectedProducts)
  })
})
