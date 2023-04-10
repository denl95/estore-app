import { PriceFilter } from '@/components/SearchPage/PriceFilter'
import { render, fireEvent } from '@testing-library/react'

describe('PriceFilter', () => {
  it('calls onMinPriceChange and onMaxPriceChange with correct values on blur', () => {
    const onMinPriceChange = jest.fn()
    const onMaxPriceChange = jest.fn()
    const { getByPlaceholderText } = render(
      <PriceFilter
        onMinPriceChange={onMinPriceChange}
        onMaxPriceChange={onMaxPriceChange}
      />
    )

    const minInput = getByPlaceholderText('Min')
    const maxInput = getByPlaceholderText('Max')

    fireEvent.blur(minInput, { target: { value: '10' } })
    fireEvent.blur(maxInput, { target: { value: '20' } })

    expect(onMinPriceChange).toHaveBeenCalledWith(10)
    expect(onMaxPriceChange).toHaveBeenCalledWith(20)
  })
})
