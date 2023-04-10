import { Card, ListGroup } from 'react-bootstrap'
import { Product } from '@/types/product'

interface Props {
  item: Product
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function ProductCard({ item }: Props) {
  return (
    <Card style={{ height: '100%' }}>
      <Card.Img
        style={{ height: '180px' }}
        variant="top"
        src={item.thumbnail}
      />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <ListGroup>
          <ListGroup.Item>Category: {item.category}</ListGroup.Item>
          <ListGroup.Item>Price: {formatter.format(item.price)}</ListGroup.Item>
          <ListGroup.Item>Rating: {item.rating}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}
