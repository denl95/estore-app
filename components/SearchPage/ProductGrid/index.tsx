import { Col, Row } from 'react-bootstrap'
import { ProductCard } from './ProductCard'
import { Product } from '@/types/product'
import Loading from '@/components/Loading'

interface Props {
  data?: Product[]
  loading: boolean
}

export function ProductGrid({ data, loading }: Props) {
  if (loading) {
    return <Loading />
  }
  return (
    <Row data-testid="product-grid">
      {data?.map((item) => {
        return (
          <Col key={item.id} md="4" className="mb-3">
            <ProductCard item={item} />
          </Col>
        )
      })}
    </Row>
  )
}
