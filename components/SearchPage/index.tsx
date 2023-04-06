import { Col, Container, Row } from 'react-bootstrap';
import { SearchInput } from './SearchInput';
import { SortButtons } from './SortButtons';
import { FilterCheckbox } from './FilterCheckbox';
import styles from './styles.module.css';
import { ProductGrid } from './ProductGrid';

const sortItems = [
  {
    label: 'Price Low to High',
    value: 'price',
    order: 'asc',
  },
  {
    label: 'Price High to Low',
    value: 'price',
    order: 'desc',
  },
  {
    label: 'Popular first',
    value: 'rating',
    order: 'asc',
  }
];

export const SearchPage = () => {
  return (
    <Container className={styles.container} fluid>
      <SearchInput />
      <SortButtons items={sortItems} />
      <Row>
        <Col md="3">
          <FilterCheckbox />
        </Col>
        <Col md="9">
          <ProductGrid />
        </Col>
      </Row>
    </Container>
  );
};
