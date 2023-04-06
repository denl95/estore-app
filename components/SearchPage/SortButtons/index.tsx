import { ButtonGroup, ToggleButton } from 'react-bootstrap';

interface SortItem {
  label: string;
  value: string;
  order: string;
}

interface Props {
  items: SortItem[];
}

export function SortButtons({ items }: Props) {
  return (
    <ButtonGroup className="mb-3">
      {items.map((item, idx) => {
        return (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="outline-primary"
            value="1"
            name="radio"
          >
            {item.label}
          </ToggleButton>
        );
      })}
    </ButtonGroup>
  );
}
