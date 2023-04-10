import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a search-input', () => {
    render(<Home />)

    const heading = screen.getByTestId('search-input')

    expect(heading).toBeInTheDocument()
  })
})
