import { render, fireEvent } from '@testing-library/react'
import { SortButtons, SortItem } from '@/components/SearchPage/SortButtons'
import '@testing-library/jest-dom'

const items: SortItem[] = [
  { label: 'Name (A-Z)', value: 'name' as any, direction: 'asc' },
  { label: 'Name (Z-A)', value: 'name' as any, direction: 'desc' },
  { label: 'Price (low to high)', value: 'price', direction: 'asc' },
  { label: 'Price (high to low)', value: 'price', direction: 'desc' },
]

const mockOnChange = jest.fn()

describe('SortButtons', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('renders the sort items', () => {
    const { getByTestId } = render(
      <SortButtons items={items} onChange={mockOnChange} />
    )
    const sortButtons = getByTestId('sort-buttons')
    expect(sortButtons.children.length).toBe(items.length * 2)
  })

  it('calls onChange when a sort button is clicked', () => {
    const { getByLabelText } = render(
      <SortButtons
        items={items}
        activeItem={items[0]}
        onChange={mockOnChange}
      />
    )
    const sortButton = getByLabelText(items[1].label)
    fireEvent.click(sortButton)
    expect(mockOnChange).toHaveBeenCalledTimes(1)
    expect(mockOnChange).toHaveBeenCalledWith({
      field: items[1].value,
      direction: items[1].direction,
    })
  })
})
