import { render, screen } from '@testing-library/react'

import Academic from '.'

describe('<Academic />', () => {
  it('should render the heading', () => {
    const { container } = render(<Academic />)

    expect(
      screen.getByRole('heading', { name: /Academic/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
