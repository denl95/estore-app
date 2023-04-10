import { Col, Container, Row } from 'react-bootstrap'
import { useProductApi } from '@/hooks/useProductApi'
import { SearchInput } from './SearchInput'
import { SortButtons, SortItem } from './SortButtons'
import { FilterCheckbox } from './FilterCheckbox'
import { ProductGrid } from './ProductGrid'
import { PriceFilter } from './PriceFilter'
import styles from './styles.module.css'
import { useCategoriesApi } from '@/hooks/useCategoriesApi'

const sortItems: SortItem[] = [
  {
    label: 'Price: Low to High',
    value: 'price',
    direction: 'asc',
  },
  {
    label: 'Price: High to Low',
    value: 'price',
    direction: 'desc',
  },
  {
    label: 'Popular first',
    value: 'rating',
    direction: 'desc',
  },
]

export const SearchPage = () => {
  const [productState, actions] = useProductApi()
  const categoriesState = useCategoriesApi()

  return (
    <Container className={styles.container} fluid>
      <SearchInput onChange={actions.onSearchQueryChange} />
      <SortButtons
        activeItem={productState.sortOptions}
        items={sortItems}
        onChange={actions.onSortOptionsChange}
      />
      <Row>
        <Col md="3">
          <FilterCheckbox
            onChange={actions.onCategoryChange}
            items={categoriesState.categories}
            loading={categoriesState.loading}
          />
          <PriceFilter
            onMinPriceChange={actions.onMinPriceChange}
            onMaxPriceChange={actions.onMaxPriceChange}
          />
          <div data-testid="total-products" className="h5">
            Total products: {productState.data?.length}
          </div>
        </Col>
        <Col md="9">
          <ProductGrid
            data={productState.data}
            loading={productState.loading}
          />
        </Col>
      </Row>
    </Container>
  )
}
