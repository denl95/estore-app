import { Product, FilterOptions, SortOptions } from '@/types/product'

export function filterAndSortProducts(
  products: Product[],
  filterOptions: FilterOptions,
  sortOptions: SortOptions
): Product[] {
  let filteredProducts = products

  // Filter by price
  const minPrice = filterOptions.minPrice ?? 0
  const maxPrice = filterOptions.maxPrice ?? Number.MAX_VALUE
  filteredProducts = filteredProducts.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  )

  // Filter by category
  if (filterOptions.categories) {
    filteredProducts = filteredProducts.filter((product) =>
      filterOptions.categories?.includes(product.category)
    )
  }

  // Filter by name
  if (filterOptions.name) {
    const regex = new RegExp(filterOptions.name, 'i')
    filteredProducts = filteredProducts.filter((product) =>
      regex.test(product.title)
    )
  }

  // Sort by field and direction
  if (sortOptions.field && sortOptions.direction) {
    const { field, direction } = sortOptions
    filteredProducts.sort((a, b) => {
      let comparison = 0
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (a[field!] > b[field!]) {
        comparison = 1
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      } else if (a[field!] < b[field!]) {
        comparison = -1
      }
      return direction === 'desc' ? comparison * -1 : comparison
    })
  }

  return filteredProducts
}
