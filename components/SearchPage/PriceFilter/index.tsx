import { Accordion, Form } from 'react-bootstrap'
import styles from './styles.module.css'

interface Props {
  onMinPriceChange: (value?: number) => void
  onMaxPriceChange: (value?: number) => void
}

export function PriceFilter({ onMinPriceChange, onMaxPriceChange }: Props) {
  function onMinPriceBlur(e: { target: { value: string } }) {
    if (e.target) {
      onMinPriceChange(e.target.value ? Number(e.target.value) : undefined)
    }
  }
  function onMaxPriceBlur(e: { target: { value: string } }) {
    if (e.target) {
      onMaxPriceChange(e.target.value ? Number(e.target.value) : undefined)
    }
  }
  return (
    <Accordion className="mb-3" defaultActiveKey={['0']}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body>
          <div data-testid="price-filter" className={styles.inputContainer}>
            <Form.Control
              onBlur={onMinPriceBlur}
              size="sm"
              type="number"
              placeholder="Min"
            />
            <span className={styles.separator}>-</span>
            <Form.Control
              onBlur={onMaxPriceBlur}
              size="sm"
              type="number"
              placeholder="Max"
            />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
