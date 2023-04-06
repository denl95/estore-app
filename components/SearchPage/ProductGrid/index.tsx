import { Col, Row } from 'react-bootstrap';
import { ProductCard } from './ProductCard';

export function ProductGrid() {
  return (
    <Row>
      <Col md='4'>
        <ProductCard />
      </Col>
    </Row>
  );
}
