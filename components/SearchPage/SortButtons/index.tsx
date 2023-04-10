import { Product, SortOptions } from '@/types/product'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

export interface SortItem {
  label: string
  value: keyof Product
  direction: 'asc' | 'desc'
}

interface Props {
  items: SortItem[]
  activeItem?: SortOptions
  onChange: (options: SortOptions) => void
}

export function SortButtons({ items, activeItem, onChange }: Props) {
  return (
    <ButtonGroup data-testid="sort-buttons" className="mb-3">
      {items.map((item, idx) => {
        return (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="outline-primary"
            value={item.value + item?.direction}
            checked={
              activeItem?.field === item.value &&
              activeItem?.direction === item.direction
            }
            onChange={() =>
              onChange({ field: item.value, direction: item.direction })
            }
            name="radio"
          >
            {item.label}
          </ToggleButton>
        )
      })}
    </ButtonGroup>
  )
}
