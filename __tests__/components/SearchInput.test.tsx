import { SearchInput } from '@/components/SearchPage/SearchInput'
import { render, fireEvent } from '@testing-library/react'

describe('SearchInput', () => {
  it('calls onChange when input is blurred', () => {
    const onChange = jest.fn()
    const { getByTestId } = render(<SearchInput onChange={onChange} />)
    const input = getByTestId('search-input')
    fireEvent.blur(input, { target: { value: 'test query' } })
    expect(onChange).toHaveBeenCalledWith('test query')
  })
})
